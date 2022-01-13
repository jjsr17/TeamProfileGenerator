const Employee = require("../lib/Employee");
const Manager = require ("../lib/Manager");

test("Can set office number via constructor argument", () => {
    const expectedVal = 100;
    const e = new Manager("Jonathan", 1, "test@email.com", expectedVal);
    expect(e.officeNumber).toBe(expectedVal);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const expectedVal = "Manager";
    const e = new Manager("Jonathan", 1, "test@email.com", 100);
    expect(e.getRole()).toBe(expectedVal);
  });
  
  test("Can get office number via getOfficeNumber()", () => {
    const expectedVal = 100;
    const e = new Manager("Jonathan", 1, "test@email.com", expectedVal);
    expect(e.getOfficeNumber()).toBe(expectedVal);
  });