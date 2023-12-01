import { DateTimeZuluType } from "./dateTimeZuluType";
import { GeographicAreaWithDescriptionType } from "./geographicAreaWithDescriptionType";

export interface PresenceAtLocationType {
  //#region ODataApi Properties
  GeographicLocation: GeographicAreaWithDescriptionType;
  StartDateTimeZulu: DateTimeZuluType;
  EndDateTimeZulu?: DateTimeZuluType;
  //#endregion
}
