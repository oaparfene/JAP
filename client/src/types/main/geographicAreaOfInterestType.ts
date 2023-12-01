//#region AngularOData Imports
import { GAOIStatusEnum } from "../GAOIStatusEnum";
import { FunctionalCategoryCodeType } from "../functionalCategoryCodeType";
import { GeographicAreaCategoryType } from "../geographicAreaCategoryType";
import { CountryCodeType } from "../countryCodeType";
import { GeographicAreaType } from "../geographicAreaType";
import { DateTimeZuluType } from "../dateTimeZuluType";
import { EntityCreatorType } from "../entityCreatorType";
import { SecurityType } from "../securityType";

export interface GeographicAreaOfInterestType {
  //#region ODataApi Properties
  Identifier: string;
  GeographicAreaCategory?: GeographicAreaCategoryType;
  GeographicArea?: GeographicAreaType;
  SerialNumber: string;
  BasicEncyclopediaNumber?: string;
  CountryCode?: CountryCodeType;
  Status?: GAOIStatusEnum;
  Description?: string;
  Name?: string;
  FunctionalCategoryCode?: FunctionalCategoryCodeType;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  //#endregion
}
