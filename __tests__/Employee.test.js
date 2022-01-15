const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  test("Can set name via constructor", () => {
    const name = "Joe";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  test("Can set id via constructor", () => {
    const id = "00002003";
    const e = new Employee("mark",id);
    expect(e.id).toBe(id);
  });

  test("Can set email via constructor", () => {
    const email= "this@email.com";
    const e = new Employee("mark","23",email);
    expect(e.email).toBe(email);
  });

  test("getRole() should return \"Employee\"", () => {
    const expectedVal = "Employee";
    const e = new Employee("Jonathan", 1, "test@email.com");
    expect(e.getRole()).toBe(expectedVal);
  });

  test("Can get name via getName()", () => {
    const expectedVal = "Jonathan";
    const e = new Employee(expectedVal);
    expect(e.getName()).toBe(expectedVal);
  });

  //get for id and email
  test("Can get id via getId()", () => {
    const expectedVal = "23";
    const e = new Employee(test,expectedVal);
    expect(e.getId()).toBe(expectedVal);
  });

  test("Can get email via getEmail()", () => {
    const expectedVal = "info@email.com";
    const e = new Employee(expectedVal);
    expect(e.getEmail()).toBe(expectedVal);
  });