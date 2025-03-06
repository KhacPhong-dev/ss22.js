
let arr = prompt("Nhập vào 1 dãy số bất kỳ");
let arr1 = arr.split(",");  
let max = arr1[0];
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }
}
console.log(max);