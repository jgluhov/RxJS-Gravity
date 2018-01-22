namespace Utils {
    export function handleResize(canvas: HTMLCanvasElement, callback: Function) {
        addEventListener('resize', function(event) {
            canvas.width = innerWidth;
            canvas.height = innerHeight;

            callback();
        });
    }
}
