import { DayOfWeekEnumeration } from "./dayOfWeekEnumeration";

export interface RecurrenceType {
  //#region ODataApi Properties
  Start: Date;
  Dates: Date[];
  DaysOfMonth?: string[];
  DaysOfWeek: DayOfWeekEnumeration[];
  Stop: Date;
  //#endregion
}
