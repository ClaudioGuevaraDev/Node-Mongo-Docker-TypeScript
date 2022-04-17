import { Request, Response } from "express";
import Task from "../models/Task";

export const createTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTask = new Task(req.body);

  try {
    const savedTask = await newTask.save();
    return res.status(201).json({
      status: "success",
      message: "Task created",
      data: savedTask,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error to create the task",
    });
  }

  return res.json("");
};
