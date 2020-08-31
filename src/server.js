import express from "express";
import cors from "cors";
import morgan from "morgan";

import pkg from "../package.json";

import productRoutes from "./routes/products.routes";
import usersRoutes from "./routes/user.routes";

const app = express();

// Settings
app.set("pkg", pkg);
app.set("port", process.env.PORT || 4000);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Welcome Routes
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Products API",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
  });
});

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", usersRoutes);

export default app;
