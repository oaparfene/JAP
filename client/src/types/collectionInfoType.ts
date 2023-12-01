import { ISRPlatformVisibilityEnum } from "./ISRPlatformVisibilityType";
import { PointOfContactDataType } from "./pointOfContactDataType";

export interface CollectionInfoType {
  //#region ODataApi Properties
  CrossCuePOC?: PointOfContactDataType;
  ChatRoomURI?: string;
  C2CoordinationAuthority?: PointOfContactDataType;
  ISRPlatformVisibility?: ISRPlatformVisibilityEnum;
  //#endregion
}
