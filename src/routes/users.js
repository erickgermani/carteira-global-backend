const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	try {
		return res.status(200).send({ message: "Funcionando!" });
	} catch (err) {
		next(err);
	}
});

module.exports = router;
