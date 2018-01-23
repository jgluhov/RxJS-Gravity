namespace Entities {
    export class Ball {
        private ctx: CanvasRenderingContext2D;
        private vy: number = 0;
        private vx: number = 0;
        private gravity: number = 0.2;
        private friction: number = -0.9;

        constructor(
            public x: number, 
            public y: number,
            public radius: number,
            public color: string,
            private canvas: HTMLCanvasElement
        ) {
            this.ctx = this.canvas.getContext('2d')!;
        }

        update() {
            this.vy += this.gravity;
            this.y += this.vy;

            if (this.y + this.radius > this.canvas.height) {
                this.y = this.canvas.height - this.radius;
                this.vy *= this.friction;
            } else if (this.y - this.radius < 0) {
                this.y = this.radius;
                this.vy *= this.friction;
            }

            this.draw();
        }

        collideBottomEdge() {
            return this.y > this.canvas.height - this.radius;
        }


        draw() {
            this.ctx.beginPath();
            this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            this.ctx.fillStyle = this.color;
            this.ctx.fill();     
            this.ctx.stroke();       
            this.ctx.closePath();
        }
    }
}