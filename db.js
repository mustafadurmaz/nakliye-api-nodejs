const {Pool} = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "123456",
  database: "nakliyedb",
  host: "localhost",
  port: 5432,
});

try {
  pool.connect();
  console.log("::> PostgreSQL Server is Ready");
} catch (err) {
  console.log(err.stack);
}

module.exports = pool;
