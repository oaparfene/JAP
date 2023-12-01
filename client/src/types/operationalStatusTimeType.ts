import { OperationalStatusType } from "./operationalStatusType";
import { DateTimeZuluType } from "./dateTimeZuluType";

export interface OperationalStatusTimeType {
  //#region ODataApi Properties
  Status: OperationalStatusType;
  ReturnToOperational?: DateTimeZuluType;
  ReturnToBase?: DateTimeZuluType;
  //#endregion
}
