const User = require("../src/Account");

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    while ((currentDate - date) < milliseconds) {
        currentDate = Date.now();
    }
}

describe("Test basic features of Whaddup", () => {

    let alice = new User("Alice");
    let bob = new User("Bob");
    let charlie = new User("Charle");

    test("Given Charlie can follow Alice and Bob, he should view an aggregated list of all timelines.", () => {
        alice.publish("I love the weather today");
        wait(20);
        alice.publish("The weather is okay I guess."); 
        wait(30);
        bob.publish("Darn! We lost!");
        wait(40);
        charlie.publish("I'm in New York Today! Anyone wants to have a coffee?");
        wait(30);
        alice.publish("I don't love the weather today");
        wait(50);
        bob.publish("Good game though.");
        wait(30);
        charlie.publish("Thanks for meeting for coffee");
        wait(30);
    
        charlie.follow(alice);
        charlie.follow(bob);
    
        expect(charlie.showWall()[0]).toContain("Thanks for meeting for coffee");
        expect(charlie.showWall()[1]).toContain("Good game though.");
        expect(charlie.showWall()[2]).toContain("I don't love the weather today");
        expect(charlie.showWall()[3]).toContain("I'm in New York Today! Anyone wants to have a coffee?");
        expect(charlie.showWall()[4]).toContain("Darn! We lost!");
        expect(charlie.showWall()[5]).toContain("The weather is okay I guess.");
        expect(charlie.showWall()[6]).toContain("I love the weather today");
    })

})
