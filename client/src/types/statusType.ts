import { PositionStatusType } from "./positionStatusType";
import { OperationalStatusTimeType } from "./operationalStatusTimeType";

export interface StatusType {
  //#region ODataApi Properties
  PositionStatus: PositionStatusType;
  OperationalStatus: OperationalStatusTimeType;
  //#endregion
}
