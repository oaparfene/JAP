import { XMPPAccountType } from "./XMPPAccountType";
import { MilitaryUnitIdentificationType } from "./militaryUnitIdentificationType";
import { CallSignType } from "./callSignType";

export interface PointOfContactDataType {
  //#region ODataApi Properties
  LastName?: string;
  FirstName?: string;
  Rank?: string;
  Role?: string;
  Unit?: MilitaryUnitIdentificationType;
  Mail?: string;
  PhoneNumbers?: string[];
  CallSign?: CallSignType;
  XMPPAccount?: XMPPAccountType;
  ExtensionPoint?: string;
  //#endregion
}
