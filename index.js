import express from 'express'
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5050;
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    // origin:process.env.FRONTEND_HOST
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth", authRoutes);


mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connect db success"))
    .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(port, () => {
    console.log("Server is running at localhost: " + port);
});
