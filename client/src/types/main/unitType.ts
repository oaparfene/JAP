import { IntelligenceDisciplineType } from "../intelligenceDisciplineType";
import { MilitaryOrganisationTypeServiceCode } from "../militaryOrganisationTypeServiceCode";
import { UnitTypeSupplementarySpecialisationCode } from "../unitTypeSupplementarySpecialisationCode";
import { UnitTypeSizeCode } from "../unitTypeSizeCode";
import { OrganisationTypeCommandAndControlCategoryCode } from "../organisationTypeCommandAndControlCategoryCode";
import { DateTimeZuluType } from "../dateTimeZuluType";
import { EntityCreatorType } from "../entityCreatorType";
import { MilitaryUnitIdentificationType } from "../militaryUnitIdentificationType";
import { SecurityType } from "../securityType";
import { MilitaryUnitNameType } from "../militaryUnitNameType";
import { UnitLocatedAtType } from "../unitLocatedAtType";

export interface UnitType {
  //#region ODataApi Properties
  Identifier: string;
  MilitaryUnitName: MilitaryUnitNameType;
  ServiceType: MilitaryOrganisationTypeServiceCode;
  UnitTypeCode: UnitTypeSupplementarySpecialisationCode[];
  UnitSize: UnitTypeSizeCode;
  APP6BSymbolIDCodingReference: string;
  C2CategoryCode: OrganisationTypeCommandAndControlCategoryCode;
  UnitLocatedAt?: UnitLocatedAtType[];
  IntelCollectionDiscipline: IntelligenceDisciplineType[];
  Identification: MilitaryUnitIdentificationType;
  UnitReferenceNumber?: string;
  schemaVersion: number;
  CreationDateTime: DateTimeZuluType;
  Creator: EntityCreatorType;
  Security: SecurityType;
  Deleted: boolean;
  ExtensionPoint?: string;
  //#endregion
}
