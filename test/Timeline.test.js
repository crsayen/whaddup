const User = require('../src/Account');

describe("Whaddup feature: show timeline", () => {
    
    const bob = new User("Bob");

    test("Given there is an empty wall, nothing should be returned on Bob's timeline", () => {
        expect(bob.showTimeline().length).toBe(0); 
    });

    test("Given there is at least one post on the timeline, at least one item should be returned on Bob's timeline", () => {
        bob.publish("Hello World!");
        expect(bob.showTimeline().length).toBe(1);
    })

    test("Given there is are 11 (10 + 0) posts on the timeline, 11 (10 + 0) posts should be returned on Bob's timeline", () => {
        bob.publish("1");
        bob.publish("2");
        bob.publish("3");
        bob.publish("4");
        bob.publish("5");
        bob.publish("6");
        bob.publish("7");
        bob.publish("8");
        bob.publish("9");
        bob.publish("10");

        expect(bob.showTimeline().length).toBe(11);
    })
})
