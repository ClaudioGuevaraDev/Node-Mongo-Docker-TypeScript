import { Router } from "express";

import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.controller";

const router = Router();

router.get("/", getAllTasks);
router.get("/:id", getTask);

router.post("/", createTask);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

export default router;
