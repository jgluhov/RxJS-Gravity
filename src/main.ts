/// <reference path="./utils.ts" />
/// <reference path="./entities.ts" />

const canvas = <HTMLCanvasElement>document.querySelector('#screen')!;
const context = canvas.getContext('2d')!;

canvas.width = innerWidth;
canvas.height = innerHeight;

Utils.handleResize(canvas, init);

let ball: Entities.Ball;

function init() {
    ball = new Entities.Ball(
        canvas.width / 2, canvas.height / 2, 2, 50, 'red', canvas
    );
}

function animate() {
    requestAnimationFrame(animate);

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    ball.update();
}

init();
animate();