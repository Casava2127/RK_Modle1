// Mảng 2 chiều lưu thông tin học viên
var students = [];

// Form và danh sách học viên
var stdForm = document.getElementById("stdForm");
var studentList = document.getElementById("studentList");
// Sự kiện submit form
stdForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // lấy thông tin từ form
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var hometown = document.getElementById("hometown").value;
    var gender = document.getElementById("gender").value;

    // kiểm tra dữ liệu đầu vào
    if (!fullName || !email || !phoneNumber || !hometown) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    // Kiểm tra định dạng email và số điện thoại
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phoneNumberPattern = /^[0-9]{10}$/;

    if (!emailPattern.test(email)) {
        alert("Email không hợp lệ.");
        return;
    }

    if (!phoneNumberPattern.test(phoneNumber)) {
        alert("Số điện thoại không hợp lệ.");
        return;
    }

    // tạo đối tượng sinh viên
    var student = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        hometown: hometown,
        gender: gender
    };

    // Thêmsinh viên vào mảng và hiển thị lên danh sách
    students.push(student);
    // 
    renderStudentList();

    // Xóa dữ liệu trên form sau khi push vào 
    clearForm();
});

// Hàm hiển thị danh sách học viên
function renderStudentList() {
    studentList.innerHTML = "";

    for (var i = 0; i < students.length; i++) {
        var studentItem = document.createElement("li");
        studentItem.textContent = "ID: "+i +" "+ "Họ tên: " + students[i].fullName + // sử dụng textContent sẽ lấy nội dung của tất cả phần tử bao gồm phần tử bị ẩn đi
            ", Email: " + students[i].email +
            ", Số điện thoại: " + students[i].phoneNumber +
            ", Quê quán: " + students[i].hometown +
            ", Giới tính: " + students[i].gender;

        // Tạo nút để xóa học viên
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.addEventListener("click", deleteStudent(i));

        // Tạo nút để chỉnh sửa học viên
        var editButton = document.createElement("button");
        editButton.textContent = "Chỉnh sửa";
        editButton.addEventListener("click", editStudent(i));



        //Phương thức appendChild() gắn thêm nút con mới vào cuối danh sách nút con của một nút.
        // tạo thẻ button cuối danh sách, sau đó hiển thị nó cuối cùng thẻ  button
        studentItem.appendChild(deleteButton);
        studentItem.appendChild(editButton);

        studentList.appendChild(studentItem);
    }
}




// Hàm xóa học viên
function deleteStudent(index) {
    
    return function () {
        students.splice(index, 1);
        renderStudentList();
    };
}

// Hàm chỉnh sửa học viên
function editStudent(index) {
    return function () {
        var student = students[index];
        document.getElementById("fullName").value = student.fullName;
        document.getElementById("email").value = student.email;
        document.getElementById("phoneNumber").value = student.phoneNumber;
        document.getElementById("hometown").value = student.hometown;
        document.getElementById("gender").value = student.gender;

        // xóa dữ liệu học viên cũ sau khi chỉnh sửa
        students.splice(index, 1); //

        // renderStudentList();
    };
}


//Clear from

// Lấy phần tử nút Clear Form
var clearButton = document.getElementById("clearButton");

// Lắng nghe sự kiện click trên nút "Clear Form"
clearButton.addEventListener("click", function () {
    clearForm();
});
// Hàm xóa dữ liệu trên form
function clearForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("hometown").value = "";
    document.getElementById("gender").value = "Nam";
}


// Lấy phần tử nút clear
var clearDataButton = document.getElementById("clearDataButton");


clearDataButton.addEventListener("click", function () {
    clearAllData();
});

// Hàm xóa tất cả data
function clearAllData() {
    // Xóa mảng students hoặc bất kỳ dữ liệu nào bạn muốn xóa
    students = [];

    // Gọi hàm renderStudentList() để cập nhật danh sách
    renderStudentList();
}

// Khởi tạo danh sách học viên
renderStudentList();
