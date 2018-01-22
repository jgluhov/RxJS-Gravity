namespace Entities {
    export class Ball {
        constructor(
            public x: number, 
            public y: number, 
            public radius: number,
            public color: string,
            private context: CanvasRenderingContext2D
        ) {}

        update() {
            this.draw();
        }

        draw() {
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.closePath();
        }
    }
}