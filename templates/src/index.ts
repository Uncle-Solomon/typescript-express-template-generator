import express, { Request, Response } from "express";
import { connectDB } from "./db/connectDB";
import { MONGODB_URI, PORT } from "./utils/config/config";
import { routes } from "./routes/routes";

// Create express app instance
const app = express();

//Middleware
app.use(express.json());

app.use("/api/v1", routes);

// Connect to mongo database
connectDB(MONGODB_URI);
//Server Landing Page
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to an express application by Ameh Solomon Onyeke");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
