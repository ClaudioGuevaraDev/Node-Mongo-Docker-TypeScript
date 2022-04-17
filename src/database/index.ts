import { connect } from "mongoose";

(async () => {
  try {
    await connect("mongodb://localhost:27017/docker");
    console.log("Database connected");
  } catch (error) {
    console.log("Error to connect the database");
  }
})();
