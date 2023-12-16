function reverse(word){
  let arr = word.split("");
  arr = arr.reverse().join("");
  

  return arr;
}

console.log(reverse('awesome')) // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
