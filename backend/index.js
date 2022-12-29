import express, { json } from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";

// The routes
import registerRoute from "./routes/registerRoute.js";
import loginRoute from "./routes/loginRoute.js";
import usersRoute from "./routes/usersRoute.js";
import mealsRoute from "./routes/mealsRoute.js";
import orderRoute from "./routes/orderRoute.js";
import commentsRoute from "./routes/commentsRoute.js";
import globalErrorHandler from "./middleware/globalErrorHandler.js"

// The application
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8000;

dotenv.config();

const connected = async () => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(process.env.MONGO);
        console.log("DB is connected");
      } catch (error) {
        throw error;
      }
}

/*
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("DB is connected"))
  .catch((error) => console.log(error));
*/

// Endpoints
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/users", usersRoute);
app.use("/meals", mealsRoute);
app.use("/oders", orderRoute);
app.use("/comments", commentsRoute);

// showing what change has been done
app.use(morgan("tiny"));

// Express middleware - Error handler
app.use(globalErrorHandler);

// Server Listens 
app.listen(PORT, () => {
    connected()
    console.log(`The server started on port ${PORT}`)
});
