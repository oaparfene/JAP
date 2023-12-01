import { TimeIntervalType } from "./timeIntervalType";
import { ProductType } from "./productType";
import { TrackerType } from "./trackerType";

export interface SensorType {
  //#region ODataApi Properties
  SensorCapability?: ProductType[];
  GMTIUDPPort?: number;
  MaximumEndurance?: TimeIntervalType;
  TrackNumberRange?: TrackerType;
  VideoMulticastAddressAndPort?: string;
  ExtensionPoint?: string;
  //#endregion
}
