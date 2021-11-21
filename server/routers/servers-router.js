const router = require("express").Router();
const { query } = require("../config");

router.get("/servers", async (req, res) => {
	try {
		const queryExpression = `SELECT servers.*, companies.name as hostingCompany FROM servers INNER JOIN companies ON servers.hostingCompany = companies.id ORDER BY id`;
		const data = await query(queryExpression);
		res.status(200).json(data);
	} catch (e) {
		res.status(500).json({ message: "Server error" });
	}
});

router.put("/servers/:id", async (req, res) => {
	try {
		const queryExpression = `UPDATE servers SET status = NOT status WHERE id = ${req.params.id}`;
		await query(queryExpression);
		res.status(200).json({ message: "Updated!" });
	} catch (e) {
		res.status(500).json({ message: "Server error" });
	}
});

module.exports = router;
