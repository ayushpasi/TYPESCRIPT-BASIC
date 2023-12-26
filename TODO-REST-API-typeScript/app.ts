import express from "express";
import todoRouter from "./routes/todosRouter";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Using the todoRouter for handling routes related to todos
app.use(todoRouter);
// Define a basic route for the root path ("/")

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
