// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  price: 50,
};

test("Response status code for PUT request is 200 OK", async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});
test("Response body confirms the change of price for item id 5", async () => {
  let actualResponseBody;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    actualResponseBody = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponseBody).toEqual({
    ok: true,
  });
});
