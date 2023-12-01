import { InformationRequirementStatusType } from "../informationRequirementStatusType";
import { IntelligenceDisciplineType } from "../intelligenceDisciplineType";
import { LocationAccuracyEnum } from "../locationAccuracyEnum";
import { RequirementTypeEnumeration } from "../requirementTypeEnumeration";
import { DateTimeZuluType } from "../dateTimeZuluType";
import { EntityCreatorType } from "../entityCreatorType";
import { SecurityType } from "../securityType";
import { RequiredProductType } from "../requiredProductType";
import { CalendarClockIntervalZuluType } from "../calendarClockIntervalZuluType";
import { OpenEndDateTimeZuluType } from "../openEndDateTimeZuluType";
import { IndicatorType } from "../indicatorType";
import { OriginatorType } from "../originatorType";
import { RequirementDescriptionType } from "../requirementDescriptionType";
import { RecurrenceType } from "../recurrenceType";
import { OperationCategoryType } from "../operationCategoryType";
import { ProposedUnitAssignmentType } from "../proposedUnitAssignmentType";
import { ProposedISRAssetAssignmentType } from "../proposedISRAssetAssignmentType";
import { GeographicAreaOfInterestOrReferenceType } from "../geographicAreaOfInterestOrReferenceType";
import { CategoryKeyPriorityOrReferenceType } from "../categoryKeyPriorityOrReferenceType";

export interface CollectionRequirementType {
  //#region ODataApi Properties
  Identifier: string;
  Recurrence?: RecurrenceType;
  ProductForExploitation?: string[];
  OperationCategory?: OperationCategoryType;
  ProposedUnitAssignment?: ProposedUnitAssignmentType[];
  ProposedISRAssetAssignment?: ProposedISRAssetAssignmentType[];
  CollectionInterval: CalendarClockIntervalZuluType;
  RequirementsRef?: RequirementDescriptionType[];
  RequiredInformation: string;
  LatestDateTimeZuluOfInformationValue?: OpenEndDateTimeZuluType;
  Name?: string;
  Priority: string;
  Status: InformationRequirementStatusType;
  SerialNumber: string;
  ReportedProduct?: string[];
  Indicators?: IndicatorType[];
  RequiredProduct?: RequiredProductType[];
  LatestReportDateTimeZulu?: OpenEndDateTimeZuluType;
  AnticipatedTimeIntervalForActivity?: CalendarClockIntervalZuluType;
  Comment?: string;
  SupportedOperations?: string[];
  Originator: OriginatorType;
  Type?: RequirementTypeEnumeration;
  IntelCollectionDiscipline: IntelligenceDisciplineType[];
  LocationAccuracyRequired?: LocationAccuracyEnum;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  CollectionPriorities?: CategoryKeyPriorityOrReferenceType[];
  GeographicAreaOfInterestReference?: GeographicAreaOfInterestOrReferenceType[];
  //#endregion
}
