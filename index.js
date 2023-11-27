import express from "express";

import bodyParser from "body-parser";

// import routes
import Router from "./routes/routes.js";

const app = express();

app.use(bodyParser.json())

app.use(Router)


//database connection
import mongoose from "mongoose";

// import database_uri from "./database/database.js";

import dotenv from 'dotenv';
dotenv.config();

const DATABASE_URI = process.env.database_uri

const port = process.env.PORT;

mongoose
  .connect(DATABASE_URI)
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}.`);
    });
  })
  .catch((err) => console.log("err", err));
