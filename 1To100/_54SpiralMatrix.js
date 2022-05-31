/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var n = matrix.length;
  var m = (matrix[0] || []).length;
  var res = [];
  var x1 = 0;
  var x2 = m - 1;
  var y1 = 0;
  var y2 = n - 1;
  while (x1 <= x2 && y1 <= y2) {
    for (var x = x1; x <= x2; x++) res.push(matrix[y1][x]);
    for (var y = y1 + 1; y <= y2; y++) res.push(matrix[y][x2]);
    if (x1 < x2 && y1 < y2) {
      for (var x = x2 - 1; x > x1; x--) res.push(matrix[y2][x]);
      for (var y = y2; y > y1; y--) res.push(matrix[y][x1]);
    }
    x1++;
    x2--;
    y1++;
    y2--;
  }
  return res;
};
