import express, { application } from "express";
import { Cat } from "./cats.model";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    Cat,
  });
});

app.post("/", (req, res) => {
  Cat.push(req.body);

  res.json(req.body);
});

app.put("/:id", (req, res) => {
  const i = Cat.findIndex((cat) => {
    return cat.id == req.params.id;
  });

  Cat[i].name = req.body.name;

  res.json(req.body);
});

app.use((req, res) => {
  res.status(404).send("404 NOT FOUND!");
});

app.listen(8000, () => {
  console.log("listening on http://localhost:8000/...");
});
