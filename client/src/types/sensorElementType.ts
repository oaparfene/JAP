
  import { OperationalStatusType } from './operationalStatusType';
  import { SensorClassType } from './sensorClassType';
  import { GeographicAreaType } from './geographicAreaType';
  import { Location3DType } from './location3DType';
  
  export interface SensorElementType {
    //#region ODataApi Properties
    Coverage?: GeographicAreaType;
    Location3D?: Location3DType;
    Status: OperationalStatusType;
    ElementClass: SensorClassType;
    id?: string;
    //#endregion
  }