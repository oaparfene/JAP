import { TaskType } from "../taskType";
import { Role } from "../roleType";

export interface CollectionTaskType extends TaskType {
  Role: Role;
  J3MissionID?: string;
}
