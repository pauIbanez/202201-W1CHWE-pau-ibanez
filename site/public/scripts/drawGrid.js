const drawGrid = (canvas, ctx, cellSize) => {
  const left = 0;
  const top = 0;
  const right = canvas.width;
  const bottom = canvas.height;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.translate(0.5, 0.5);
  ctx.beginPath();

  for (let x = 0; x < right; x += cellSize) {
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
  }
  for (let y = 0; y < bottom; y += cellSize) {
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
  }

  ctx.lineWidth = 1;
  ctx.strokeStyle = "white";
  ctx.stroke();
  console.log("Grid srawn");
};

export default drawGrid;
export { drawGrid };
