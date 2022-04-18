import { connect } from "mongoose";

import { config } from "../config";

(async () => {
  try {
    const db = await connect(
      `mongodb://${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`
    );
    console.log("Database connected: " + db.connection.name);
  } catch (error) {
    console.log("Error to connect the database");
  }
})();
