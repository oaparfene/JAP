import { SecurityType } from "./securityType";
import { ReportFreqType } from "./reportFreqType";
import { ProductType } from "./productType";

export interface RequiredProductType {
  //#region ODataApi Properties
  ReportFrequency?: ReportFreqType;
  MaximumAllowedClassificationLevel: SecurityType;
  Comment?: string;
  Product: ProductType;
  //#endregion
}
