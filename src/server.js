import express from "express";
import cors from "cors";
import morgan from "morgan";

import productRoutes from "./routes/products.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Welcome Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Products API" });
});

// Routes
app.use("/api/products", productRoutes);

export default app;
