// function ex_1() {
//     console.log("Đây là funtion")
//     let a = 20;

//     console.log(a)
//     // chứng tỏ nó chạy qua 1 lượt rồi mới thự hiện chương trinhf
// }


// function sum(a, b) {
//     console.log(a, b)
//     return a + b
// }

// console.log(sum(9, 0))
//============================================================
// bài 1: Viết function in ra câu chào
// function showInfo() {
//     console.log("Welcom to Rikkei Academy")
// }
// showInfo()
// //Bài 2: Viết function tính bình phương 1 số 
// function squareCalculation(a) {
//     return a ** 2;


//======================================================

// cách khai báo mới 

// const calculateArea3 = (radius) => radius*2;
// console.log("Tính "+calculateArea3(22))

// // hàm không đối số
// function allSum(){
//     console.log(arguments)

//     let sum=0;
//     for(i=0;i<arguments.length;i++){
//         sum+=arguments
//     }

//     return sum;
// }

// var k1 = allSum('2,5,8,7,9,2,1,99')

//

// function ex_9(){
//     let count =0;
//     function increase(){
//         count++;
//         console.log("Kiểm tra count "+count)

//     }
//     return increase
    
// }
// console.log("Kiểm tra" +ex_9()())

// const k = ex_9();
// k();
// k();
// console.log("Kiểm tra "+ k());

    
///
function getSum(a,b){
    return a+b;
}
function getData(callbackfn){
    return callbackfn(2,3)*2;
}
console.log(getData(getSum))


