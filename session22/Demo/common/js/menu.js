// Js MEnuSide
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});

// Text About
const myText = `Coursera is the leading online education platform, offering
thousands of courses from leading universities and educational
institutions around the world. We connect learners with the
knowledge and skills they need to develop their careers and
enhance their personal knowledge. Coursera is committed to
providing everyone with quality online learning opportunities
and access to an open world of knowledge.`;

const divWrapper = document.getElementById("about-text");
let index = 0;

const writeText = () => {
  divWrapper.textContent = myText.slice(0, index);
  index++;
  if (index > myText.length) {
    index = 0;
  }
};

setInterval(writeText, 100);

///////////////////////////////////////

// Khi trang web tải lại, kiểm tra trạng thái đăng nhập từ Local Storage
window.addEventListener("load", () => {
  const loggedInUser = localStorage.getItem("loggedInUser");
  if (loggedInUser == "admin@gmail.com") {
    window.location.href = "../../pages/product/productA.html";
  } else {
    if (loggedInUser) {
      // Trạng thái đăng nhập đã được lưu, hãy hiển thị trang dành cho người dùng đã đăng nhập
      userEmail = loggedInUser;
      // Hiển thị các phần tử hoặc chức năng cho người dùng đã đăng nhập ở đây
      // Ví dụ: hiển thị nút logOut
      message.innerHTML = "Đăng nhập thành công " + userEmail;
      const showProducts = () => {
        products.forEach((product) => {
          // Tạo HTML để hiển thị sản phẩm
          let productHTML = `
          <a href="#khoaHoc.html" class="product-link">
            <div class="s-card " id="${product.id}">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name} - ${product.id}</p>
              <div><button class="add-to-cart-button" data-product-id="${product.id}">Đăng Ký</button></div>
            </div>
          </a>`;

          // Thêm sản phẩm vào trang web
          document.getElementById("render-html").innerHTML += productHTML;
        });

        // Nút thêm giỏ hàng
        const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
        addToCartButtons.forEach((button) => {
          button.addEventListener("click", function (event) {
            event.preventDefault();
            const productId = this.getAttribute("data-product-id");
            let email1 = userEmail;
            let cartItems = JSON.parse(localStorage.getItem("U-card")) || [];

            const isProductInCart = cartItems.some(
              (item) => item.productId === productId && item.email1 === userEmail
            );

            if (!isProductInCart) {
              cartItems.push({ email1, productId });
              localStorage.setItem("U-card", JSON.stringify(cartItems));
              alert("Đăng ký thành công !");
              this.textContent = "Đã Đăng Ký";
              this.classList.add("registered");

              const removeButton = document.createElement("div");
              removeButton.classList.add("remove-registered-button");
              removeButton.textContent = "Xóa";
              removeButton.setAttribute("data-product-id", productId);

              removeButton.addEventListener("click", function (event) {
                event.preventDefault();
                const productId = this.getAttribute("data-product-id");
                let cartItems = JSON.parse(localStorage.getItem("U-card")) || [];
                const updatedCartItems = cartItems.filter(
                  (item) =>
                    !(item.productId === productId && item.email1 === userEmail)
                );
                localStorage.setItem("U-card", JSON.stringify(updatedCartItems));

                const correspondingRegisterButton = document.querySelector(
                  `.add-to-cart-button[data-product-id="${productId}`
                );
                if (correspondingRegisterButton) {
                  correspondingRegisterButton.textContent = "Đăng Ký";
                  correspondingRegisterButton.classList.remove("registered");
                }

                this.parentElement.removeChild(this);
              });

              this.parentElement.appendChild(removeButton);
            } else {
              alert("Đã đăng ký !");
            }
          });
        });
      };
      function checkRegisteredProducts() {
        const email1 = userEmail;
        const cartItems = JSON.parse(localStorage.getItem("U-card")) || [];

        const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
        addToCartButtons.forEach((button) => {
          const productId = button.getAttribute("data-product-id");
          const isProductInCart = cartItems.some(
            (item) => item.productId === productId && item.email1 === email1
          );

          if (isProductInCart) {
            button.classList.add("registered");
            button.textContent = "Đã Đăng Ký";
            const productContainer = button.parentElement;
            const removeButton = productContainer.querySelector(
              `.remove-registered-button[data-product-id="${productId}`
            );
            if (!removeButton) {
              const newRemoveButton = document.createElement("div");
              newRemoveButton.classList.add("remove-registered-button");
              newRemoveButton.setAttribute("data-product-id", productId);
              newRemoveButton.textContent = "Xóa";
              productContainer.appendChild(newRemoveButton);
              const removeRegisteredButtons = document.querySelectorAll(
                ".remove-registered-button"
              );
              removeRegisteredButtons.forEach((button) => {
                button.addEventListener("click", function (event) {
                  event.preventDefault();
                  const productId = this.getAttribute("data-product-id");
                  let cartItems =
                    JSON.parse(localStorage.getItem("U-card")) || [];
                  const updatedCartItems = cartItems.filter(
                    (item) =>
                      !(item.productId === productId && item.email1 === userEmail)
                  );
                  localStorage.setItem(
                    "U-card",
                    JSON.stringify(updatedCartItems)
                  );
                  const correspondingRegisterButton = document.querySelector(
                    `.add-to-cart-button[data-product-id="${productId}`
                  );
                  if (correspondingRegisterButton) {
                    correspondingRegisterButton.textContent = "Đăng Ký";
                    correspondingRegisterButton.classList.remove("registered");
                  }
                  this.parentElement.removeChild(this);
                });
              });
            }
          }
        });
      }

      localStorage.setItem("loggedInUser", userEmail);
      document.getElementById("categories").style.display = "none";
      showProducts();
      checkRegisteredProducts();

      const removeRegisteredButtons = document.querySelectorAll(
        ".remove-registered-button"
      );
      removeRegisteredButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
          event.preventDefault();
          const productId = this.getAttribute("data-product-id");
          let cartItems = JSON.parse(localStorage.getItem("U-card")) || [];
          const updatedCartItems = cartItems.filter(
            (item) => !(item.productId === productId && item.email1 === userEmail)
          );
          localStorage.setItem("U-card", JSON.stringify(updatedCartItems));

          const correspondingRegisterButton = document.querySelector(
            `.add-to-cart-button[data-product-id="${productId}`
          );
          if (correspondingRegisterButton) {
            correspondingRegisterButton.classList.remove("registered");
          }

          this.parentElement.removeChild(this);
        });
      });

      setTimeout(function () {
        getSignIn.style.display = "none";
        successIcon.style.display = "block";
      }, 200);

      setTimeout(function () {
        getDropdown.style.display = "none";
        myAccount.style.display = "block";
        document.getElementById("iconLogin").style.display = "block";
      }, 200);

      const selectElement = document.getElementById("select1");
      selectElement.addEventListener("change", function () {
        const selectedOption = selectElement.options[selectElement.selectedIndex];

        if (selectedOption.value === "3") {
          userEmail = null;
          localStorage.removeItem("loggedInUser");
          window.location.reload();

        } else if (selectedOption.value === "1") {
          window.location.href = "my-account.html";
        } else if (selectedOption.value === "2") {
          window.location.href = "change-password.html";
        }
      });

      const coursesLink = document.getElementById("coursesU");
      coursesLink.addEventListener("click", () => {
        alert("Bạn đăng nhập với Email: " + userEmail);
        coursesLink.setAttribute("my-cousera", userEmail);
        coursesLink.setAttribute(
          "href",
          `/session22/Demo/pages/product/productU.html?email=${userEmail}`
        );
      });
    } else {
    }
  }
});

