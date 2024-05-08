// export interface ValidateJWT {
//   uidAuthenticated: string;
//   nameAuthenticated: string;
// }
import { Task } from "./task.interface";

export interface RequestCreateTask {
  body: Task;
  uidAuthenticated: string;
  [key: string]: unknown;
}

export interface RequestGetTasks {
  uidAuthenticated: string;
  [key: string]: unknown;
}

export interface RequestUpdateTask {
  body: Task;
  uidAuthenticated: string;
  taskId: string;
  [key: string]: unknown;
}

export interface RequestDeleteTask {
  taskId: string;
  [key: string]: unknown;
}
