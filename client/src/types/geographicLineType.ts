import { GeographicAreaType } from "./geographicAreaType";
import { WGS84LatLongPointType } from "./WGS84LatLongPointType";

export interface GeographicLineType extends GeographicAreaType {
  //#region ODataApi Properties
  PointA: WGS84LatLongPointType;
  PointB: WGS84LatLongPointType;
  //#endregion
}
