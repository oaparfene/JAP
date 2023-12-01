import { GeographicAreaOfInterestType } from "./main/geographicAreaOfInterestType";

export interface GeographicAreaOfInterestOrReferenceType {
  //#region ODataApi Properties
  ownedId: number;
  GeographicAreaOfInterestReference?: string;
  GeographicAreaOfInterest?: GeographicAreaOfInterestType;
  //#endregion
}
