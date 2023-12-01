import { UnitOrSystemReferenceType } from "./unitOrSystemReferenceType";

export interface OriginatorType {
  //#region ODataApi Properties
  Requestor: string;
  Originator?: UnitOrSystemReferenceType;
  //#endregion
}
