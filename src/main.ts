/// <reference path="./utils.ts" />
/// <reference path="./entities.ts" />

const canvas = <HTMLCanvasElement>document.querySelector('#screen')!;
const context = canvas.getContext('2d')!;

canvas.width = innerWidth;
canvas.height = innerHeight;

// move to web worker
// Settings
const MAX_BALLS: number = 500;
const MIN_RADIUS: number = 15;
const MAX_RADIUS: number = 50;

const colours = [
    '#2185C5',
    '#7ECEFD',
    '#FFF6E5',
    "#FF7F66"
];

let balls: Entities.Ball[];

function init() {
    balls = [];

    for (let i = 0; i < MAX_BALLS; i++) {
        const radius: number = Utils.randomIntFromRange(MIN_RADIUS, MAX_RADIUS);
        
        balls.push(new Entities.Ball(
            Utils.randomIntFromRange(radius, canvas.width - radius),
            Utils.randomIntFromRange(radius, canvas.height - radius), 
            radius, 
            Utils.randomColor(colours), 
            canvas
        ));
    }
}

// move to web worker
function animate() {
    requestAnimationFrame(animate);

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    balls.forEach(ball => ball.update());
}

Utils.handleResize(canvas, init);

init();
animate();