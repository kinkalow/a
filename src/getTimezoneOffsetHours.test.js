const getTimezoneOffsetHours = require("./getTimezoneOffsetHours.js");
test("getTimezoneOffsetHours return -9", () => {
  expect(getTimezoneOffsetHours()).toBe(-9);
});
