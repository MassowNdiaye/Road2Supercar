import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import vehiclesRouter from "./routes/vehicles.js";
dotenv.config();

const app = express();

app.use(cors()); // Allowing frontend to fetch
app.use(express.json());

app.use("/api/vehicles", vehiclesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
