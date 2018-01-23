namespace Utils {
    export function handleResize(canvas: HTMLCanvasElement, callback: Function) {
        addEventListener('resize', function(event) {
            canvas.width = innerWidth;
            canvas.height = innerHeight;

            callback();
        });
    }

    export function randomIntFromRange(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    export function randomColor(colours: string[]) {
        return colours[Math.floor(Math.random() * colours.length)];
    }
}
