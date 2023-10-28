const express = require("express");
const router = express.Router();
const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "4849",
  database: "postgres",
});

router.post("/", async (req, res) => {
  const { title, description, done } = req.body;
  const query =
    "INSERT INTO todos (title, description, done) VALUES ($1, $2, $3) RETURNING *";
  const values = [title, description, done];

  try {
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todos");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { title, description, done } = req.body;
  const query =
    "UPDATE todos SET title = $1, description = $2, done = $3 WHERE id = $4 RETURNING *";
  const values = [title, description, done, id];

  try {
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM todos WHERE id = $1";

  try {
    await pool.query(query, [id]);
    res.json({ message: "Todo deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
