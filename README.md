# whaddup

## Purpose

To emulate a basic social network application.

## Prerequisites

Node >= 10.16
npm >= 5.6 OR yarn >= 1.22.5

## Troubleshooting

Node JS and NPM

```
https://docs.npmjs.com/common-errors
https://docs.npmjs.com/getting-started/troubleshooting
```

## How to Use

To install:
```
$ git clone https://github.com/lhmzhou/whaddup
$ cd whaddup
$ yarn
or 
$ npm
```

To run test:
```
yarn test
```

## Features

```
Feature #1: Publishing
   Scenario: Alice publishes messages to her personal timeline.   
      Given Alice has published "I love the weather today."
      When Alice views her timeline
      Then Alice sees:
         "I love the weather today."
```

```
Feature #2: Timeline
   Scenario: Alice views Bob's timeline.
      Given Bob has published "Darn! We lost!"
      And Bob has published "Good game though."
      When Alice views Bob's timeline
      Then Alice sees:
         Good game though. (1 minute ago)
         Darn! We lost! (2 minute ago)
```

```
Feature #3: Following
   Scenario: Charlie can follow Alice and Bob, and he views an aggregated list of all timelines.
      Given Alice has published "I love the weather today."
      And Bob has published "Darn! We lost!"
      And Bob has published "Good game though."
      And Charlie has published "I'm in New York today! Anyone wants to have a coffee?"
      When Charlie follows Alice
      And Charlie follows Bob
      And Charlie views his wall
      Then Charlie sees:
         Charlie - I'm in New York today! Anyone wants to have a coffee? (15 seconds ago)     
         Bob - Good game though. (1 minute ago)     
         Bob - Darn! We lost! (2 minutes ago)     
         Alice - I love the weather today (5 minutes ago) 
```