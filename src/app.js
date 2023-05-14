const app = require("express")();
const router = require("./router");

app.use("/v1", router);

app.get("/", (req, res) => {
	res.status(200).send({ message: "Hello World!" });
});

module.exports = app;
