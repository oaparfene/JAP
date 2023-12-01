import { DateTimeZuluType } from "./dateTimeZuluType";
import { MilitaryUnitIdentificationType } from "./militaryUnitIdentificationType";

export interface ProposedUnitAssignmentType {
  //#region ODataApi Properties
  AssignedTo: MilitaryUnitIdentificationType;
  AssignedBy: MilitaryUnitIdentificationType;
  ProposedAt: DateTimeZuluType;
  //#endregion
}
