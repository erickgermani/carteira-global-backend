const express = require("express");
const app = express();
const winston = require("winston");
const uuid = require("uuidv4");
const router = require("./router");

app.log = winston.createLogger({
	level: "debug",
	transports: [
		new winston.transports.Console({
			format: winston.format.json({ space: 1 }),
		}),
		new winston.transports.File({
			filename: "logs/error.log",
			level: "warn",
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json({ space: 1 }),
			),
		}),
	],
});

app.use("/v1", router);

app.get("/", (req, res) => {
	res.status(200).send({ message: "Hello World!" });
});

app.use((err, req, res, next) => {
	const { name, message, stack } = err;

	const id = uuid();
	app.log.error({ id, name, message, stack });
	res.status(500).json({ id, error: "Falha interna" });

	next(err);
});

module.exports = app;
