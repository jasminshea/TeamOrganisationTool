const Employee = require("../lib/employee");

describe('employee', () => {
    it("Can create a new employee profile", () =>{
        const name = "George";
        const staff = new Employee(name);
        expect(staff.name).toBe(name);
    })

    it("Can set employee id", ()=>{
        const id = 111;
        const staff = new Employee("George", id);
        expect(staff.id).toBe(id);
    })

    it("Can set employee email", ()=>{
        const email = "george@gmail.com";
        const staff = new Employee("George", 111, email);
        expect(staff.email).toBe(email);
    })

    it("Can get employee name using getName() function", ()=>{
        const name = "George";
        const staff = new Employee(name);
        expect(staff.getName()).toBe(name);
    })

    it("Can get employee id using getId() function", ()=>{
        const id = "222";
        const staff = new Employee("George", id);
        expect(staff.getId()).toBe(id);
    })

    it("Can get employee name using getEmail() function", ()=>{
        const email = "george@gmail.com";
        const staff = new Employee("George", 2, email);
        expect(staff.getEmail()).toBe(email);
    })

    it("Can get employee's role using getRole()", ()=>{
        const status = "Employee";
        const staff = new Employee("George", 111, "george@gmail.com");
        expect(staff.getRole()).toBe(status);
    })
})