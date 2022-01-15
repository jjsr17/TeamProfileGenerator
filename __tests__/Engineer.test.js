const Employee = require("../lib/Employee");
const Engineer = require ("../lib/Engineer");

test("Can set github via constructor argument", () => {
    const expectedVal = "jjsr17";
    const e = new Engineer("Jonathan", 1, "test@email.com", expectedVal);
    expect(e.officeNumber).toBe(expectedVal);
  });
  
  test("getgitHub() should return \"Github\"", () => {
    const expectedVal = "jjsr17";
    const e = new Engineer("Jonathan", 1, "test@email.com", 100);
    expect(e.getRole()).toBe(expectedVal);
  });