// document.addEventListener("DOMContentLoaded", () => {
//     const productlist = document.getElementById("product-list");
//     // const addProductButton = document.getElementById("add-product");

//     // Lấy danh sách sản phẩm từ local storage hoặc tạo một danh sách trống
//     const products = JSON.parse(localStorage.getItem("U-card")) || [];

//     alert("Bạn đang kiểm soát với vai trò Admin")
//     // Hiển thị danh sách sản phẩm
//     function showProducts() {
//         productlist.innerHTML = "";
//         products.forEach((product) => {
//             const li = document.createElement("li");
//             li.innerHTML = `
//                 <span>${product.email1} - ${product.productId}</span>
//                 <button class="remove-button" data-id="${product.productId}">Xóa</button>
//             `;
//             productlist.appendChild(li);
//         });
//     }


//     // Xóa sản phẩm
//     productlist.addEventListener("click", (event) => {
//         if (event.target.classList.contains("remove-button")) {
//             const productId = event.target.getAttribute("data-id");

//             // Xóa sản phẩm khỏi Local Storage
//             removeFromLocalStorage(productId);

//             // Xóa thẻ <li> chứa sản phẩm khỏi danh sách hiển thị trên trang
//             const listItem = event.target.parentElement;
//             productlist.removeChild(listItem);

//         }
//     });


//     function removeFromLocalStorage(productId) {
//         // Lấy danh sách sản phẩm từ Local Storage
//         const products = JSON.parse(localStorage.getItem("U-card")) || [];

//         // Tìm sản phẩm cần xóa trong danh sách
//         const updatedProducts = products.filter((product) => product.productId !== productId);

//         // Lưu danh sách sản phẩm đã cập nhật vào Local Storage
//         localStorage.setItem("U-card", JSON.stringify(updatedProducts));
//     }

//     showProducts();
// });




// Lấy dữ liệu từ Local Storage với key "U-card"
const uCardData = localStorage.getItem("U-card");

// Kiểm tra xem dữ liệu có tồn tại hay không
if (uCardData) {
    const uCardArray = JSON.parse(uCardData);

    // Tạo một Set để lưu trữ các email1 duy nhất
    const uniqueEmails = new Set();

    // Lặp qua mảng uCardArray để thêm các email1 vào Set
    uCardArray.forEach((item) => {
        uniqueEmails.add(item.email1);
    });

    // Lấy phần tử HTML để hiển thị kết quả
    const resultDisplay = document.getElementById("result-display");
    const deleteButton = document.getElementById("delete-button");

    // Lặp qua các email1 duy nhất trong Set để tạo các tùy chọn
    const emailSelect = document.getElementById("email-select");
    uniqueEmails.forEach((email) => {
        const option = document.createElement("option");
        option.value = email;
        option.text = email;
        emailSelect.appendChild(option);
    });
    // Kiểm tra xem đã lưu giá trị select box trong localStorage chưa
    const savedSelectedEmail = localStorage.getItem("selectedEmail");



    // Thêm sự kiện "change" cho danh sách <select>
    emailSelect.addEventListener("change", (event) => {

        const selectedEmail = event.target.value;
        // Lưu giá trị của select box trong localStorage
        localStorage.setItem("selectedEmail", selectedEmail);

        // Gọi hàm để cập nhật danh sách sản phẩm và hiển thị chúng
        updateProductList(selectedEmail);

        // Lấy productId tương ứng với email1 đã chọn
        const selectedProductIds = uCardArray
            .filter((item) => item.email1 === selectedEmail)
            .map((item) => item.productId);

        // Hiển thị productId tương ứng trên trang
        resultDisplay.innerHTML = `Danh sách productId cho email "${selectedEmail}": ${selectedProductIds.join(
            ", "
        )}`;

        // Hiển thị danh sách sản phẩm tương ứng
        const productlist = document.getElementById("product-list");
        const selectedProducts = uCardArray.filter(
            (item) => item.email1 === selectedEmail
        );
        showProducts(selectedProducts);
        //
        // Hiển thị nút Xóa
        deleteButton.style.display = "block";
        // Hiển thị danh sách sản phẩm bằng cách sử dụng CSS để hiển thị nó
        productlist.style.display = "block";
        // Thêm sự kiện "click" cho nút Xóa
        deleteButton.addEventListener("click", () => {
            const selectedEmail = emailSelect.value;
            // Lấy danh sách sản phẩm cần xóa
            const productsToRemove = uCardArray.filter(
                (item) => item.email1 === selectedEmail
            );

            // Tạo một mảng chứa productId của các sản phẩm cần xóa
            const productIdsToRemove = productsToRemove.map(
                (item) => item.productId
            );

            // Xóa tất cả sản phẩm cần xóa từ Local Storage
            const updatedProducts = uCardArray.filter(
                (item) =>
                    !(
                        item.email1 === selectedEmail &&
                        productIdsToRemove.includes(item.productId)
                    )
            );

            //

            // Xóa tất cả sản phẩm có email1 tương ứng từ Local Storage
            /*  const updatedProducts = uCardArray.filter(
              (item) => item.email1 !== selectedEmail
            );*/
            localStorage.setItem("U-card", JSON.stringify(updatedProducts));

            resultDisplay.innerHTML = "";

            // Hiển thị lại danh sách sản phẩm (có thể cần làm lại kiểu này)
            showProducts(updatedProducts);

            // Reset danh sách select và ẩn nút Xóa
            emailSelect.value = "";
            deleteButton.style.display = "none";

            location.reload();


        });
    });
}

