//GET data
function ex_01() {
    const data = localStorage.getItem("user"); // không có trả về null
    const userLogin = localStorage.getItem("userLogin");
    console.log("GET data ", data);
    console.log("GET userLogin ", userLogin);

}
// SET data
function ex_02() {
    localStorage.setItem("user", " NguyenQuan");
    localStorage.setItem("userLogin",
        JSON.stringify({ email: "user@example", id: 1 }));
    console.log("SET data ");
}
function ex_03() {
    localStorage.removeItem("user");
}

////////////////////
//GET data
function ex_01() {
    const data = sessionStorage.getItem("user"); // không có trả về null
    const userLogin = sessionStorage.getItem("userLogin");
    console.log("GET data ", data);
    console.log("GET userLogin ", userLogin);

}
// SET data
function ex_02() {
    sessionStorage.setItem("user", " NguyenQuan");
    sessionStorage.setItem("userLogin",
        JSON.stringify({ email: "user@example", id: 1 }));
    console.log("SET data ");
}
function ex_03() {
    sessionStorage.removeItem("user");
}
// Bài 1
// lấy giá trị input -> đẩy lên Stoga -> hiển thị HTML
function bai1() {
const valueIn = document.getElementById("userName").value;
// đẩy lên
localStorage.setItem("userName", JSON.stringify(valueIn));
// lấy về HTML

// const user = localStorage.getItem("userName")
//
//     console.log("user", user);
    rederName()
    
  
}
rederName()

function rederName(){
    const reusul1tName = document.getElementById("result-01")
    const userName1 = JSON.parse(localStorage.getItem("userName"));
    if(localStorage.getItem("userName") != null){
        document.getElementById("buT").innerHTML = "Sửa"
    }
   
    reusul1tName.innerHTML =  userName1;
}
function deleData(){
    localStorage.removeItem("userName")
        if(localStorage.getItem("userName")== null){
            document.getElementById("buT").innerHTML = "Thêm "
        }
    
}

