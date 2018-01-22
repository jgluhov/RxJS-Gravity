namespace Entities {
    export class Ball {
        private ctx: CanvasRenderingContext2D;
        private gravity: number = 1;
        private friction: number = 0.99;

        constructor(
            public x: number, 
            public y: number,
            public dy: number,
            public radius: number,
            public color: string,
            private canvas: HTMLCanvasElement
        ) {
            this.ctx = this.canvas.getContext('2d')!;
        }

        update() {
            if (this.collideBottomEdge()) {
                this.dy = -this.dy * this.friction;
            } else {
                this.dy += this.gravity;
            }

            this.y += this.dy;
            this.draw();
        }

        collideBottomEdge() {
            return this.y + this.dy > this.canvas.height - this.radius;
        }


        draw() {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();
            this.ctx.closePath();
        }
    }
}