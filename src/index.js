module.exports = function towelSort(matrix) {
  let sortedArray = []
  if (!Array.isArray(matrix) || matrix.length == 0) return sortedArray

  matrix.forEach((subMatrix, index) => {
    !(index & 1) ? sortedArray = sortedArray.concat(subMatrix) : sortedArray = sortedArray.concat(subMatrix.reverse())
  })
  return sortedArray
}
