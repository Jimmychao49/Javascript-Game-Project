const enemyWidth = 80;
const enemyHeight = 120;

var enemySpawnPoints = [82, 82 + CARLINEWIDTH + BAANBREEDTE, 82 + 2 * CARLINEWIDTH + 2 * BAANBREEDTE,82 + 3* CARLINEWIDTH + 3 * BAANBREEDTE];

class Enemy {

    constructor() {
        this.x = enemySpawnPoints[floor(random(0,4))];
        this.y = -100;
        this.verticalVelocity = random(10,15);
    }



    update() {
        this.y = this.y + this.verticalVelocity;
    }

    display() {
        fill(255,0,0);
        rect(this.x, this.y, enemyWidth, enemyHeight);
    }
}
