import { Router } from "express";
import { check } from "express-validator";
import { validateJwt, validateFields, validateTasks } from "../middlewares";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/task.controller";

const router: Router = Router();

// Todas las rutas deben estar validadas
router.use(validateJwt);

// http://localhost:4001/api/v1/task/new
router.post(
  "/new",
  [
    check("text").not().isEmpty().withMessage("El texto es obligatorio"),
    check("checked").isBoolean().withMessage("El campo debe ser un booleano"),
    validateFields,
  ],
  createTask
);

// http://localhost:4001/api/v1/task
router.get("/", getTasks);

// http://localhost:4001/api/v1/task/<:id>
router.put(
  "/:id",
  [
    validateTasks,
    check("id").isMongoId().withMessage("No es un ID valido"),
    check("text").not().isEmpty().withMessage("El texto es obligatorio"),
    check("checked").isBoolean().withMessage("El campo debe ser un booleano"),
    validateFields,
  ],
  updateTask
);

// http://localhost:4001/api/v1/task/<:id>
router.delete(
  "/:id",
  [
    validateTasks,
    check("id").isMongoId().withMessage("No es un ID valido"),
    validateFields,
  ],
  deleteTask
);

export default router;
