import { UniquePlatformIdentificationType } from "./uniquePlatformIdentificationType";

export interface IdentifiersType {
  //#region ODataApi Properties
  UniquePlatformIdentification: UniquePlatformIdentificationType;
  DIS_ID?: number;
  JUNumber?: string;
  NIC: string;
  RIC: string;
  UnitReferenceNumber?: string;
  ExtensionPoint?: string;
  //#endregion
}
