const Employee = require("../lib/Employee");
const Intern = require ("../lib/Intern");

test("Can set school via constructor argument", () => {
    const expectedVal = "thisSchool";
    const e = new Intern("Jonathan", 1, "test@email.com", expectedVal);
    expect(e.officeNumber).toBe(expectedVal);
  });

  test("getSchool() should return \"School\"", () => {
    const expectedVal = "School";
    const e = new Intern("Jonathan", 1, "test@email.com", 100);
    expect(e.getRole()).toBe(expectedVal);
  });