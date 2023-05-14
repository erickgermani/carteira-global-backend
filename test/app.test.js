const request = require("supertest");
const app = require("../src/app");

describe("Ao fazer um GET na rota /", () => {
	test("Deve retornar o status code 200", async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
	});
	test("Deve retornar um JSON com a mensagem Hello World", async () => {
		const response = await request(app).get("/");
		expect(response.body).toEqual({ message: "Hello World!" });
	});
});
