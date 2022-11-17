const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it("Can set Engineer github account", ()=>{
        const github = "gregory12";
        const staff = new Engineer("George", 111, "email@email.com", github);
        expect(staff.github).toBe(github);
    })

    it("Can get Engineer github using getGithub() function", ()=>{
        const github = "gregory12";
        const staff = new Engineer("George", 111, "email@email.com", github);
        expect(staff.getGithub()).toBe(github);
    })

    it("Can get Engineer's role using getRole()", ()=>{
        const status = "Engineer";
        const staff = new Engineer("George", 111, "george@gmail.com", "gregory12");
        expect(staff.getRole()).toBe(status);
    })
})