const User = require('../src/Account');

function wait(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

describe("Whaddup feature: publishing", () => {

    const alice = new User("Alice"); 
    const callan = new User("Callan");

    test("Given Alice publishes a post to her timeline, Alice should be able to view her timeline", () => {
        alice.publish("I love the weather today");
        expect(alice.showTimeline()[0]).toContain("I love the weather today");
    })

    test("Given Callan publishes two posts, her timeline should display posts sorted in reverse", () => {
        callan.publish("Hello World!");
        wait(20);
        callan.publish("Hello World, Again!");
        wait(20);
        callan.publish("Hello World, Again! (again)");
        expect(callan.showTimeline()[0]).toContain("Hello World, Again! (again)");
    })
})