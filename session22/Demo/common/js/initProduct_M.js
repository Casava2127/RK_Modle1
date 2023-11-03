alert("Website management")
const products = JSON.parse(localStorage.getItem("productsQ1")) || [];

    const updateLocalStorage = () => {
      localStorage.setItem("productsQ1", JSON.stringify(products));
    };
    
    const renderProductList = () => {
      const productList = document.getElementById("productList");
      productList.innerHTML = "";
    
      products.forEach(product => {
        const li = document.createElement("li");
        li.textContent = `${product.id} - ${product.name} (${product.category_id})`;
    

          // Tạo một hình ảnh và hiển thị nó nếu đường dẫn ảnh tồn tại
    if (product.image) {
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;
      img.style.maxWidth = "100px"; // có thể điều chỉnh theo ý muốn
      li.appendChild(img);
    }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "XÓA";
        deleteButton.addEventListener("click", () => {
          const index = products.findIndex(p => p.id === product.id);
          if (index !== -1) {
            products.splice(index, 1);
            updateLocalStorage();
            renderProductList();
          }
        });
    
        li.appendChild(deleteButton);
        productList.appendChild(li);
      });
    };
    
    document.getElementById("addProduct").addEventListener("click", () => {
      const category_id = prompt("Nhập category_id:");
      const id = prompt("Nhập id:");
      const name = prompt("Nhập tên sản phẩm:");
      const image = prompt("Nhập đường dẫn ảnh:");
      if (category_id && id && name) {
        const newProduct = createProduct(id, name, category_id, image);
        products.push(newProduct);
        updateLocalStorage();
        renderProductList();
      }
    });
    
    const createProduct = (id, name, category_id, image) => ({ id, name, category_id, image });

    const generateProductId = () => {
      const ids = products.map(product => parseInt(product.id.slice(2)));
      const maxId = Math.max(...ids);
      return `IT${maxId + 1}`;
    };
    
    renderProductList();
    