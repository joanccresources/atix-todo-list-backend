import { Document } from "mongoose";
import { HttpStatusCode } from "../types";
import { Task } from "./task.interface";

export interface TaskFromDb extends Document, Task {}

export type ResponseCreateTask = {
  status: HttpStatusCode;
} & (
  | {
      ok: true;
      task: TaskFromDb;
    }
  | {
      ok: false;
      msg: string;
    }
);

export type ResponseGetTasks = {
  status: HttpStatusCode;
} & (
  | {
      ok: true;
      tasks: Array<TaskFromDb>;
    }
  | {
      ok: false;
      msg: string;
    }
);

export type ResponseUpdateTask = {
  status: HttpStatusCode;
} & (
  | {
      ok: true;
      task: unknown;
    }
  | {
      ok: false;
      msg: string;
    }
);

export type ResponseDeleteTask = {
  status: HttpStatusCode;
} & (
  | {
      ok: true;
    }
  | {
      ok: false;
      msg: string;
    }
);
