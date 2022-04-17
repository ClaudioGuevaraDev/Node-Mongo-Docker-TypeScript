import { connect } from "mongoose";

import { config } from "../config";

(async () => {
  try {
    await connect(
      `mongodb://${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Error to connect the database");
  }
})();
