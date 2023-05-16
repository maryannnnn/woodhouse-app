export class commentDto {
    constructor(id, title, body, timestamp, parentId, userNik, userProfession, userImage, likes, children) {
        this.id = id;
        this.title = title;
        this.body = body;
        this.timestamp = timestamp;
        this.parentId = parentId;
        this.userNik = userNik;
        this.userProfession = userProfession;
        this.userImage = userImage;
        this.likes = likes;
        this.children = children;
    }
}