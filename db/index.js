const { Pool } = require("pg");

require("dotenv").config();
const config = {
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT
}

const pool = new Pool(config);

(require("./tests/query-timestamp"))(pool);

module.exports = {
  query: (string, params) => pool.query(string, params)
} // TODO: use block syntax

