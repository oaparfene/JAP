import { DateTimeZuluType } from "./dateTimeZuluType";
import { EntityCreatorType } from "./entityCreatorType";
import { SecurityType } from "./securityType";

export interface CategoryKeyPriorityType {
  //#region ODataApi Properties
  Identifier: string;
  Key: string;
  Group?: string;
  Category: string;
  OperationName: string;
  WeightPercentage: number;
  Value: number;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  //#endregion
}
