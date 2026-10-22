const express = require("express");
const app = express(express.json());
const PORT = 22;

// GET /uditok --> [{"id":1,"nev":"Sprite","liter":1,"bubis_e":true}]
app.get("/uditok", (req, res) => {});

// GET /udito/:id --> {"id":1,"nev":"Sprite","liter":1,"bubis_e":true}
app.get("/udito/:id", (req, res) => {});

// POST /udito/:id --> {"id":2,"nev":"Sprite","liter":1,"bubis_e":true}
app.post("/udito/:id", (req, res) => {});

// PATCH /udito/:id --> {"id":1,"nev":"Schweppes","liter":1.5,"bubis_e":true}
app.patch("/udito/:id", (req, res) => {});

// DELETE /udito/:id --> {"deletedId":1}
app.delete("/udito/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
