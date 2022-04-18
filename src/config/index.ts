import dotenv from "dotenv";

dotenv.config();

export const config = {
  APP_PORT: process.env.APP_PORT || "4000",

  DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  DATABASE_PORT: process.env.DATABASE_PORT || "27017",
  DATABASE_NAME: process.env.DATABASE_NAME || "example",
};
