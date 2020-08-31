import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Products API" });
});

export default app;
