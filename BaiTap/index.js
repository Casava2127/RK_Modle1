// Bài 1 1.	Viết một hàm doublearray(arr) sử dụng map để nhân đôi mỗi phần tử trong mảng arr.
// Hàm map()
var arr = [2, 5, 8, 7, 5, 4, 7, 9, 8]

let doublearr = arr.map(function (a) {
    return a * 2;
})
console.log("Bài 1: " + doublearr);
// nhân đôi mỗi phần tử trong mảng và trả về mảng mới

//Bài 2: sử dụng foreach để tính tổng các phần tử trong mảng arr.
// Hàm foreach() :forEach là phương thức lặp qua từng phần tử 
//của mảng theo thứ tự tăng dần mà không làm thay đổi kết cấu của mảng
// item: Giá trị của phần tử trong mảng
// index: Vị trí của phần tử trong mảng
// array: Mảng gốc đang được lặp từ forEach

//vd
const fruits = ["Apple", "Orange", "Banana", "Mango"];
fruits.forEach(function (fruit) {
    console.log(fruit); // Apple, Orange, Banna, Mango
})
//cah 1
var arr = [2, 5, 8, 7, 5, 4, 7, 9, 88]
var t = 0;
arr.forEach(function (num) {
    t += num;
})
console.log(t);

//cách 2 bằng map()
var s = 0;
arr.map(function (a) {
    return s += a;
})
console.log("Dùng bằng map(): " + s);

//Bài 3 sử dụng filter để lọc ra các số chẵn từ mảng arr.
// Hàm filter()
//lặp qua qua các phần tử, sau 
//đó tùy vào từng bài toán mà sẽ quyết định chọn phần tử đó hay không
// Tạo hàm mới trả về

var selected_num = arr.filter(function (num) {
    if (num % 2 == 0) {
        return true;
    }
    return false;
})
console.log(selected_num);


// bài 4: sử dụng foreach để tìm giá trị lớn nhất trong mảng arr
let mAx = arr[0];
let inDex = 0;
arr.forEach(function (a, b) {
    if (a > mAx) {
        mAx = a
        inDex = b;
    }
})
console.log("Giá trị lớn nhất là: " + mAx + " với giá trị index: " + inDex);

// Bài 5 sử dụng concat và sort nối 2 arr thành 1 mảng tang dần.
let arr1 = [6, 8, 7, 9, 55]
let arr2 = [99, 88, 55, 41, 32]
let con = (arr1.concat(arr2))
const result = con.sort((a, b) => {
    return b - a
})
console.log(result);

// chuyển qua bảng mã AscII rồi sắp xếp
// chỉ lấy các ký tự là số rồi sắp xếp  Hoặc chữ 
var t = con.filter(function (con) {
    console.log(c?.chartArt(0));
    if (c.chartArt(0) < 39) {
        return true;
    }
    return false;
})
console.log(t);
const re = con.sort(con.filter(function (c) {
    if (c.chartArt(0) < 39) {
        return true;
    }
    return false;
}))
console.log(re);


//bai6 sử dụng filter để loại bỏ các phần tử trùng lặp từ mảng arr.

