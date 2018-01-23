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
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    Utils.randomIntFromRange = randomIntFromRange;
    function randomColor(colours) {
        return colours[Math.floor(Math.random() * colours.length)];
    }
    Utils.randomColor = randomColor;
})(Utils || (Utils = {}));
var Entities;
(function (Entities) {
    var Ball = /** @class */ (function () {
        function Ball(x, y, radius, color, canvas) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.canvas = canvas;
            this.vy = 0;
            this.vx = 0;
            this.gravity = 0.2;
            this.friction = -0.9;
            this.ctx = this.canvas.getContext('2d');
        }
        Ball.prototype.update = function () {
            this.vy += this.gravity;
            this.y += this.vy;
            if (this.y + this.radius > this.canvas.height) {
                this.y = this.canvas.height - this.radius;
                this.vy *= this.friction;
            }
            else if (this.y - this.radius < 0) {
                this.y = this.radius;
                this.vy *= this.friction;
            }
            this.draw();
        };
        Ball.prototype.collideBottomEdge = function () {
            return this.y > this.canvas.height - this.radius;
        };
        Ball.prototype.draw = function () {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.stroke();
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
// move to web worker
// Settings
var MAX_BALLS = 500;
var MIN_RADIUS = 15;
var MAX_RADIUS = 50;
var colours = [
    '#2185C5',
    '#7ECEFD',
    '#FFF6E5',
    "#FF7F66"
];
var balls;
function init() {
    balls = [];
    for (var i = 0; i < MAX_BALLS; i++) {
        var radius = Utils.randomIntFromRange(MIN_RADIUS, MAX_RADIUS);
        balls.push(new Entities.Ball(Utils.randomIntFromRange(radius, canvas.width - radius), Utils.randomIntFromRange(radius, canvas.height - radius), radius, Utils.randomColor(colours), canvas));
    }
}
// move to web worker
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(function (ball) { return ball.update(); });
}
Utils.handleResize(canvas, init);
init();
animate();
//# sourceMappingURL=bundle.js.map