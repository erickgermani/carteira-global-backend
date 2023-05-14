const request = require("supertest");
const app = require("../../src/app");

const MAIN_ROUTE = "/v1/users";

test("Deve retornar o status code 200", () => {
	return request(app)
		.get(MAIN_ROUTE)
		.then((res) => {
			expect(res.status).toBe(200);
		});
});
