//#region AngularOData Imports
import { DateTimeZuluType } from "./dateTimeZuluType";
import { EntityCreatorType } from "./entityCreatorType";
import { SecurityType } from "./securityType";
import { UnitOrSystemReferenceType } from "./unitOrSystemReferenceType";
import { CalendarClockIntervalZuluType } from "./calendarClockIntervalZuluType";
import { TaskingUnitReasonAndStatusType } from "./taskingUnitReasonAndStatusType";
import { TaskedAssetReasonAndStatusType } from "./taskedAssetReasonAndStatusType";
import { ISRAssetActivityRequirementType } from "./ISRAssetActivityRequirementType";

export interface TaskType {
  Identifier: string;
  SerialNumber: string;
  TaskPriority: number;
  Remark?: string;
  AssignedTo: UnitOrSystemReferenceType;
  AssignedBy: UnitOrSystemReferenceType;
  TaskInterval: CalendarClockIntervalZuluType;
  TaskingUnitStatus: TaskingUnitReasonAndStatusType;
  TaskedAssetStatus: TaskedAssetReasonAndStatusType;
  schemaVersion: number;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  ISRAssetActivityRequirement?: ISRAssetActivityRequirementType[];
}
