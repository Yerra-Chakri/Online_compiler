import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import os from "os";
import "dotenv/config";
import corsOptions from "./config/corsOption.js";
import { error } from "console";

const app = express();

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));


mongoose.set("strictQuery", false);

const connectToMongoDB = async () => {
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

await connectToMongoDB();


app.use("/", routes);
app.get('/',(req,res)=>{
  res.send({
    activeStatus:true,
    error:false,
  })
})

app.get("/ping", (req, res) => {
  res.json({ message: "Server is alive!" });
});

export default app;
