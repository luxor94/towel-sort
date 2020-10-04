
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Array.isArray(matrix) !== true) {
    return [];
    } else { 
  for (let i = 1; i < matrix.length; i = i + 2) {
    matrix[i] = matrix[i].reverse();
   }
  return matrix.reduce(
    (result, element) => result.concat(element),
    []
  );
}
}