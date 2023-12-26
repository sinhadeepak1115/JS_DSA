// isPalindrome('awesome') // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // Base Condition
    if (str.length <=1){
        return true;
    }
    if (str[0] == str[str.length-1]){
        return isPalindrome(str.slice(1,-1));
    }else{
        return false;
    }
}
