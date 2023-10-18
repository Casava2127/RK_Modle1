

// Mảng 2 chiều lưu thông tin học viên- sau khi load lại trang thì kiểm tra có tồn tại hay chưa
//
var students = localStorage.getItem("accounts");
students = students ? JSON.parse(students) : []

// Form và danh sách học viên
var stdForm = document.getElementById("Form");

// Sự kiện submit form
stdForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // lấy thông tin từ form
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    var user = {
        username: username,
        email: email,
        password: password
    };

    // Thêmsinh viên vào mảng và hiển thị lên danh sách
    students.push(user);
    localStorage.setItem("accounts", JSON.stringify(students));
});
function clearSt() {
    localStorage.clear()
}
