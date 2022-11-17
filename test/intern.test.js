const Intern = require("../lib/Intern");

describe('Intern', () => {
    it("Can set Intern github account", ()=>{
        const school = "QUT";
        const staff = new Intern("Marge", 111, "email@email.com", school);
        expect(staff.school).toBe(school);
    })

    it("Can get Intern github using getSchool() function", ()=>{
        const school = "QUT";
        const staff = new Intern("Marge", 111, "email@email.com", school);
        expect(staff.getSchool()).toBe(school);
    })

    it("Can get Intern's role using getRole()", ()=>{
        const status = "Intern";
        const staff = new Intern("Marge", 111, "Marge@gmail.com", "QUT");
        expect(staff.getRole()).toBe(status);
    })
})