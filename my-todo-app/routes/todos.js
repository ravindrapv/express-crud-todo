const express = require("express");
const { postUserSchema, putUserSchema } = require("./userValidation");
const validation = require("./validations");
const router = express.Router();
require("dotenv").config();
const pg = require("pg");

const pool = new pg.Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

router.post("/", validation(postUserSchema), async (req, res) => {
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

router.put("/:id", validation(putUserSchema), async (req, res) => {
  const id = req.params.id;
  const { title, description, done } = req.body;
  const query = "SELECT * FROM todos WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);
  if (result.rows.length === 0) {
    return res.status(404).send("Todo not found");
  }
  const updateQuery =
    "UPDATE todos SET title = $1, description = $2, done = $3 WHERE id = $4 RETURNING *";
  const updateValues = [title, description, done, id];
  const updatedTodo = await pool.query(updateQuery, updateValues);
  res.json(updatedTodo.rows[0]);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM todos WHERE id = $1";
  const values = [id];
  const result = await pool.query(query, values);

  if (result.rows.length === 0) {
    return res.status(404).send("Todo not found");
  }
  const deleteQuery = "DELETE FROM todos WHERE id = $1";
  await pool.query(deleteQuery, [id]);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
