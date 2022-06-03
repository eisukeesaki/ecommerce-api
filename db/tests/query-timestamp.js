async function queryTimestamp(pool) {
  console.log("querying database...");

  try {
    const res = await pool.query("SELECT NOW()");

    if (res.rows.length) {
      console.log(res.rows[0]);
      console.log("database connection OK");
    } else
      console.log("database connection KO")
  } catch (error) {
    console.log(error.stack);
    res.status(500).end();
  }
}

module.exports = queryTimestamp;

