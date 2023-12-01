//#region AngularOData Imports

  import { DateTimeZuluType } from './dateTimeZuluType';
  import { EntityCreatorType } from './entityCreatorType';
  import { UniquePlatformIdentificationType } from './uniquePlatformIdentificationType';
  import { SecurityType } from './securityType';
  import { SensorStatusType } from './sensorStatusType';
  import { SystemStatusType } from './systemStatusType';
  import { PlannedAvailabilityType } from './plannedAvailabilityType';
  
  export interface ISRAssetStatusType {
    //#region ODataApi Properties
    Identifier: string;
    ReportingSystem: UniquePlatformIdentificationType;
    ReportingDateTimeZulu: DateTimeZuluType;
    SystemStatus: SystemStatusType;
    Sensors?: SensorStatusType[];
    PlannedAvailability?: PlannedAvailabilityType[];
    schemaVersion: number;
    CreationDateTime: DateTimeZuluType;
    Creator: EntityCreatorType;
    Security: SecurityType;
    Deleted: boolean;
    ExtensionPoint?: string;
    //#endregion
  }