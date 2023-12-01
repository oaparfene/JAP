import { DateTimeZuluType } from "../dateTimeZuluType";
import { EntityCreatorType } from "../entityCreatorType";
import { SecurityType } from "../securityType";

export interface ORBATType {
  //#region ODataApi Properties
  Identifier: string;
  Operation: string;
  CourseOfActionIdentifier: string;
  OperationPlanIdentifier: string;
  ORBATName: string;
  schemaVersion: number;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  //#endregion
}
