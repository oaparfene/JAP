import { RequirementTypeEnumeration } from "./requirementTypeEnumeration";
import { HandoverType } from "./handoverType";

export interface RequirementRefinementType {
  //#region ODataApi Properties
  RequirementReference: string;
  Refinement?: RequirementRefinementType[];
  Assignment?: HandoverType;
  Type: RequirementTypeEnumeration;
  Name: string;
  //#endregion
}
