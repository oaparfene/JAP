import { GeographicAreaWithDescriptionTypeDetailedGeographicArea } from "./geographicAreaWithDescriptionTypeDetailedGeographicArea";

export interface GeographicAreaWithDescriptionType {
  //#region ODataApi Properties
  AreaDescription?: string;
  DetailedGeographicArea?: GeographicAreaWithDescriptionTypeDetailedGeographicArea;
  //#endregion
}
