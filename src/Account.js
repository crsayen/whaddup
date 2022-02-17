module.exports = class Account {

    constructor(user){
        this.user = user; 
    }

    user = "";
    timeline = [];
    following = [];
    followers = [];
    wall =[];

    publish(content) {
        const timestamp = Date.now()
        let post = [content, timestamp]
        this.timeline.push(post);
        this.wall.push(post);
    }
}