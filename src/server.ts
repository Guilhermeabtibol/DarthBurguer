import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "🔥 API Darth Burguer Online" });
});

app.listen(3333, () => {
  console.log("🔥 Servidor rodando na porta 3333");
});
