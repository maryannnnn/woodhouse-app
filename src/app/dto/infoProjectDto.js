export class infoProjectDto {
    constructor(id, title, categoryId, category, architectId, architect, anons, image, thumbnail, alt, status, price) {
        this.id = id;
        this.title = title;
        this.categoryId = categoryId;
        this.category = category;
        this.architectId = architectId;
        this.architect = architect;
        this.anons = anons;
        this.image = image;
        this.thumbnail = thumbnail;
        this.alt= alt;
        this.status= status;
        this.price= price;
    }
}

