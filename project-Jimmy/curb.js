const CurbSize = 40;

class CurbW {

    constructor() {
        this.x = 0;
        this.y = -100;
        this.verticalVelocity = 10;
    }

    update() {
        this.y = this.y + this.verticalVelocity;
    }

    display() {
        fill(255,255,255);
        noStroke();
        rect(this.x, this.y, CurbSize, CurbSize);
        rect(this.x + 560, this.y, CurbSize, CurbSize)
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
        rect(this.x, this.y + 40 , CurbSize, CurbSize);
        rect(this.x + 560, this.y + 40 , CurbSize, CurbSize);
        }
        
}