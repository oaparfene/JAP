import { InformationRequirementType } from "./main/informationRequirementType";

export interface InformationRequirementOrReferenceType {
  //#region ODataApi Properties
  id: number;
  InformationRequirementReference?: string;
  InformationRequirement: InformationRequirementType;
  //#endregion
}
