import { Location3DHeightTypeType } from "./location3DHeightTypeType";
import { WGS84LatLongPointType } from "./WGS84LatLongPointType";
import { Location3DHeightType } from "./location3DHeightType";

export interface Location3DType {
  //#region ODataApi Properties
  Location: WGS84LatLongPointType;
  HeightType?: Location3DHeightTypeType;
  Height?: Location3DHeightType;
  //#endregion
}
