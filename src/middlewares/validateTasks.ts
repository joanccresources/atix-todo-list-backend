import { NextFunction, Request, Response } from "express";
import { TaskModel } from "../models/task";

export const validateTasks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { uidAuthenticated } = req.auth!;
  const taskId = req.params.id;
  
  try {
    // Task debe existir
    const task = await TaskModel.findById(taskId);
    if (!task) {
      return res.status(404).json({
        ok: false,
        msg: `TaskId '${taskId}' no esta registrado en la BD`,
      });
    }

    // Task debe pertenecer al usuario autenticado
    if (task?.user.toString() !== uidAuthenticated) {
      return res.status(401).json({
        ok: false,
        msg: "No tiene privilegios para editar este evento",
      });
    }

    next();
  } catch (error) {
    let msg = "";
    if (error instanceof Error) msg += error.message;
    res.status(401).json({
      msg,
    });
  }
};
