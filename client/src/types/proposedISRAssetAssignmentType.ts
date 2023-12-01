import { DateTimeZuluType } from "./dateTimeZuluType";
import { MilitaryUnitIdentificationType } from "./militaryUnitIdentificationType";
import { UniquePlatformIdentificationType } from "./uniquePlatformIdentificationType";

export interface ProposedISRAssetAssignmentType {
  //#region ODataApi Properties
  AssignedTo: UniquePlatformIdentificationType;
  AssignedBy: MilitaryUnitIdentificationType;
  ProposedAt: DateTimeZuluType;
  //#endregion
}
