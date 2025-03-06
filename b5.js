let arr =[];
for (let i = 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random()*100);
    if(arr[i]%2==0){
        sum1+=arr[i];
    }else{
        sum2+=arr[i]; 
    }

}
console.log(arr);
console.log("Tổng các số lẻ là: "+sum2);
console.log("Tổng các số chẵn là: "+sum1);
