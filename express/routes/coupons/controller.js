const db = require(`${__rootDir}/db`);

async function isValid(req, res) {
  try {
    const queryStr = "SELECT code FROM coupons WHERE code = $1";
    const queryParam = [req.body.couponCode];

    const record = await db.query(queryStr, queryParam);

    if (record.rows.length && record.rows[0].code == req.body.couponCode)
      res.status(200).end();
    else
      res.status(404).end();
  } catch (error) {
    console.log(error.stack);
    res.status(500).end();
  }
}

module.exports = {
  isValid
}

