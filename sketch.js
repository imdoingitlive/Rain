function setup() {
    createCanvas(
        window.innerWidth,
        window.innerHeight
    );
    background(0);
}

function draw() {

}

function Symbol(x, y) {
    this.x = x;
    this.y = y;
    this.value;

    this.setToRandomSymbol = function() {
        this.value = String.fromCharCode(
            0x30A0 + round(random(0, 96));
        );
    }
}

function Stream() {

}