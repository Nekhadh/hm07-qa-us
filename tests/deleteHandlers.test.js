// eslint-disable-next-line no-undef
const config = require("../config");

test("Response status code for DELETE is 200 OK", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: "DELETE",
    });
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});
test("Response body contains expected data", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: "DELETE",
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody).toEqual({
    ok: true,
  });
});
