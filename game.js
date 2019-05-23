const AUTOBREEDTE = 100;
const AUTOLENGTE = 170;
const CURBSIZE = 40;

var autoX = 200;

function setup() {
    createCanvas(600,800);
    background("blue");
}

function draw() {

    // background
    background("gray");
    
    // curbs zijkanten
    var curbYWhite = 0;
    var curbYRed = 40;

    // Witte curbs
    while (curbYWhite < 800) {
        fill("white");
        rect(0,curbYWhite,CURBSIZE,CURBSIZE);
        rect(560,curbYWhite,CURBSIZE, CURBSIZE);

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
    autoX = mouseX;

    var maxRechts = width - CURBSIZE - AUTOBREEDTE;
    if (autoX >= maxRechts) {
        autoX = maxRechts;
    }

    rect(autoX, 600, AUTOBREEDTE, 170);
    


    var beweging = 0;
    
    fill("black");
    rect(200, beweging, 80, 120);

};


