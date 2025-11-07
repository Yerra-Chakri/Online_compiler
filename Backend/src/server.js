import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import corsOptions from "./config/corsOption.js";

const app = express();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

mongoose.set("strictQuery", false);

// ✅ Connect to MongoDB (safe for Vercel)
const connectToMongoDB = async () => {
  try {
    const mongoURI = `${process.env.MONGO_URI}/${process.env.DB_NAME}`;
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

await connectToMongoDB();

app.use("/", routes);

app.get("/", (req, res) => {
  res.send({ activeStatus: true, error: false });
});

app.get("/ping", (req, res) => {
  res.json({ message: "Server is alive!" });
});

// ✅ Critical for Vercel
export default app;
