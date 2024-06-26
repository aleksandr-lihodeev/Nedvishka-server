import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import cardRoutes from "./routes/cardRoutes.js";
import favoriteRoutes from "./routes/favoriteRoutes.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5050;
const corsOptions = {
  origin: process.env.FRONTEND_HOST,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "20mb" }));

app.use("/auth", authRoutes);
app.use("/cards", cardRoutes);
app.use("/favorite", favoriteRoutes);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connect db success"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(port, () => {
  console.log("Server is running at localhost: " + port);
});
