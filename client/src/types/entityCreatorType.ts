import { MilitaryUnitIdentificationType } from "./militaryUnitIdentificationType";
import { UniquePlatformIdentificationType } from "./uniquePlatformIdentificationType";
export interface EntityCreatorType {
  MilitaryUnit: MilitaryUnitIdentificationType;
  UniquePlatformIdentification?: UniquePlatformIdentificationType;
  Author: string;
}
