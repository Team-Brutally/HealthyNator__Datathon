import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./routes/routes.js";
import userRoutes from "./routes/users.js";
import featuresRoutes from "./routes/features.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));
app.use("/", postRoutes);
app.use("/users", userRoutes);
app.use('/features',featuresRoutes);


const connection_url = process.env.CONNECTION_URL;

try {
  mongoose.connect(connection_url);
  console.log("MongoDB Connected");
} catch (err) {
  console.log(err);
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
