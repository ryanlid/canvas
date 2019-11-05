/**
 * 绘制多边形
 *
 * @param {*} ctx 画布上下文
 * @param {*} n 表示n边形
 * @param {*} dx
 * @param {*} dy
 * @param {*} size n边形的大小
 */
function createPolygon(ctx, n, dx, dy, size) {
  ctx.beginPath();
  var degree = (2 * Math.PI) / n;
  for (let i = 0; i < n; i++) {
    let x = Math.cos(i * degree);
    let y = Math.sin(i * degree);
    ctx.lineTo(x * size + dx, y * size + dy);
  }
  ctx.closePath();
}
