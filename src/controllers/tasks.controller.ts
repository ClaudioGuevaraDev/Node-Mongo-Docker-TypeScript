import { Request, Response } from "express";

import Task from "../models/Task";

export const createTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const newTask = new Task(req.body);

    const savedTask = await newTask.save();
    return res.status(201).json({
      status: "success",
      message: "Task successfully created",
      data: savedTask,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error to create the task",
    });
  }
};

export const getAllTasks = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tasks = await Task.find({});

    return res.status(200).json({
      status: "success",
      message: "Tasks successfully listed",
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error to get tasks",
    });
  }
};

export const getTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });

    return res.status(200).json({
      status: "success",
      message: "Task successfully listed",
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error to get task",
    });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask)
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });

    return res.status(200).json({
      status: "success",
      message: "Task successfully deleted",
      data: deletedTask,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error to delete task",
    });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).json({
        status: "error",
        message: "Task not found",
      });

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.status(200).json({
      status: "success",
      message: "Task successfully updated",
      data: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error to update task",
    });
  }
};
