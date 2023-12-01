//#region AngularOData Imports

import { BattleSpaceDimensionType } from "../battlespaceDimensionType";
import { DateTimeZuluType } from "../dateTimeZuluType";
import { EntityCreatorType } from "../entityCreatorType";
import { SecurityType } from "../securityType";
import { PointOfContactDataType } from "../pointOfContactDataType";
import { PresenceAtLocationType } from "../presenceAtLocationType";
import { IdentifiersType } from "../identifiersType";
import { CapabilityType } from "../capabilityType";

export interface ISRSystemType {
  //#region ODataApi Properties
  Identifier: string;
  Identifiers: IdentifiersType;
  SystemDescription: string;
  Capability?: CapabilityType;
  BattleSpaceDimension?: BattleSpaceDimensionType;
  ContactInfo: PointOfContactDataType;
  PresenceAtLocation?: PresenceAtLocationType;
  APP6BSymbolIDCodingReference?: string;
  EnglishName: string;
  Name: string;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  //#endregion
}
