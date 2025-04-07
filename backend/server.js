import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

// Initialize app
const app = express();

// Load environment variables
dotenv.config();

app.use(express.json()); // to parse JSON payloads
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Connect to MongoDB (ensure it connects on each invocation)
connectToMongoDB().catch(err => console.error("MongoDB connection error:", err));

// Export the app as a handler for Vercel
export default app;