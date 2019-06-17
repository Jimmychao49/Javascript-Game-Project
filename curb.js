var Rightside = this.x + 560;

const CurbSize = 40;
const CURBMARGE = 40;

class CurbW {

    constructor() {
        this.x = 0;
        this.y = -640;
        this.verticalVelocity = 10;
    }

    update() {
        this.y = this.y + this.verticalVelocity;
    }

    display() {
        for (var q = 0; q < 15; q++)
            fill(255,255,255);
            noStroke();
            rect(this.x, this.y + q * (CurbSize + CURBMARGE), CurbSize, CurbSize);

    }
}

class CurbR {

    constructor() {
        this.x = 0;
        this.y = -100;
        this.verticalVelocity = 10;
    }

    update() {
        this.y = this.y + this.verticalVelocity;
    }

    display() {
        fill(255,0,0);
        
        rect(this.x, this.y + -40, CurbSize, CurbSize);
        rect(this.x, this.y + -120, CurbSize, CurbSize);
        rect(this.x, this.y + -200, CurbSize, CurbSize);
        rect(this.x, this.y + -280, CurbSize, CurbSize);
        rect(this.x, this.y + -360, CurbSize, CurbSize);
        rect(this.x, this.y + -440, CurbSize, CurbSize);
        rect(this.x, this.y + -520, CurbSize, CurbSize);
        rect(this.x, this.y + -600, CurbSize, CurbSize);
        rect(this.x, this.y + 40, CurbSize, CurbSize);
        rect(this.x, this.y + 120, CurbSize, CurbSize);
        rect(this.x, this.y + 200, CurbSize, CurbSize);
        rect(this.x, this.y + 280, CurbSize, CurbSize);
        rect(this.x, this.y + 360, CurbSize, CurbSize);
        rect(this.x, this.y + 440, CurbSize, CurbSize);
        rect(this.x, this.y + 520, CurbSize, CurbSize);
        rect(this.x, this.y + 600, CurbSize, CurbSize);
        
        }
        
}
