import express from "express";
import url from "url";
import path from "path";
import homeRouter from "./routes/router.js";

const app = express();
const data = [
  { name: "Arshad", age: 18 },
  { name: "Akhil", age: 19 },
];
app.use(express.json());
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/data", homeRouter);

app.listen(8000, () => {
  console.log("server running at port 8000");
});
