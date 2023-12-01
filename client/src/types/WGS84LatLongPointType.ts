import { GeographicAreaType } from "./geographicAreaType";
import { LatitudeType } from "./latitudeType";
import { LongitudeType } from "./longitudeType";

export interface WGS84LatLongPointType extends GeographicAreaType {
  //#region ODataApi Properties
  Latitude: LatitudeType;
  Longitude: LongitudeType;
  //#endregion
}
