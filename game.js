const FRAMERATE = 30;

const GAMESTATUS_STARTSCHERM = 0;
const GAMESTATUS_AFTELLEN = 1;
const GAMESTATUS_SPEL = 2;
const GAMESTATUS_EINDSCHERM = 3;

const AUTOBREEDTE = 80;
const AUTOLENGTE = 120;

var gameStatus;
var aftelGetal = 5;
var aftelHulp = 0;

var autoX = 300;
var enemies = [];
var carlines = [];
var curbWs = [];
var curbRs = [];

function setup() {
    createCanvas(600,800);

    // aantal frames per seconde
    frameRate(FRAMERATE);

    gameStatus = GAMESTATUS_STARTSCHERM;

    //Object Generator
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
    
    // *********************************
    // ********** beginscherm **********
    // *********************************
    
    if (gameStatus = GAMESTATUS_STARTSCHERM) {
        textSize = 50;
        fill(255, 255, 255);
        text('Klik om te starten', 300, 400);
        
        if (mouseIsPressed) {
            gameStatus = GAMESTATUS_AFTELLEN;
            aftelGetal = 5;
            aftelHulp = 0;
        };
    };


    // *********************************
    // ********** aftellen **********
    // *********************************

    else if (gameStatus === GAMESTATUS_AFTELLEN) {
        //tekenen van de instructie
        background(white);
        textSize(40);
        fill(255, 255, 255);
        text("Ontwijk de auto's", 200, 75);

        //tekenen van de lichten
        while (aftelGetal > 0) {
            fill(255, 20, 20);
            ellipse(50, 50, 50, 50);
        };

        aftelHulp++;

        if (aftelHulp % FRAMERATE === 0) {
            aftelgetal
        }
    }
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
        if (enemies[j].y > 840) {
            enemies.splice(j, 1, new Enemy());
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

// Witte curbs
while (curbYWhite < 800) {
    fill("white");
    rect(0,curbYWhite,CurbSize,CurbSize);
    rect(560,curbYWhite,CurbSize,CurbSize);

    curbYWhite = curbYWhite + 80;
};

// Rode curbs
while (curbYRed < 800) {
    fill("red");
    rect(0,curbYRed,CurbSize,CurbSize);
    rect(560,curbYRed,CurbSize,CurbSize);

    curbYRed = curbYRed + 80;
};


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
