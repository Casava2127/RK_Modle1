document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    // Lấy email từ tham số truyền vào URL
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userEmail = urlParams.get("email"); // Đổi tên biến email thành userEmail

    document.getElementById("emailPU").textContent = " Tài khoản của bạn: " + userEmail

    // Lấy dữ liệu từ localStorage với key "U-card"
    const dataFromLocalStorage = JSON.parse(localStorage.getItem("U-card")) || [];

    // Lọc sản phẩm theo email
    const productsForUser = dataFromLocalStorage.filter(product => product.email1 === userEmail); // Đổi tên biến email thành userEmail

    // Hiển thị danh sách sản phẩm
    if (productsForUser.length > 0) {
        productsForUser.forEach(product => {
            const li = document.createElement("li");
            li.innerHTML = `Product ID: ${product.productId}
            <button class="remove-button" data-id="${product.productId}">Xóa</button>`;
            productList.appendChild(li);

        });
    } else {
        const noProductsMessage = document.createElement("p");
        noProductsMessage.textContent = "Không có sản phẩm nào cho email này.";
        productList.appendChild(noProductsMessage);
    }
});
const pro1 = document.getElementById("product-list");
pro1.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
        const productId = event.target.getAttribute("data-id");

        // Xóa sản phẩm khỏi Local Storage
        removeFromLocalStorage(productId);

        // Xóa thẻ <li> chứa sản phẩm khỏi danh sách hiển thị trên trang
        const listItem = event.target.parentElement;
        pro1.removeChild(listItem);

    }
});


function removeFromLocalStorage(productId) {
    // Lấy danh sách sản phẩm từ Local Storage
    const products = JSON.parse(localStorage.getItem("U-card")) || [];

    // Tìm sản phẩm cần xóa trong danh sách
    const updatedProducts = products.filter((product) => product.productId !== productId);

    // Lưu danh sách sản phẩm đã cập nhật vào Local Storage
    localStorage.setItem("U-card", JSON.stringify(updatedProducts));
}