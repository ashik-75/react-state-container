import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { errorHandler } from "./middleware/errorHandler.js";
import blogRouter from "./routes/blogRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

// TODO: Custom Routes

app.get("/", (req, res) => {
  res.send("this is home page");
});
app.use("/api/blog", blogRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const connectionString =
  "mongodb+srv://bump-nvd-master:WxbSNEhlh6TFQET3@bump-db-class.kb2by.mongodb.net/testMongoose?retryWrites=true&w=majority";
const MONGO_URI = process.env.MONGO_URI || connectionString;

mongoose
  .connect(MONGO_URI)
  .then((response) => {
    console.log(response.connection.host);
    app.listen(PORT, () => console.log("Server Running on Port " + PORT));
  })
  .catch((err) => console.log(err.message));
