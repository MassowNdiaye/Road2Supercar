import express from "express";
import cors from "cors";
import vehiclesRouter from "./routes/vehicles.js"; 

const app = express();

app.use(cors()); // Allowing frontend to fetch data
app.use(express.json());

app.use("/api/vehicles", vehiclesRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