function showProducts(products) {
    const productlist = document.getElementById("product-list");
    productlist.innerHTML = "";

    products.forEach((product) => {
        const li = document.createElement("li");
        li.innerHTML = `
              ${product.email1} - ${product.productId}
              <button class="remove-button" data-id="${product.productId}" email1="${product.email1}" id="remove-btn">Xóa2</button>
          `;
        productlist.appendChild(li);
    });
}
// Xóa sản phẩm
const productlist = document.getElementById("product-list");
productlist.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        const productId = event.target.getAttribute("data-id");
        const email1 = event.target.getAttribute("email1");

        // Xóa sản phẩm khỏi Local Storage
        removeFromLocalStorage(productId, email1);

        // Xóa thẻ <li> chứa sản phẩm khỏi danh sách hiển thị trên trang
        const listItem = event.target.parentElement;
        productlist.removeChild(listItem);

        // Làm mới trang
        location.reload();
    }
});

function removeFromLocalStorage(productId, email1) {
    // Lấy danh sách sản phẩm từ Local Storage
    const products = JSON.parse(localStorage.getItem("U-card")) || [];

    // Tìm sản phẩm cần xóa trong danh sách
    const updatedProducts = products.filter(
        (product) =>
            product.productId !== productId || product.email1 !== email1
    );

    // Lưu danh sách sản phẩm đã cập nhật vào Local Storage
    localStorage.setItem("U-card", JSON.stringify(updatedProducts));
}

// Hàm để cập nhật danh sách sản phẩm và hiển thị chúng
function updateProductList(selectedEmail) {
    // Lấy danh sách sản phẩm từ Local Storage
    const uCardArray = JSON.parse(localStorage.getItem("U-card")) || [];

    // Lọc ra các sản phẩm có email1 tương ứng
    const selectedProducts = uCardArray.filter(
        (item) => item.email1 === selectedEmail
    );

    // Hiển thị danh sách sản phẩm và nút Xóa2
    showProducts(selectedProducts);
}


// Lấy dữ liệu từ Local Storage
const productsQ1 = JSON.parse(localStorage.getItem('productsQ1')) || [];
const uCard = JSON.parse(localStorage.getItem('U-card')) || [];

// Tạo một đối tượng để lưu trữ số lượng của mỗi sản phẩm
const productQuantities = {};

// Đếm số lượng sản phẩm dựa trên U-card
uCard.forEach((card) => {
    const productId = card.productId;
    productQuantities[productId] = (productQuantities[productId] || 0) + 1;
});

// Hiển thị sản phẩm và số lượng trong bảng
const tableBody = document.getElementById("productTableBody");
productsQ1.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
          <td>${product.id}</td>
          <td>${product.name}</td>
          <td>${product.category_id}</td>             
          <td>${productQuantities[product.id] || 0}</td>
      `;
    tableBody.appendChild(row);
});





