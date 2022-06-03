const db = require(`${__rootDir}/db`); // import inside every function definitions istead of importing it into file-global scope?

async function getAll(req, res) {
  try {
    const queryStr = "SELECT * FROM products";

    const records = await db.query(queryStr);

    res.json(records.rows);
  } catch (error) {
    console.log(error.stack);
    res.status(500).end();
  }
}

module.exports = {
  getAll
}

