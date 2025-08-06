import express from "express";
import url from "url";
import path from "path";

const app = express();
const data = [
  { name: "Arshad", age: 18 },
  { name: "Akhil", age: 19 },
];
app.use(express.json());
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const { name, age } = req.body;
  data.push({ name, age });
  res.json(data);
});

app.listen(8000, () => {
  console.log("server running at port 8000");
});
