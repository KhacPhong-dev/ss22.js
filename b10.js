let arr = [];
let num = 0;
let choice = 0;
function inputArray() {
    let n = prompt("Nhập vào số lượng phần tử của mảng");
    for (let i = 0; i < n; i++) {
        arr[i] = prompt("Nhập vào phần tử thứ " + (i + 1));
    }

}
function outputArray() {
    console.log(arr);

}
function addArray() {
    let n = prompt("Nhập vào số lượng phần tử muốn thêm");
    for (let i = 0; i < n; i++) {
        arr.push(prompt("Nhập vào phần tử thứ " + (i + 1)));
    }

}
function editArray() {
    let n = prompt("Nhập vào số lượng phần tử muốn sửa");
    for (let i = 0; i < n; i++) {
        let index = prompt("Nhập vào vị trí phần tử muốn sửa");
        arr[index] = prompt("Nhập vào phần tử thứ " + (i + 1));
    }

}
function deleteArray() {
    let n = prompt("Nhập vào số lượng phần tử muốn xóa");
    for (let i = 0; i < n; i++) {
        let index = prompt("Nhập vào vị trí phần tử muốn xóa");
        arr.splice(index, 1);
    }

}
function exit() {
    alert("Thoát chương trình");

}
do {
    choice = prompt("MENU\n 1:Nhập vào mảng \n 2:Hiển thị mảng \n 3:Thêm phần tử \n 4:Sửa phần tử \n 5:Xóa phần tử \n 6:Thoát");
    switch (choice) {
        case "1":
            inputArray();
            break;
        case "2":
            outputArray();
            break;
        case "3":
            addArray();
            break;
        case "4":
            editArray();
            break;
        case "5":
            deleteArray();
            break;
        case "6":
            exit();
            break;
        default:
            alert("Lựa chọn không hợp lệ");
            break;

    }	
}while (choice == 6);
