import { Router } from "express";

import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);

router.post("/", createTask);

router.delete("/:id", deleteTask);

export default router;
