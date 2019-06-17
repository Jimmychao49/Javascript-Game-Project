const AUTOBREEDTE = 80;
const AUTOLENGTE = 120;

var autoX = 300;
var enemies = [];
var carlines = [];
var curbWs = [];
var curbRs = [];

function setup() {
    createCanvas(600,800);

    //Object Generator
    for (var i = 0; i < 3; i++) {
        var nieuweVijand = getNewEnemy();
        enemies.push(nieuweVijand);
    }

    for (var l = 0; l < 1; l++) {
        carlines.push(new Carline());
    }

    for (var m = 0; m < 15; m++) {
        
    }

    for (var o = 0; o < 10; o++) {
        curbRs.push(new CurbR());
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

    for (var k = 0; k < carlines.length; k++) {
        
        if (carlines[k].y > 840) {
            carlines.splice(k, 1, new Carline());
        }
    carlines[k].display();
    carlines[k].update();
    }

    for (var k = 0; k < carlines.length; k++) {
        
        if (carlines[k].y > 840) {
            carlines.splice(k, 1, new Carline());
        }
    carlines[k].display();
    carlines[k].update();
    }

    //Enemy
    for (var j = 0; j < enemies.length; j++) {
        if (enemies[j].y > 840) {
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
var curbYRed = CurbSize;




    fill("blue");
    autoX = mouseX;

    var maxRechts = width - CurbSize - 0.5 * AUTOBREEDTE;
        if (autoX >= maxRechts) {
        autoX = maxRechts;
    }

    var maxLinks = 0 + CurbSize + 0.5 * AUTOBREEDTE;
        if (autoX <= maxLinks){
            autoX = maxLinks;
        }

    rect(autoX - CurbSize,600,AUTOBREEDTE,AUTOLENGTE);

}

function enemyCanCollide(enemy) {
    var canCollide = false;
    for (var i = 0; i < enemies.length; i++) {
        if (enemy.x <= enemies[i].x + enemyWidth &&
            enemy.x >= enemies[i].x - enemyWidth) {
            canCollide = true;
        }
    }

    return canCollide;
}



function getNewEnemy() {
    var nieuweVijand = new Enemy();
    var collision = enemyCanCollide(nieuweVijand);
    while (collision === true) {
        nieuweVijand.getRandomX();
        collision = enemyCanCollide(nieuweVijand);
    }

    return nieuweVijand;
}
