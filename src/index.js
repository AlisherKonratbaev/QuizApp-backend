import express from "express";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
import cors from 'cors';
import subjectRouter from "./routes/subjectRouter.js";
import questionRouter from "./routes/questionRouter.js";
import examRouter from "./routes/examRouter.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const apiUrl = process.env.API_URL || "";

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Hello World!"));

app.use(subjectRouter);
app.use(questionRouter);
app.use(examRouter)

const start = async () => {
  try {
    await mongoose.connect(apiUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(port, () =>
      console.log(`сервер запушен на порту ${port}!`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
