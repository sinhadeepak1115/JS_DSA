// countUniqueValues

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let nos = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[nos] !== arr[i]) {
      nos++;
      arr[nos] = arr[i]
    }
  }
  return nos + 1
}
console.log(countUniqueValues([1, 2, 3, 3, 4, 4, 4, 7, 7, 12, 12, 13]))

