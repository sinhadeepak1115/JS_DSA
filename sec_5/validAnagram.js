// let string =  "deepak"
// let ans = string.split('')
// console.log(ans)

function validAnagram(string1, string2) {
  let str1 = string1.split("");
  let str2 = string2.split("");

  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    let index = str2.indexOf(str1[i]);
    if (index === -1) {
      return false;
    }
    str2.splice(index, 1);
    console.log(str1, str2);
  }
  return true;
}
let hui = validAnagram("deepak", "eedpak");
console.log(hui);
