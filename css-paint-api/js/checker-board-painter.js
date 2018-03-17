class CheckerBoardPainter {
    paint(ctx, geom, properties) {
        const colors = ['red', 'green', 'blue'];
        const checkerSize = 32
        for (let i = 0; i < geom.height / checkerSize; i++) {
            for (let j = 0; j < geom.width / checkerSize; j++) {
                let color = colors[(i + j) % colors.length];
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.rect(i * checkerSize, j * checkerSize, checkerSize, checkerSize);
                ctx.fill();
            }
        }
    }
}

registerPaint('checker-board-painter', CheckerBoardPainter);