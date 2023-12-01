import { GeographicAreaType } from "./geographicAreaType";
import { CalendarClockIntervalZuluType } from "./calendarClockIntervalZuluType";
import { OpenEndDateTimeZuluType } from "./openEndDateTimeZuluType";

export interface PlannedAvailabilityType {
  //#region ODataApi Properties
  PlannedAvailableInterval?: CalendarClockIntervalZuluType[];
  PlannedAvailableFrom?: OpenEndDateTimeZuluType[];
  PlannedAvailableRecurringDaily?: CalendarClockIntervalZuluType[];
  PlannedGeospatialCoverageArea?: GeographicAreaType[];
  //#endregion
}
