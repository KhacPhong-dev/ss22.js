let arr = prompt("Nhập vào dãy số bất kỳ");
arr = arr.split("");
let max = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }


}
console.log("Phần tử lớn nhất trong mảng là: " + max);
