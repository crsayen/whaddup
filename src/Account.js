module.exports = class Account {

    constructor(user){
        this.user = user; 
    };

    user = "";
    timeline = [];
    following = [];
    followers = [];
    wall =[];

    follow(user) {
        this.following.push(user);
        user.followers.push(this);
    };

    publish(content) {
        const timestamp = Date.now()
        let post = [content, timestamp]
        this.timeline.push(post);
        this.wall.push(post);
    };

    showTimeline() {
        return this.timeline.reverse();
    };

    showWall() {
        this.following.map(user => 
            (user.timeline.forEach(post => {
               if (this.wall == null || !this.wall.includes(post)) {
                    this.wall.push(post);
               }
              })
            )
        );

        return this.wall.sort((a, b) => { return b[1] - a[1] })
    };
}
