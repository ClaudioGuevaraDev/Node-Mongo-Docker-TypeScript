import express from "express";
import morgan from "morgan";

import { config } from "./config";

const app = express();

app.set("port", config.APP_PORT);

export default app;
