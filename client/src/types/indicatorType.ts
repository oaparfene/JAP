import { IndicatorInterpretationType } from "./indicatorInterpretationType";
import { IndicatorObservationType } from "./indicatorObservationType";
import { IndicatorCategoryType } from "./indicatorCategoryType";
//#endregion

export interface IndicatorType {
  //#region ODataApi Properties
  QuantitativeStatement: string;
  Interpretation: IndicatorInterpretationType;
  Observation: IndicatorObservationType;
  Category: IndicatorCategoryType;
  //#endregion
}
