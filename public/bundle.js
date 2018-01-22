"use strict";
var Entities;
(function (Entities) {
    var Ball = /** @class */ (function () {
        function Ball(x, y, radius, color, context) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.context = context;
        }
        Ball.prototype.update = function () {
            this.draw();
        };
        Ball.prototype.draw = function () {
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.closePath();
        };
        return Ball;
    }());
    Entities.Ball = Ball;
})(Entities || (Entities = {}));
/// <reference path="./entities.ts" />
var canvas = document.querySelector('#screen');
var context = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
var ball;
function init() {
    ball = new Entities.Ball(canvas.width / 2, canvas.height / 2, 50, 'red', context);
}
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
}
init();
animate();
//# sourceMappingURL=bundle.js.map