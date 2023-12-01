import { DateTimeZuluType } from "../dateTimeZuluType";
import { EntityCreatorType } from "../entityCreatorType";
import { SecurityType } from "../securityType";
import { LocationTypeFreeFormLocation } from "../locationTypeFreeFormLocation";
import { LocationTypeGeoLoc } from "../locationTypeGeoLoc";

export interface LocationType {
  //#region ODataApi Properties
  Identifier: string;
  FreeFormLocation?: LocationTypeFreeFormLocation;
  GeoLoc?: LocationTypeGeoLoc;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  //#endregion
}
