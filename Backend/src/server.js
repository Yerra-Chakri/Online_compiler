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

// ✅ Exported connectToMongoDB function
export const connectToMongoDB = async () => {
  const baseMongoURI = process.env.MONGO_URI;
  const mongoURI = `${baseMongoURI}/${process.env.DB_NAME}`;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 10,
  };

  try {
    await mongoose.connect(mongoURI, options);
    console.log("✅ MongoDB connected:", mongoURI);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

// ✅ Exported startServer function
export const startServer = () => {
  const PORT = process.env.PORT || 5000;

  app.use("/", routes);
  app.get("/", (req, res) => {
    res.send({ activeStatus: true, error: false });
  });

  app.get("/ping", (req, res) => {
    res.json({ message: "Server is alive!" });
  });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};
