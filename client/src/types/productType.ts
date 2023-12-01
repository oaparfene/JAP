import { ProductTypeType } from "./productTypeType";
import { ProductBaseType } from "./productBaseType";

export interface ProductType {
  //#region ODataApi Properties
  Product: ProductBaseType;
  ProductTypeType: ProductTypeType;
  //#endregion
}
