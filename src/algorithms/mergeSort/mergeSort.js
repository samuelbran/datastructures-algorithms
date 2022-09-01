const merge = require("./merge");

function mergeSort(array) {
  if (array.length === 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([5, 6, 3, 2, 1]));

module.exports = mergeSort;
