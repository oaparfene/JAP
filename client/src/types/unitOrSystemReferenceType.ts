import { MilitaryUnitIdentificationType } from "./militaryUnitIdentificationType"
import { UniquePlatformIdentificationType } from "./uniquePlatformIdentificationType";

export interface UnitOrSystemReferenceType {
  SystemID?: UniquePlatformIdentificationType;
  Unit?: MilitaryUnitIdentificationType;
}
