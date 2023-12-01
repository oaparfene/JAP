import { RequiredProductType } from "./requiredProductType";
import { CollectionInfoType } from "./collectionInfoType";
import { CalendarClockIntervalZuluType } from "./calendarClockIntervalZuluType";
import { GeographicAreaOfInterestOrReferenceType } from "./geographicAreaOfInterestOrReferenceType";
import { ContextualReferencesType } from "./contextualReferencesType";

export interface ISRAssetActivityRequirementType {
  ownedId: number;
  RequiredProduct: RequiredProductType[];
  ReportedProduct?: string[];
  CollectionInfo: CollectionInfoType;
  CollectionTimeInterval: CalendarClockIntervalZuluType;
  RequiredInformation?: ContextualReferencesType[];
  Identifier: string;
  ExtensionPoint?: string;
  GeographicAreaOfInterest?: GeographicAreaOfInterestOrReferenceType;
}
