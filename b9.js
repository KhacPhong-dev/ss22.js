let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 6, 7, 8, 9, 10];
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) == -1) {
        arr2.push(arr[i]);
    }
    
}
arr2.sort(function(a, b) {
    return a - b; 
})
console.log(arr2);

