% First JISR Asset Planning Model

enum CR;
enum ASSET;
enum INTELL;
enum NAI;
enum BASE;

%enum ALL_LOCATION; % union of NAI and BASE

% Define the NO_ASSET special value in the model;
%ASSET: no_asset;

% CRL
array[CR] of INTELL: required_int;
array[CR] of NAI: location;
array[CR] of int: location_int;
array[CR] of int: priority;
array[CR] of int: required_start_time;
array[CR] of int: required_duration;
array[CR] of int: ops_start_time;
array[CR] of int: ops_duration;

% ASSETS
array[INTELL,ASSET] of 0..1: sensor; % this can be modeled as an array of assets with allocated sensor but an asset can have multiple sensors
array[ASSET] of int: capacity;
array[ASSET] of int: on_station;
array[ASSET] of BASE: home;


% TRSP - based on Technician Routing and Scheduling Problem in Gurobi example
int: noCr = card(CR);       % number of CRs
int: noAsset = card(ASSET); % number of ASSET
int: noBase = card(BASE);   % number of start and end bases
int: noNai = card(NAI);     % number of CR locations


% enum in dzn file are not sorted in python
array[1..noCr] of CR: crl;
array[1..noAsset] of ASSET: asset_list;
array[1..noBase] of BASE: base_list;
array[1..noNai] of NAI: nai_list;


set of int: all_location = 1..(noNai+noBase); % all locations including the base at the end

array[all_location,all_location] of int: cost;

array[ASSET,1..noBase] of 0..1: home_int;


% check the quality of input data

%include "alldifferent.mzn"; % not used in the eneumeration formulation; requires int values

% A1 - check that the required time interval contains ops interval
constraint forall(i in CR)(assert((required_start_time[i] <= ops_start_time[i] /\
                                  required_duration[i] >= ops_duration[i]), 
                                  "Ops time interval outside of Required time interval contains")); 
                                  
% A2 - check CR are all different
constraint forall(i,j in CR where i<j)(assert(CR[i] != CR[j],"Duplicated CRs"));
 
% A3 - check assets are all different
constraint forall(i,j in ASSET where i<j)(assert(ASSET[i] != ASSET[j],"Duplicated ASSETs"));

% DECISION 

%array[CR,ASSET] of var int: start_collection;
%array[CR,ASSET] of var int: collection_interval;

% annother way to formulate this is 

%array[CR] of var ASSET: ctl; 
array[CR] of var 0..24*60: allocated_collection_start;
array[CR] of var 0..24*60: allocated_collection_duration;

% will try to use channeling between CRs and ASSETs

% TRSP decission variables
array[CR,ASSET] of var 0..1: ctl_binary;  % equal 1 if CR is assigned to ISR Asset , and 0 otherwise.
array[ASSET] of var 0..1: asset_used; % indicates if an asset is used or not, an asset can be used multiple times
array[all_location, all_location, ASSET] of var 0..1: travel; % indicate if an asset travels between 2 locations
array[CR] of var 0..1: cr_collected;  %equals 1 if job (CR) cannot be filled, and 0 otherwise.




% CONSTRAINTS
% connect ctl and ctl_binary

%constraint forall(i in CR, j in ASSET)(if ctl_binary[i,j] == 1 then ctl[i] = j endif);
%constraint forall(i in CR)(ctl_binary[i,ctl[i]] = 1); 
% missing the no asset for connecting ctl and ctl binary


% connect ctl_binary to asset_used

constraint forall(j in ASSET)(if sum(i in CR)(ctl_binary[i,j]) > 0 then asset_used[j] = 1 else asset_used[j] = 0 endif);

% connect ctl_binary to cr_collected 

constraint forall(i in CR)(if sum(j in ASSET)(ctl_binary[i,j]) > 0 then cr_collected[i] = 0 else cr_collected[i] = 1 endif);

%include "alldifferent_except.mzn"; % not used in the eneumeration formulation; requires int values

% C1 - required intell matches the sensor collection 
% constraint forall(i in CR)(sum(j in ASSET where sensor[required_int[i],j] == 1)(trace("ctl_binary[\(i),\(j)] == " ++ "cr_collected[\(i)]\n",ctl_binary[i,j] + cr_collected[i])) == 1);
constraint forall(i in CR)((sum(j in ASSET where sensor[required_int[i],j] == 1)(ctl_binary[i,j]) + cr_collected[i]) == 1);