// Services trước đăng ký
document.getElementById("categories").addEventListener("click", function (e) {
  alert(" Đăng ký để tham khảo các khóa học");
});

// Biến toàn cục để lưu email người dùng
let userEmail = null;

// Khai báo biến dùng trong login
const signUpForm = document.getElementById("signUpForm");
const message = document.getElementById("message");
const getSignIn = document.getElementById("getSignIn");
const successIcon = document.getElementById("successIcon");
const myAccount = document.getElementById("myAccount");

// Khai báo biến trong phần Quản lí sản phẩm
let products = JSON.parse(localStorage.getItem("productsQ1")) || [];
let categorys = JSON.parse(localStorage.getItem("categorysQ1")) || [];
let cartItems = JSON.parse(localStorage.getItem("U-card")) || [];

// Biến toàn cục để lưu trạng thái đã đăng ký
let isRegistered = false;

// Hiển thị danh sách sản phẩm trên trang web
const showProducts = () => {
  products.forEach((product) => {
    // Tạo HTML để hiển thị sản phẩm
    let productHTML = `
      <a href="#khoaHoc.html" class="product-link">
        <div class="s-card " id="${product.id}">
          <img src="${product.image}" alt="${product.name}" />
          <p>${product.name} - ${product.id}</p>
          <div><button class="add-to-cart-button" data-product-id="${product.id}">Đăng Ký</button></div>
        </div>
      </a>`;

    // Thêm sản phẩm vào trang web
    document.getElementById("render-html").innerHTML += productHTML;
  });

  // Nút thêm giỏ hàng
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      const productId = this.getAttribute("data-product-id");
      let email1 = signUpForm.exampleDropdownFormEmail2.value;
      let cartItems = JSON.parse(localStorage.getItem("U-card")) || [];

      const isProductInCart = cartItems.some(
        (item) => item.productId === productId && item.email1 === userEmail
      );

      if (!isProductInCart) {
        cartItems.push({ email1, productId });
        localStorage.setItem("U-card", JSON.stringify(cartItems));
        alert("Đăng ký thành công !");
        this.textContent = "Đã Đăng Ký";
        this.classList.add("registered");

        const removeButton = document.createElement("div");
        removeButton.classList.add("remove-registered-button");
        removeButton.textContent = "Xóa";
        removeButton.setAttribute("data-product-id", productId);

        removeButton.addEventListener("click", function (event) {
          event.preventDefault();
          const productId = this.getAttribute("data-product-id");
          let cartItems = JSON.parse(localStorage.getItem("U-card")) || [];
          const updatedCartItems = cartItems.filter(
            (item) =>
              !(item.productId === productId && item.email1 === userEmail)
          );
          localStorage.setItem("U-card", JSON.stringify(updatedCartItems));

          const correspondingRegisterButton = document.querySelector(
            `.add-to-cart-button[data-product-id="${productId}`
          );
          if (correspondingRegisterButton) {
            correspondingRegisterButton.textContent = "Đăng Ký";
            correspondingRegisterButton.classList.remove("registered");
          }

          this.parentElement.removeChild(this);
        });

        this.parentElement.appendChild(removeButton);
      } else {
        alert("Đã đăng ký !");
      }
    });
  });
};

