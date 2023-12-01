import { MilitaryUnitIdentificationType } from "./militaryUnitIdentificationType";

export interface HandoverType {
  //#region ODataApi Properties
  To: MilitaryUnitIdentificationType[];
  By: MilitaryUnitIdentificationType;
  //#endregion
}
