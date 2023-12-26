function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    return arr.flat(Infinity)
  }
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))