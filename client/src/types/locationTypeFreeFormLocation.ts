import { WGS84LatLongPointType } from "./WGS84LatLongPointType";

export interface LocationTypeFreeFormLocation {
  //#region ODataApi Properties
  LocationName?: string;
  GeoPosition2D: WGS84LatLongPointType;
  //#endregion
}
