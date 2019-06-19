const AUTOBREEDTE = 80;
const AUTOLENGTE = 120;

const CARLINEWIDTH = 20;
const CarlineHeight = 175;
const BAANBREEDTE = 165;

var autoX = 300;
var enemies = [];
var carlines = [];
var curbWs = [];
var curbRs = [];

function setup() {
    createCanvas(800, 600);

    //Object Generator
    for (var i = 0; i < 3; i++) {
        enemies.push(getNewEnemy());
    }

    for (var l = 0; l < 1; l++) {
        carlines.push(new Carline());
    }


}

function draw() {
    background("black");

    //Road Line
    for (var k = 0; k < carlines.length; k++) {

        if (carlines[k].y > 840) {
            carlines.splice(k, 1, new Carline());
        }
        carlines[k].display();
        carlines[k].update();
    }

    //Enemy
    for (var j = 0; j < enemies.length; j++) {
        if (enemies[j].y > 640) {
            enemies.splice(j, 1, getNewEnemy());
        }
        enemies[j].display();
        enemies[j].update();
    }

    //White Curbs
    for (var n = 0; n < curbWs.length; n++) {
        if (curbWs[n].y > 840) {
            curbWs.splice(n, 1, new CurbW());
        }
        curbWs[n].display();
        curbWs[n].update();
    }

    //Red Curbs
    for (var p = 0; p < curbRs.length; p++) {
        if (curbRs[p].y > 840) {
            curbRs.splice(p, 1, new CurbR());
        }
        curbRs[p].display();
        curbRs[p].update();
    }


    // curbs zijkanten
    var curbYWhite = 0;
    var curbYRed = CURBSIZE;

    // Witte curbs
    while (curbYWhite < 800) {
        fill("white");
        rect(0, curbYWhite, CURBSIZE, CURBSIZE);
        rect(760, curbYWhite, CURBSIZE, CURBSIZE);

        curbYWhite = curbYWhite + 80;
    };

    // Rode curbs
    while (curbYRed < 800) {
        fill("red");
        rect(0, curbYRed, CURBSIZE, CURBSIZE);
        rect(760, curbYRed, CURBSIZE, CURBSIZE);

        curbYRed = curbYRed + 80;
    };


    fill("blue");
    autoX = mouseX;

    var maxRechts = width - CURBSIZE - 0.5 * AUTOBREEDTE;
    if (autoX >= maxRechts) {
        autoX = maxRechts;
    }

    var maxLinks = 0 + CURBSIZE + 0.5 * AUTOBREEDTE;
    if (autoX <= maxLinks) {
        autoX = maxLinks;
    }

    rect(autoX - CURBSIZE, 400, AUTOBREEDTE, AUTOLENGTE);


}

function enemyCanCollide(enemy) {
    var canCollide = false;
    for (var i = 0; i < enemies.length; i++) {
        if (enemy.x === enemies[i].x) {
            canCollide = true;
        }
    }

    return canCollide;
}

function getNewEnemy() {
    var nieuweVijand = new Enemy();
    var collision = enemyCanCollide(nieuweVijand);

    while (collision === true) {
        nieuweVijand = new Enemy();
        collision = enemyCanCollide(nieuweVijand);
    }

    return nieuweVijand;
}


