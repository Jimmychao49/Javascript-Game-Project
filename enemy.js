const enemyWidth = 80;
const enemyHeight = 120;

class Enemy {

    constructor() {
        this.x = random(50,480);
        this.y = -100;
        this.verticalVelocity = random(10,15);
    }

    getRandomX() {
        this.x = random(50,480);
    }

    update() {
        this.y = this.y + this.verticalVelocity;
    }

    display() {
        fill(255,0,0);
        rect(this.x, this.y, enemyWidth, enemyHeight);
    }
}
