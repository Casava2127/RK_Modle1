function ex_1(){
   
// cách khai báo mảng - cách 1
    // mảng chứa trái cây 
    const animals = [ "Cat" , "Dog" , "Pig" , "Tiger" , "Lion" , "Bird" , "Duck" ]    
    console.log("Ktra Mang", animals);
//cách 2
    const animals1 = new Array("Cat" , "Dog" , "Pig" , "Tiger" , "Lion")
    console.log("Ktra mảng", animals1)
}

// Push
function ex_2(){
     // các hàm làm việc với mảng
     const numbers=[1,4,5,40]
     let numbers_length = numbers.push(6,7)
     console.log("In mảng", numbers+" có độ dài: "+numbers_length)
}

function ex_3(){
    // các hàm làm việc với mảng
    const numbers=[1,4,5,40];
    const newNumbers =numbers;

    newNumbers[2]=99999;
    console.log(newNumbers)
    
}
// bai tap demo
// tạo một mãng rỗng để thêm giá trị bằng prompt

// const arr = [];
// var s
// i=0;
// do{
//     arr[i]=parseInt(prompt("Nhập phần tử: "+i))
//     i++;
// }
// while(s=parseInt(prompt("Có nhận tiếp: 1-0"))==1)
// console.log(arr)


//