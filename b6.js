let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = prompt("Nhập vào số nguyên bất kì");
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
        count++; 
    }
}
if (count == 0) {
    alert("Không có số nguyên này trong mảng"); 
}
else {
    alert("Số nguyên " + n + " xuất hiện " + count + " lần trong mảng"); 
}

