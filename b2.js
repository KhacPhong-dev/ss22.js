
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num = prompt("Nhập vào 1 số bất kỳ");
function checkNumber(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            console.log("Bingo"); 
        }else {
            console.log("Chúc bạn may mắn lần sau"); 
        }
    }

}