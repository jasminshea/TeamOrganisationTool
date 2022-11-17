const Manager = require("../lib/Manager");

describe('Manager', () => {
    it("Can set Manager's office number", () => {
        const office = "QUT";
        const staff = new Manager("Marge", 111, "email@email.com", office);
        expect(staff.officeNumber).toBe(office);
    })

    it("Can get Manager github using getOfficeNumber() function", () => {
        const office = "QUT";
        const staff = new Manager("Marge", 111, "email@email.com", office);
        expect(staff.getOfficeNumber()).toBe(office);
    })

    it("Can get Manager's role using getRole()", () => {
        const status = "Manager";
        const staff = new Manager("Marge", 111, "Marge@gmail.com", "QUT");
        expect(staff.getRole()).toBe(status);
    })
})