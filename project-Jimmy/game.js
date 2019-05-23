var enemies = [];
var carlines = [];
var curbWs = [];
var curbRs = [];
var curbXPos = [];
var curbYPos = [];
var curbVelocity = [];

function setup() {
    createCanvas(600,800);

    for (var i = 0; i < 3; i++) {
        enemies.push(new Enemy());
    }

    for (var l = 0; l < 1; l++) {
        carlines.push(new Carline());
    }

    for (var m = 0; m < 10; m++) {
        curbWs.push(new CurbW());
    }

    for (var o = 0; o < 10; o++) {
        curbRs.push(new CurbR());
    }

}

function draw() {
    background("black");

    for (var k = 0; k < carlines.length; k++) {
        
        if (carlines[k].y > 840) {
            carlines.splice(k, 1, new Carline());
        }
    carlines[k].display();
    carlines[k].update();
    }

    for (var j = 0; j < enemies.length; j++) {
        if (enemies[j].y > 840) {
            enemies.splice(j, 1, new Enemy());
        }
    enemies[j].display();
    enemies[j].update();
    }

    for (var n = 0; n < curbWs.length; n++) {
        if (curbWs[n].y > 840) {
            curbWs.splice(n, 1, new CurbW());
        }
    curbWs[n].display();
    curbWs[n].update();
    }

    for (var p = 0; p < curbRs.length; p++) {
        if (curbRs[p].y > 840) {
            curbRs.splice(p, 1, new CurbR());
        }
    curbRs[p].display();
    curbRs[p].update();
    }

// curbs zijkanten
var curbYWhite = 0;
var curbYRed = 40;

// Witte curbs
while (curbYWhite < 800) {
    fill("white");
    rect(0,curbYWhite,40,40);
    rect(560,curbYWhite,40,40);

    curbYWhite = curbYWhite + 80;
};

// Rode curbs
while (curbYRed < 800) {
    fill("red");
    rect(0,curbYRed,40,40);
    rect(560,curbYRed,40,40);

    curbYRed = curbYRed + 80;
};

    fill("blue");
    rect(mouseX - 40, 600, 80, 130);

}

