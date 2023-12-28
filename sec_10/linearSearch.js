function linearSearch(arr, value) {
  for (let i=0; i<arr.length; i++){
    if (arr[i] === value){
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1,2,45,7,4,24,23,54,23,877,554,6], 5854))
