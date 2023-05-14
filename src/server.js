const app = require("./app");

const port = 3000;

app.listen(port, () => {
	console.log("\n********************************");
	console.log("A aplicação está rodando localmente!");
	console.log("Rodando no endereço: http://localhost:" + port);
	console.log("********************************\n");
});
