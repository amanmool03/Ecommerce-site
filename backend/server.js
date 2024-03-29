import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
import morgan from "morgan";

import productRoutes from "./routes/product.js";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";
import uploadRoutes from "./routes/upload.js";
import { notFound, errorHandler } from "./middleware/error.js";

dotenv.config();
connectDB();

//initialize express
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running");
  });
}

const PORT = process.env.PORT || 5000;

app.use(notFound);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port: ${PORT}`)
);