const getDropdown = document.getElementById("dropdown");
var logInUser = (logInUser = signUpForm.exampleDropdownFormEmail2.value);

// SỰ KIỆN SUBMIT
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = signUpForm.exampleDropdownFormEmail2.value;
  logInUser = signUpForm.exampleDropdownFormEmail2.value;
  const password = signUpForm.exampleDropdownFormPassword2.value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (email === "admin@gmail.com" && password === "admin") {
    // Nếu email và mật khẩu đúng là "admin", chuyển đến trang HTML khác
    // window.location.href = "../../pages/homePape/papeProductA_M/initProduct_M.html";
    localStorage.setItem("loggedInUser", email)
    window.location.href = "../../pages/product/productA.html";
  } else {
    const existingUser = users.find(
      (user) => user.email === email && user.password === password
    );


    if (existingUser) {
      message.innerHTML = "Đăng nhập thành công";
      userEmail = email;
      localStorage.setItem("loggedInUser", userEmail);
      document.getElementById("categories").style.display = "none";
      showProducts();
      checkRegisteredProducts();

      const removeRegisteredButtons = document.querySelectorAll(
        ".remove-registered-button"
      );
      removeRegisteredButtons.forEach((button) => {
        button.addEventListener("click", function (event) {
          event.preventDefault();
          const productId = this.getAttribute("data-product-id");
          let cartItems = JSON.parse(localStorage.getItem("U-card")) || [];
          const updatedCartItems = cartItems.filter(
            (item) => !(item.productId === productId && item.email1 === userEmail)
          );
          localStorage.setItem("U-card", JSON.stringify(updatedCartItems));

          const correspondingRegisterButton = document.querySelector(
            `.add-to-cart-button[data-product-id="${productId}`
          );
          if (correspondingRegisterButton) {
            correspondingRegisterButton.classList.remove("registered");
          }

          this.parentElement.removeChild(this);
        });
      });

      setTimeout(function () {
        getSignIn.style.display = "none";
        successIcon.style.display = "block";
      }, 200);

      setTimeout(function () {
        getDropdown.style.display = "none";
        myAccount.style.display = "block";
        document.getElementById("iconLogin").style.display = "block";
      }, 200);

      const selectElement = document.getElementById("select1");
      selectElement.addEventListener("change", function () {
        const selectedOption = selectElement.options[selectElement.selectedIndex];

        if (selectedOption.value === "3") {
          userEmail = null;
          localStorage.removeItem("loggedInUser");
          window.location.reload();
        } else if (selectedOption.value === "1") {
          window.location.href = "my-account.html";
        } else if (selectedOption.value === "2") {
          window.location.href = "change-password.html";
        }
      });

      const coursesLink = document.getElementById("coursesU");
      coursesLink.addEventListener("click", () => {
        alert("Bạn đăng nhập với Email: " + userEmail);
        coursesLink.setAttribute("my-cousera", email);
        coursesLink.setAttribute(
          "href",
          `/session22/Demo/pages/product/productU.html?email=${userEmail}`
        );
      });
    } else {
      signUpForm.reset();
      message.innerHTML = "Đăng nhập lại";
    }

    function checkRegisteredProducts() {
      const email1 = signUpForm.exampleDropdownFormEmail2.value;
      const cartItems = JSON.parse(localStorage.getItem("U-card")) || [];

      const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
      addToCartButtons.forEach((button) => {
        const productId = button.getAttribute("data-product-id");
        const isProductInCart = cartItems.some(
          (item) => item.productId === productId && item.email1 === email1
        );

        if (isProductInCart) {
          button.classList.add("registered");
          button.textContent = "Đã Đăng Ký";
          const productContainer = button.parentElement;
          const removeButton = productContainer.querySelector(
            `.remove-registered-button[data-product-id="${productId}`
          );
          if (!removeButton) {
            const newRemoveButton = document.createElement("div");
            newRemoveButton.classList.add("remove-registered-button");
            newRemoveButton.setAttribute("data-product-id", productId);
            newRemoveButton.textContent = "Xóa";
            productContainer.appendChild(newRemoveButton);
            const removeRegisteredButtons = document.querySelectorAll(
              ".remove-registered-button"
            );
            removeRegisteredButtons.forEach((button) => {
              button.addEventListener("click", function (event) {
                event.preventDefault();
                const productId = this.getAttribute("data-product-id");
                let cartItems = JSON.parse(localStorage.getItem("U-card")) || [];
                const updatedCartItems = cartItems.filter(
                  (item) =>
                    !(item.productId === productId && item.email1 === userEmail)
                );
                localStorage.setItem("U-card", JSON.stringify(updatedCartItems));
                const correspondingRegisterButton = document.querySelector(
                  `.add-to-cart-button[data-product-id="${productId}`
                );
                if (correspondingRegisterButton) {
                  correspondingRegisterButton.textContent = "Đăng Ký";
                  correspondingRegisterButton.classList.remove("registered");
                }
                this.parentElement.removeChild(this);
              });
            });
          }
        }
      });
    }
  }
});
