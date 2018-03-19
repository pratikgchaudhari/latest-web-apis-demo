class ChessBoardPainter {
    static get inputProperties(){
        return ['--chess-board-spacing','--chess-board-square-size'];
    }
    paint(ctx, geom, properties) {
        const colors = ['black', 'white'];
        const squareSize = parseInt(properties.get('--chess-board-square-size').toString());
        const squareSpacing = parseInt(properties.get('--chess-board-spacing').toString());
        for (let i = 0; i < Math.round(geom.height); i++) {
            for (let j = 0; j < Math.round(geom.width); j++) {
                let color = colors[(i + j) % colors.length];
                ctx.beginPath();
                ctx.fillStyle = color;
                ctx.rect(i * (squareSize+squareSpacing), j * (squareSize+squareSpacing), squareSize, squareSize);
                ctx.fill();
            }
        }
    }
}

registerPaint('chess-board-painter', ChessBoardPainter);