const { Pool } = require("pg");

// Configure your PostgreSQL connection
const pool = new Pool({
  user: "venkat2",
  host: "localhost",
  database: "todos",
  password: "4848",
  port: 5432, // the default PostgreSQL port
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
