import { Request, Response } from "express";
import { Task } from "../domain/task";
import { taskService } from "../services/task.service";

const createTask = async (req: Request, res: Response): Promise<void> => {
  const { uidAuthenticated } = req.auth!;
  const { status, ...restResult } = await taskService.createTask({
    body: req.body as Task,
    uidAuthenticated,
  });
  res.status(status).json(restResult);
};

const getTasks = async (req: Request, res: Response): Promise<void> => {
  const { status, ...restResult } = await taskService.getTasks({
    ...req.auth!,
  });
  res.status(status).json(restResult);
};

const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { uidAuthenticated } = req.auth!;
  const { status, ...restResult } = await taskService.updateTask({
    body: req.body as Task,
    uidAuthenticated,
    taskId: req.params.id,
  });
  res.status(status).json(restResult);
};

const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { status, ...restResult } = await taskService.deleteTask({
    taskId: req.params.id,
  });
  res.status(status).json(restResult);
};

export { createTask, getTasks, updateTask, deleteTask };
