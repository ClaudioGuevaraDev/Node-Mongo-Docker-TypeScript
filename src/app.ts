import express from "express";
import morgan from "morgan";

import { config } from "./config";

import { taskRoutes } from "./routes";

import { endpointNotFound } from "./middlewares";

const app = express();

app.set("port", config.APP_PORT);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/tasks", taskRoutes);

app.use(endpointNotFound);

export default app;
