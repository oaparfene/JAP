import { SecurityClassificationType } from "./securityClassificationType";

export interface SecurityType {
  Policy: string;
  Classification: SecurityClassificationType;
  Releasability?: string[];
}
