import { TaskedAssetStatusType } from "./taskedAssetStatusType";

export interface TaskedAssetReasonAndStatusType {
  Status: TaskedAssetStatusType;
  Reason?: string;
}
