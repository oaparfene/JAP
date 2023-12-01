
  import { UniquePlatformIdentificationType } from './uniquePlatformIdentificationType';
  import { SensorElementType } from './sensorElementType';
  import { SystemStatusType } from './systemStatusType';
  
  export interface SensorStatusType {
    //#region ODataApi Properties
    SensorSystem: UniquePlatformIdentificationType;
    SensorStatus: SystemStatusType;
    SensorElements: SensorElementType[];
    id?: string;
    //#endregion
  }