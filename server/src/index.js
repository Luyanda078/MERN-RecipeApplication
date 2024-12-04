import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());
// server.js
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


app.listen(3001, ()=> console.log("SERVER STARTED!"));