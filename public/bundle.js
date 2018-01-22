"use strict";
var Utils;
(function (Utils) {
    function handleResize(canvas, callback) {
        addEventListener('resize', function (event) {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            callback();
        });
    }
    Utils.handleResize = handleResize;
})(Utils || (Utils = {}));
var Entities;
(function (Entities) {
    var Ball = /** @class */ (function () {
        function Ball(x, y, dy, radius, color, canvas) {
            this.x = x;
            this.y = y;
            this.dy = dy;
            this.radius = radius;
            this.color = color;
            this.canvas = canvas;
            this.gravity = 1;
            this.friction = 0.99;
            this.ctx = this.canvas.getContext('2d');
        }
        Ball.prototype.update = function () {
            if (this.collideBottomEdge()) {
                this.dy = -this.dy * this.friction;
            }
            else {
                this.dy += this.gravity;
            }
            this.y += this.dy;
            this.draw();
        };
        Ball.prototype.collideBottomEdge = function () {
            return this.y + this.dy > this.canvas.height - this.radius;
        };
        Ball.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.closePath();
        };
        return Ball;
    }());
    Entities.Ball = Ball;
})(Entities || (Entities = {}));
/// <reference path="./utils.ts" />
/// <reference path="./entities.ts" />
var canvas = document.querySelector('#screen');
var context = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
Utils.handleResize(canvas, init);
var ball;
function init() {
    ball = new Entities.Ball(canvas.width / 2, canvas.height / 2, 2, 50, 'red', canvas);
}
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.update();
}
init();
animate();
//# sourceMappingURL=bundle.js.map