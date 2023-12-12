function same(arr1, arr2){
    if (arr1.lenght !== arr2.lenght){
        return false;
    }
    for(let i=0; i<arr1.lenght; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex,1)
    }
    return true;
}
let ans = same([1,2,3,4],[4,1,9,16])
console.log(ans)