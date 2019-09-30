const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 9;
    if (page < 1) page = 1;
    const pasiens = await db.query(escape`
    SELECT * FROM pasien order by no_rkm_medis LIMIT ${(page - 1) * limit},${limit}
    `);
    const count = await db.query(escape`
    SELECT COUNT(*) AS pasienCount FROM pasien`);
    const {pasienCount} = count[0];
    const pageCount = Math.ceil(pasienCount / limit);
    res.status(200).json({ pasiens, pageCount, page })

};
