import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ ok: true });
});

app.listen(3333, () => console.log("Server is running!"));
