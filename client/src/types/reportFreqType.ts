
import { ReportFreqTypeFreqType } from "./reportFreqTypeFreqType";
import { TimeIntervalType } from "./timeIntervalType";

export interface ReportFreqType {
  //#region ODataApi Properties
  FreqType: ReportFreqTypeFreqType;
  TimeInterval?: TimeIntervalType;
  //#endregion
}
