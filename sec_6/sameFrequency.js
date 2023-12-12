// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2){
    text1 = num1.toString();
    text2 = num2.toString();
    
    if (text1.length !== text2.length){
        return false;
    }
    let arr={};
    for (let i of text1){
        arr[i]=(arr[i] || 0) + 1;

    }

    for (let j of text2){

        if (!arr[j]){
            return false;
        }
        arr[j]--;

    }
    return true;
    // good luck. Add any arguments you deem necessary.
  }

console.log(sameFrequency(12132,17 032))
