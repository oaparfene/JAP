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
import { GeographicAreaOfInterestOrReferenceType } from "../geographicAreaOfInterestOrReferenceType";

export interface InformationRequirementType {
  //#region ODataApi Properties
  active: boolean;
  assignedUnit: string;
  id: string;
  resourceAvailable: 'not planned' | 'planned' | 'collected';
  Identifier: string;
  CollectionInterval?: CalendarClockIntervalZuluType;
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
  GeographicAreaOfInterestReference?: GeographicAreaOfInterestOrReferenceType[];
  //#endregion
}
