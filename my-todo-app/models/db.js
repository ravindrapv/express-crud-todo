const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "4849",
  database: "postgres",
});

module.exports = pg;
