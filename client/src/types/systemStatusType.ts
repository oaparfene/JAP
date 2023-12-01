  import { StatusType } from './statusType';
  import { Location3DType } from './location3DType';
  
  export interface SystemStatusType {
    //#region ODataApi Properties
    Status: StatusType;
    Location3D?: Location3DType;
    ExtensionPoint?: string;
    //#endregion
  }