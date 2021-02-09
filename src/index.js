
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (Array.isArray(matrix) && matrix != null){
     return matrix.map((item, index) => index % 2 === 0 ? item : item.reverse()).flat();
    } else {
      return [];
    }  
}
