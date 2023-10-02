// Bài 1 Kiểm tra số nguyên tố trong phạm vi số nhập

//cách 1: sử dụng Sàng Eratosthenes để tìm tất cả số nguyên tố bé hơn số nhập
function timSoNguyenTo(n) {
    var danhSachSo = Array.from({ length: n - 1 }, (_, i) => i + 2);
    var danhSachSoNguyenTo = [];

    while (danhSachSo.length > 0) {
        var soHienTai = danhSachSo[0];

        danhSachSoNguyenTo.push(soHienTai);

        danhSachSo = danhSachSo.filter(function (so) {
            return so % soHienTai !== 0;
        });
    }

    return danhSachSoNguyenTo;
}


//Cách 2: Làm lại trong bài Demo của Sesstion 11 với định lý 6k-1
// kiểm tra số vừa nhập có phải só nguyên tố

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (var i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// kiểm tra cách 1
// var phamVi = 30; // Thay đổi phạm vi theo nhu cầu
// var soNguyenTo = timSoNguyenTo(phamVi);
// console.log("Các số nguyên tố trong phạm vi từ 2 đến " + phamVi + ":");
// console.log(soNguyenTo);
// kiểm tra cách 2 
// var k= parseInt(prompt("Nhập số muốn kiểm tra "))
// console.log("Số "+k+" có phải số nguyên tố hay không: "+isPrime(k))

//==============================================

// BÀI 2: CHUYỂN ĐỔI GIỮA FEET VÀ METERS
function conversionFtoM(foot) {
    return 0.305 * foot;
}
function conversionMtoF(meters) {
    return 3.279 * meters;
}

//============================================================================
//BAI 3 
//cau1
function showInfo() {
    return console.log("Welcom to Rikkei Academy")
}
//cau2
function square_Calculation(n) {
    return n ** 2;
}
// cau 3
function calculation_Century(n) {
    return console.log(Math.floor(n / 100) + 1);
}
console.log("Thế kỷ " + calculation_Century(1))
// bai 4
function cut_String(n) {
    var c = "..."
    console.log(n.slice(0, 9).concat(c));
}
cut_String("N")

//cau5
function hoanDoiTruongHop(chuoi) {
    var chuoiKetQua = '';

    for (var i = 0; i < chuoi.length; i++) {
        var kyTu = chuoi[i];

        // Kiểm tra trường hợp của ký tự và hoán đổi
        if (kyTu === kyTu.toUpperCase()) {
            chuoiKetQua += kyTu.toLowerCase();
        } else {
            chuoiKetQua += kyTu.toUpperCase();
        }
    }

    return chuoiKetQua;
}

console.log(hoanDoiTruongHop("rikkei ádH"))

//cau6
function max_Array(mang) {
    giaTriLonNhat = mang[0]
    for (var i = 1; i < mang.length; i++) {
        if (mang[i] > giaTriLonNhat) {
            giaTriLonNhat = mang[i]; // Cập nhật giá trị lớn nhất
        }
    }

    return giaTriLonNhat;
}
var n1 = Array(2, 6, 2, 1, 4, 5)
console.log(max_Array(n1))

// cau7 
// kiem tra so HOAN HAO
function check_PerfectNumber(n) {
    var test = 0;
    if (n <= 0) {
        console.log("Nhập sai")
    } else {
        for (i = 1; i <= Math.floor(n / 2); i++) {
            if (n % i == 0) {
                test += i;
            }
        }
        if (test == n) {
            console.log(" là số hoàn hảo ")
        } else {
            console.log("Không phải số hoàn hảo")
        }
    }
}
check_PerfectNumber(28)

//cau8 - tinh tong -> trung  binh

// cau9 ->Sàng Eratosthenes 
// cau9 -> in ra m số nguyên tố
function timSoNguyenTo(n) {
    // Lưu ý: .from
    var danhSachSo = Array.from({ length: n - 1 }, (_, i) => i + 2);
    // const a = new Array(n-1).fill().map((_, i)=> i+2)

    var danhSachSoNguyenTo = [];

    while (danhSachSo.length > 0) {
        var soHienTai = danhSachSo[0];

        danhSachSoNguyenTo.push(soHienTai);

        danhSachSo = danhSachSo.filter(function (so) {
            return so % soHienTai !== 0;
        });
    }

    return danhSachSoNguyenTo;
}
console.log(timSoNguyenTo(10))
// console.log(timSoNguyenTo(99))
// cách 2: sử dụng hàm kiểm tra số nguyên tố,
//cho lặp cho chạy từ 2 tới Căn Bậc 2 của phạm vi cần tim, lưu từng số vào 1 mảng khởi tạo ban đầu

// in ra n sô nguyên tố với n là số nhập từ bàn phím
function timNsoNguyenTo(n){
    var n = parseInt(n);
    var arr1 = []
    if(n==1){
        return 2;
    }else if(n==2){
        return " 2, 3"
    }else for( var i=1;i<=n;i++){
        if(isPrime(6*i+1)){
            arr1.push(6*i+1);
        }else if(6*i-1){
            arr1.push(6*i-1)
        }
    }
    return arr1;
} 
console.log(timNsoNguyenTo(6))

