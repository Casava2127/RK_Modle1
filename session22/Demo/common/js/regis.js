const signUpForm = document.getElementById("signUpForm");
      const message = document.getElementById("message");

      signUpForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const email = signUpForm.email.value;
          const password = signUpForm.password.value;

          const users = JSON.parse(localStorage.getItem("users")) || [];

          const existingUser = users.find(user => user.email === email);
          if (existingUser) {
              message.innerHTML = "Email đã tồn tại!";
          } else {
              users.push({ email, password });
              localStorage.setItem("users", JSON.stringify(users));
              signUpForm.reset();
              message.innerHTML = "Đăng ký thành công!";
          }
      });