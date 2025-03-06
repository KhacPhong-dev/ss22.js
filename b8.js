let arr = [1, 2, 3, 4, 5,8, 6, 7,10, 8, 9, 10];
function checkNumber(arr) {
    let count = 0;
    let max = 0;
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }
        if (count > max) {
            max = count;
            min = arr[i];
        }
        count = 0;
    }
    console.log(min);

}
checkNumber(arr);