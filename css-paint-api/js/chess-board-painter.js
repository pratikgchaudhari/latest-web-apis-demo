class ChessBoardPainter {
    paint(ctx, geom, properties) {
        const colors = ['black', 'white'];
        const squareSize = 20;
        for (let i = 0; i < Math.round(geom.height); i++) {
            for (let j = 0; j < Math.round(geom.width); j++) {
                let color = colors[(i + j) % colors.length];
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.rect(i * squareSize, j * squareSize, squareSize, squareSize);
                ctx.fill();
            }
        }
    }
}

registerPaint('chess-board-painter', ChessBoardPainter);