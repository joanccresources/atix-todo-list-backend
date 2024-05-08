import {
  RequestCreateTask,
  RequestDeleteTask,
  RequestGetTasks,
  RequestUpdateTask,
  ResponseCreateTask,
  ResponseDeleteTask,
  ResponseGetTasks,
  ResponseUpdateTask,
} from "../domain/task";
import { TaskModel } from "../models/task";

const createTask = async ({
  body,
  uidAuthenticated,
}: RequestCreateTask): Promise<ResponseCreateTask> => {
  try {
    const taskDoc = new TaskModel(body);
    taskDoc.user = uidAuthenticated as any;
    const savedTask = await taskDoc.save();

    return {
      ok: true,
      status: 201,
      task: savedTask,
    };
  } catch (error) {
    let msg = "";
    if (error instanceof Error) msg += error.message;
    return {
      ok: false,
      status: 500,
      msg,
    };
  }
};

const getTasks = async ({
  uidAuthenticated,
}: RequestGetTasks): Promise<ResponseGetTasks> => {
  try {
    // Solo puedes ver tus tasks
    const tasks = await TaskModel.find({ user: uidAuthenticated }).populate(
      "user",
      "name"
    );
    return {
      ok: true,
      status: 200,
      tasks,
    };
  } catch (error) {
    let msg = "";
    if (error instanceof Error) msg += error.message;
    return {
      ok: false,
      status: 500,
      msg,
    };
  }
};

const updateTask = async ({
  body,
  uidAuthenticated,
  taskId,
}: RequestUpdateTask): Promise<ResponseUpdateTask> => {
  try {
    const newTask = {
      ...body,
      user: uidAuthenticated,
    };
    const taskUpdated = await TaskModel.findByIdAndUpdate(taskId, newTask, {
      new: true,
    });

    return {
      ok: true,
      status: 200,
      task: taskUpdated,
    };
  } catch (error) {
    let msg = "";
    if (error instanceof Error) msg += error.message;
    return {
      ok: false,
      status: 500,
      msg,
    };
  }
};

const deleteTask = async ({
  taskId,
}: RequestDeleteTask): Promise<ResponseDeleteTask> => {
  try {
    await TaskModel.findByIdAndDelete(taskId);
    return { ok: true, status: 200 };
  } catch (error) {
    let msg = "";
    if (error instanceof Error) msg += error.message;
    return {
      ok: false,
      status: 500,
      msg,
    };
  }
};

export const taskService = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
};