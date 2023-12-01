import { GeographicAreaType } from "./geographicAreaType";
import { WGS84LatLongPointType } from "./WGS84LatLongPointType";

export interface GeographicPolygonType extends GeographicAreaType {
  //#region ODataApi Properties
  Point: WGS84LatLongPointType[];
  //#endregion
}
