import { PublishedStatusType } from "./publishedStatusType";
import { MissionType } from "./missionType";
import { DateTimeZuluType } from "./dateTimeZuluType";
import { SecurityType } from "./securityType";
import { DocumentCreatorType } from "./documentCreatorType";

export interface DocumentInformationType {
  //#region ODataApi Properties
  DocumentUUID: string;
  DocumentVersion: string;
  CreationDateTime: DateTimeZuluType;
  Creator: DocumentCreatorType;
  PublishedStatus: PublishedStatusType;
  Security?: SecurityType;
  MissionName?: string;
  MissionType: MissionType;
  ExtensionPoint?: string;
  //#endregion
}
