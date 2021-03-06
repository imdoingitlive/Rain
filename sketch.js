var symbolSize = 30;
var streams = [];

function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);

    var x = 0;
    for (var i = 0; i <= width / symbolSize; i++) {
        var stream = new Stream();
        stream.generateSymbols(x, random(-1000, 0));
        streams.push(stream);
        x += symbolSize;
    }

    textSize(symbolSize);
    textFont('Consolas');
    textStyle(BOLD);
}

function draw() {
    background(0, 190);
    streams.forEach(function(stream) {
        stream.render();
    });
}

function Symbol(x, y, speed, first) {
    this.x = x;
    this.y = y;
    this.value;

    this.speed = speed;
    this.first = first;

    this.switchInterval = round(random(10, 25));

    this.setToRandomSymbol = function() {
        var charType = round(random(0, 10));
        if (frameCount % this.switchInterval == 0) {
            if (charType > 1) {
                this.value = String.fromCharCode(
                    0x30A0 + round(random(0, 96))
                );
            } else {
                this.value = round(random(0,9));
            }
        }
    }

    this.rain = function() {
        this.y = (this.y >= height) ? 0 : this.y += this.speed;
    }
}

function Stream() {
    this.symbols = [];
    this.totalSymbols = round(random(5, 30));
    this.speed = random(5, 22);

    this.generateSymbols = function(x, y) {
        var first = round(random(0, 4)) == 1;
        for (var i = 0; i <= this.totalSymbols; i++) {
            symbol = new Symbol(
                x, 
                y, 
                this.speed, 
                first
            );
            symbol.setToRandomSymbol();
            this.symbols.push(symbol);
            y -= symbolSize;
            first = false;
        }
    }

    this.render = function () {
        this.symbols.forEach(function(symbol) {
            if (symbol.first) {
                fill(140, 255, 170);
            } else {
                fill(0, 255, 70);    
            }
            text(symbol.value, symbol.x, symbol.y);
            symbol.rain();
            symbol.setToRandomSymbol();
        });
    }
}