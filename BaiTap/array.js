// Bài 1

// alert("Bài 1: Viết một chương trình JavaScript đơn giản để nối tất cả các phần tử của mảng sau thành một chuỗi");

//  // Nối các phần tử của mảng bằng chuỗi trống
// myColor = ["Red", "Green", "White", "Blackvar" ];
// result1 = myColor.join(",");
// console.log(result1)


// Bài 2 
// alert(" Bài 2 Viết chương trình JavaScript chấp nhận một số làm đầu vào và chèn dấu gạch ngang (-) vào giữa hai số chẵn.")
// function chenDauGach(so) {
//     // Chuyển đổi chuỗi số thành mảng các chữ số
//     var mangChuSo = so.toString().split('');
//     console.log(mangChuSo)
//     var ketQua = [];

//     for (var i = 0; i < mangChuSo.length; i++) {
//         // Chuyển đổi chữ số thành số nguyên
//         var chuSo = parseInt(mangChuSo[i]);

//         // Kiểm tra xem chữ số hiện tại có phải là số chẵn không
//         if (!isNaN(parseInt(mangChuSo[i+1]))) {
//             if((chuSo % 2 == 0) && parseInt(mangChuSo[i+1]%2==0))
//             // Nếu là số chẵn, thêm dấu gạch ngang vào kết quả
//             ketQua.push('-');
//         }

//         // Thêm chữ số hiện tại vào kết quả
//         ketQua.push(chuSo);
//     }

//     // Chuyển mảng kết quả thành chuỗi và loại bỏ dấu gạch ngang đầu tiên nếu có
//     var ketQuaChuoi = ketQua.join('');
//     if (ketQuaChuoi.charAt(0) === '-') {
//         ketQuaChuoi = ketQuaChuoi.slice(1);
//     }

//     return ketQuaChuoi;
// }

// var soNhap = 25468;
// var ketQua = chenDauGach(soNhap);
// console.log(ketQua); 


// Bai 3
// alert("Chuyển đổi ký tự")
// function hoanDoi(chuoi) {
//     var chuoiKq = '';

//     for (var i = 0; i < chuoi.lenght; i++) {
//         var kyTu = chuoi[i];

//         if (kyTu === kyTu.toUpperCase()) {
//             chuoiKq += kyTu.toLowerCase();
//         } else {
//             chuoiKq += kyTu.toUpperCase();
//         }
//     }
//     return chuoiKq;
// }
// var chuoiNhap = 'The Quick Brown Fox';
// console.log(hoanDoi(chuoiNhap)); 


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

var chuoiNhap = 'The Quick Brown Fox';
var chuoiKetQua = hoanDoiTruongHop(chuoiNhap);
console.log(chuoiKetQua); // Kết quả: 'tHE qUICK bROWN fOX'
