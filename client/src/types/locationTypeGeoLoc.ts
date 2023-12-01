import { WGS84LatLongPointType } from "./WGS84LatLongPointType";

export interface LocationTypeGeoLoc {
  //#region ODataApi Properties
  LocationName: string;
  GeoLocationCode: string;
  GeoPosition2D: WGS84LatLongPointType;
  //#endregion
}
