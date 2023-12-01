import { CategoryKeyPriorityType } from "./categoryKeyPriorityType";

export interface CategoryKeyPriorityOrReferenceType {
  //#region ODataApi Properties
  ownedId: number;
  CategoryKeyPriorityReference?: string;
  CategoryKeyPriority?: CategoryKeyPriorityType;
  //#endregion
}
