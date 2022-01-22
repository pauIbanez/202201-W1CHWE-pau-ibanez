const drawGrid = (canvas, ctx, cellSize) => {
  const left = 0 - canvas.width * 4;
  const top = 0 - canvas.height * 4;
  const right = canvas.width * 4;
  const bottom = canvas.height * 4;

  ctx.lineWidth = 1;
  ctx.strokeStyle = "gray";

  ctx.clearRect(left, top, right - left, bottom - top);
  ctx.beginPath();

  for (let x = left; x < right; x += cellSize) {
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
  }
  for (let y = top; y < bottom; y += cellSize) {
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
  }
  ctx.stroke();

  ctx.fillStyle = "red";
  ctx.fillRect(100, 100, 80, 80);
};

export default drawGrid;
export { drawGrid };
