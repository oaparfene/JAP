import { DateTimeZuluType } from "./dateTimeZuluType";
import { OpenEndDateTimeZuluType } from "./openEndDateTimeZuluType";

export interface OpenEndedTimeIntervalType {
  //#region ODataApi Properties
  Start?: DateTimeZuluType;
  End?: OpenEndDateTimeZuluType;
  //#endregion
}
