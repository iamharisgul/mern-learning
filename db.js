const { Pool } = require("pg");

const pool = new Pool({
  user: "strmprodev019",
  password: "strmdevusername!!",
  host: "dev-strmpro-inden.cpawlhflaaeo.ap-southeast-1.rds.amazonaws.com",
  port: 5432, // default Postgres port
  database: "strmpro-dev-1",
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