%  [1, 0, 0, 0, 0, 0, 0, 
%   0, 0, 0, 0, 0, 1, 0, 
%   0, 0, 0, 0, 0, 0, 1, 
%   0, 1, 0, 0, 0, 0, 0, 
%   0, 0, 1, 0, 0, 0, 0, 
%   0, 0, 0, 1, 0, 0, 0, 
%   0, 1, 0, 0, 0, 0, 0, 
%   1, 0, 0, 0, 0, 0, 0, 
%   0, 0, 0, 0, 0, 1, 0, 
%   0, 0, 0, 0, 0, 0, 1])


% C2 - For each CR, we only allow one ISR Asset to be assigned.
constraint forall(i in CR)(sum(j in ASSET)(ctl_binary[i,j]) <= 1);

% C3 - For each ISR Asset, we ensure that the available capacity (time) of the ISR Asset is not exceeded
constraint forall(j in ASSET)(sum(i in CR)(required_duration[i] * ctl_binary[i,j]) + sum(u, v in all_location)(cost[u,v]*travel[u,v,j]) <= capacity[j]*asset_used[j]);


% C4 - ISR Asset tour: For each ISR Asset and job (CR), we ensure that if the ISR Asset is assigned to the job (CR), then the ISR Asset must travel to another location (to form a tour - minimum case is base to target location then back to the base). 
% constraint forall(i in CR, k in ASSET)(sum(j in all_location)(trace("travel[location_int[\(i)],\(j),\(k)] = ctl_binary[\(i),\(k)]\n",travel[location_int[i],j,k])) == ctl_binary[i,k]);
constraint forall(i in CR, k in ASSET)(sum(j in all_location)(travel[location_int[i],j,k]) == ctl_binary[i,k]);
constraint forall(j in CR, k in ASSET)(sum(i in all_location)(travel[i,location_int[j],k]) == ctl_binary[j,k]);

% C5 - same home base
constraint forall(k in ASSET, d in 1..noBase)(sum(j in all_location)(travel[noNai+d,j,k]) == home_int[k,d]*asset_used[k]);
constraint forall(k in ASSET, d in 1..noBase)(sum(i in all_location)(travel[i,noNai+d,k]) == home_int[k,d]*asset_used[k]);

% C6 - no overlapping of collection tasks
constraint forall(i,j in 1..noNai, k in ASSET where travel[i,j,k] == 1)(
            allocated_collection_start[CR[i]] + allocated_collection_duration[CR[i]] + cost[i,j] <= allocated_collection_start[CR[j]]);
            
% C7 - cover the ops time

% constraint forall(i in CR)(
%             trace("allocated_collection_start[\(i)] <= ops_start_time[\(i)]" ++
%                   "allocated_collection_start[\(i)] + allocated_collection_duration[\(i)] >= ops_start_time[\(i)] + ops_duration[\(i)]",
%                    allocated_collection_start[i] <= ops_start_time[i] /\
%                    allocated_collection_start[i] + allocated_collection_duration[i] >= ops_start_time[i] + ops_duration[i]));

constraint forall(i in CR)(allocated_collection_start[i] <= ops_start_time[i] /\
                   allocated_collection_start[i] + allocated_collection_duration[i] >= ops_start_time[i] + ops_duration[i]);


% C8 - start collection after the required time
constraint forall(i in CR)(allocated_collection_start[i] >= required_start_time[i] /\
                           allocated_collection_start[i] + allocated_collection_duration[i] <= required_start_time[i] + required_duration[i]);


%

% OBJECTIVE

% O1 - maximize the weighted, total collection time - same as O2

var int: obj_1 = sum(i, j in all_location)
                             (sum(k in ASSET)(travel[i,j,k]*cost[i,j]));

%var int: obj_1 = sum(i in CR where ctl[i] != NO_ASSET)
%                             (priority[i] * allocated_collection_duration[i]);

% O2 - maximize overlaping of required collection with allocated collection

%var int: obj_2 = sum(i in CR where ctl[i] != NO_ASSET)
%                             (allocated_collection_duration[i] - required_duration[i]);

% O3 - penalty if CR has no allocated ASSET

% var int: obj_3 = sum(i in CR)(ctl[i] = NO_ASSET);
var int: obj_3 = count(cr_collected,1);
% var int: obj_3 = sum(i in CR)(priority[i] * (1 - cr_collected[i]));

%var int: obj_3 = sum(i in CR)(

var int: obj = obj_3;

solve minimize obj;