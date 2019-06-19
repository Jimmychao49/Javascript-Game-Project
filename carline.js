

class Carline {

    constructor() {
        this.x = 0;
        this.y = -175;
        this.verticalVelocity = 15;
    }

    update() {
        this.y = this.y + this.verticalVelocity;
    }

    display() {
        fill("white");
        rect(BAANBREEDTE + CURBSIZE, this.y, CARLINEWIDTH, CarlineHeight);
        rect(BAANBREEDTE * 2 + CURBSIZE + CARLINEWIDTH, this.y, CARLINEWIDTH, CarlineHeight);
        rect(BAANBREEDTE * 3 + CURBSIZE + 2 * CARLINEWIDTH, this.y, CARLINEWIDTH, CarlineHeight)
    }

    verticalvelocityupdate() {
        
    }
}
