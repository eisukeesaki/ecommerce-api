const db = require(`${__rootDir}/db`);

async function getVancouver(req, res) {
  console.log("querying database...");
  try {
    const queryStr = "SELECT cost FROM shippingcosts WHERE city = 'Vancouver'";

    const records = await db.query(queryStr);
    console.log(records);
    res.json(records.rows[0]);
  } catch (error) {
    console.log(error.stack);
  }
}

module.exports = {
  getVancouver
}

