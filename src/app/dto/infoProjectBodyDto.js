
export class infoProjectBodyDto {
    constructor(id, title, categoryId, category, architectId, parameterId, anons, block, text, address, status) {
        this.id = id;
        this.title = title;
        this.categoryId = categoryId;
        this.category = category;
        this.architectId = architectId;
        this.parameterId = parameterId;
        this.anons = anons;
        this.block = block;
        this.text = text;
        this.address= address;
        this.status = status;
    }
}