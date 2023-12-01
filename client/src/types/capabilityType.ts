import { ExploitationType } from "./exploitationType";
import { SensorType } from "./sensorType";
import { CSDType } from "./CSDType";
import { ServiceType } from "./serviceType";

export interface CapabilityType {
  //#region ODataApi Properties
  CCIRM?: boolean;
  Exploitation?: ExploitationType;
  Sensor?: SensorType;
  CSD?: CSDType;
  GroundStation?: boolean;
  C2?: boolean;
  Intel?: boolean;
  ScenarioGenerator?: boolean;
  Service?: ServiceType;
  ExtensionPoint?: string;
  //#endregion
}
