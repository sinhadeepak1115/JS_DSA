
function capitalizeWords(words) {
  // add whatever parameters you deem necessary - good luck!
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    ans.push(words[i].toUpperCase());
  }
  return ans;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

