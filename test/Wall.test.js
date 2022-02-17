const User = require('../src/Account');

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    while ((currentDate - date) < milliseconds) {
        currentDate = Date.now();
    }
}

describe("Whaddup feature: show wall", () => {
    
    const gregory = new User("Gregory");
    const chance = new User("Chance");
    const susan = new User("Susan");
    const boyle = new User("Boyle");
    const clarkson = new User("Clarkson");
    const galloway = new User("Galloway");

    test("Given Chance follows Gregory, Gregory's published post should show on wall", () => {         
        gregory.publish("veni, vidi, vici")
        chance.follow(gregory);
        expect(gregory.showWall()[0]).toContain("veni, vidi, vici");
    })

    test("Given user Susan follows two different users, Boyle and Clarkson, their posts should appear on Susan's wall in reverse order", () => {        
        galloway.publish("cogito, ergo sum");
        boyle.publish("ipsum lorem");
        wait(20);
        clarkson.publish("carpe diem");

        susan.follow(boyle);
        susan.follow(clarkson);

        expect(susan.showWall()[0]).toContain("carpe diem");
            
    })
})
