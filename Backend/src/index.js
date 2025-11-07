import { startServer, connectToMongoDB } from "./server.js";

await connectToMongoDB();
startServer();
