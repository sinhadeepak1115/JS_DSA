function sumRange(num) {
  if(num===1)return 1;
  return num = num + sumRange(num-1);
}

console.log(sumRange(13))
