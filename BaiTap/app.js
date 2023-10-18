// Bài 1
let person1 = new Object();
person1.firstName = "Nguyễn";
person1.lastName = "Quân";
person1.changeLastName = function (name) {
    this.lastName = name;

}
console.log(person1.lastName);
person1.changeLastName("Cung");
console.log(person1.lastName);

// xóa thuộc tính ra khỏi đối tượng
delete person1.lastName
//bài2
// key và values
// hàm for in và Empty
// kiểm tra xem một Object có thuộc tính nào không
function checkEmpty(obj) {
    for (var key in obj) {  // duyệt qua mỗi thuộc tính của Obj( các key)
        if (obj.hasOwnProperty(key)) { // kiểm tra xem thuộc tính có phải thuộc tính riêng của 
            // đối tượng hay không
            return false; //
        }
    }
    return true; 
}

// Sử dụng hàm để kiểm tra đối tượng
var obj1 = {}; // Đối tượng rỗng
var obj2 = { name: "John", age: 30 }; 
console.log("Q"+checkEmpty(obj1)); //  true
console.log(checkEmpty(obj2)); //  false



// Bai3
function tinhTongLuong(nhanViens) {
    var tongLuong = 0;
    for (var i = 0; i < nhanViens.length; i++) {
        tongLuong += nhanViens[i].luong;
    }
    return tongLuong;
}

// Xây dựng đối tượng chứa thông tin lương của các nhân viên
var phongNhanSu = [
    { ten: "Alice", luong: 5000 },
    { ten: "Bob", luong: 6000 },
    { ten: "Charlie", luong: 7000 }
];

// Sử dụng hàm để tính tổng lương của các nhân viên
var tongLuongPhongNhanSu = tinhTongLuong(phongNhanSu);
console.log("Tổng lương của các nhân viên trong phòng: " + tongLuongPhongNhanSu);

// Bài 4
 var meNu =[
    {width:100},
    {height:6},
    {title: "Hình chữ nhật"}
 ]

function checkNumber(Object){
    var s=1;
    for(var key in Object){
        
        if(typeof Object[key]==='number'){
           
           s*= Object[key]
        }
        console.log(typeof Object[key]);

    }
    return s;
}
console.log(checkNumber(meNu));
const m = {
    w : 9,
    h :7
}
console.log(checkNumber(m));


// Tạo đối tượng menu với các thuộc tính width, height, và title
var menu = {
    width: 200,
    height: 100,
    title: "Menu"
};

// Xây dựng hàm để nhân 2 giá trị các thuộc tính có giá trị là number
function nhan2CacThuocTinh(menu) {
    for (var key in menu) {
        if (typeof menu[key] === "number") {
            menu[key] *= 2;
        }
    }
}

// Sử dụng hàm để nhân 2 giá trị các thuộc tính có giá trị là number
nhan2CacThuocTinh(menu);

// Hiển thị giá trị mới của các thuộc tính
// console.log("Width: " + menu.width);   // Kết quả: 400
// console.log("Height: " + menu.height); // Kết quả: 200
// console.log("Title: " + menu.title);   // Kết quả: "Menu"

   

