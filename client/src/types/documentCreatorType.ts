import { MilitaryUnitIdentificationType } from "./militaryUnitIdentificationType";
import { UniquePlatformIdentificationType } from "./uniquePlatformIdentificationType";

export interface DocumentCreatorType {
  //#region ODataApi Properties
  MilitaryUnit?: MilitaryUnitIdentificationType;
  Organization?: string;
  UniquePlatformIdentification: UniquePlatformIdentificationType;
  Author: string;
  //#endregion
}
