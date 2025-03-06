let arr = [];
let n = prompt("Nhập số phần tử của mảng:");
for (let i = 0; i < n; i++) {
    arr[i] = prompt("Nhập phần tử thứ " + (i + 1) + ":");
}
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
}
console.log("Mảng đảo ngược: " + reversedArr);
