import { DateTimeZuluType } from "../dateTimeZuluType";
import { EntityCreatorType } from "../entityCreatorType";
import { SecurityType } from "../securityType";
import { OperationCategoryType } from "../operationCategoryType";

export interface OperationType {
  //#region ODataApi Properties
  Identifier: string;
  OperationCategory?: OperationCategoryType;
  ExerciseIndicator: boolean;
  CurrentORBAT?: string;
  OperationName: string;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  //#endregion
}
