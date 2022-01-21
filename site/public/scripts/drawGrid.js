const drawGrid = (canvas, ctx, cellSize) => {
  const left = 0 - canvas.width * 4;
  const top = 0 - canvas.height * 4;
  const right = canvas.width * 4;
  const bottom = canvas.height * 4;

  ctx.clearRect(left, top, right - left, bottom - top);
  ctx.translate(0.5, 0.5);
  ctx.beginPath();

  for (let x = left; x < right; x += cellSize) {
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
  }
  for (let y = top; y < bottom; y += cellSize) {
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
  }
  ctx.strokeStyle = "white";
  ctx.stroke();
};

export default drawGrid;
export { drawGrid };
