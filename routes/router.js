import { Router } from "express";

let data = [
  { id: 1, name: "arshad", age: 18 },
  { id: 2, name: "akhil", age: 19 },
];
const router = Router();

//GET REQUEST
router.get("/", (req, res) => {
  res.status(200).json(data);
});

//POST REQUEST
router.post("/", (req, res) => {
  const { name, age } = req.body;
  if (!name || !age || age < 0) {
    res.status(400).json({ err: "specify age and name correctly" });
  } else {
    data.push({ id: data[data.length - 1].id + 1, name, age });
    res.status(201).json(data);
  }
});

//DELETE REQUEST
router.delete("/", (req, res) => {
  let { id } = req.body;
  id = Number(id);
  if (!id) {
    return res.status(400).json({ msg: "Enter correct id!" });
  }
  data = data.filter((s) => s.id !== id);
  res.status(200).json(data);
});

//UPDATE REQUEST
router.put("/", (req, res) => {
  const { id, name, age } = req.body;
  const student = data.find((s) => s.id === Number(id));
  if (!student) {
    res.status(400).json({ msg: "Data not found!" });
  } else {
    if (name !== undefined && name !== "") student.name = name;
    if (age !== undefined && age > 0) student.age = age;
    res.status(200).json(data);
  }
});

export default router;
