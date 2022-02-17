module.exports = class Account {

    constructor(user){
        this.user = user; 
    };

    user = "";
    timeline = [];
    following = [];
    followers = [];

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
}
