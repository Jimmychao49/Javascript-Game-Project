const CarlineWidth = 20;
const CarlineHeight = 175;
//hoi
class Carline {

    constructor() {
        this.x = 0;
        this.y = -175;
        this.verticalVelocity = 10;
    }

    update() {
        this.y = this.y + this.verticalVelocity;
    }

    display() {
        fill("white");
        rect(180, this.y, CarlineWidth, CarlineHeight);
        rect(380, this.y, CarlineWidth, CarlineHeight);
    }
}
