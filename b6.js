let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = prompt("Nhập vào 1 số bất kỳ");
function checkNumber(arr, num) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            count++; 
        } 

    }
    return count;

}
console.log(checkNumber(arr, num));

