alert("Website founder")
const categories = [
    { id: "IT", name: "Công nghệ thông tin" },
    { id: "EC", name: "Kinh tế học" },
    { id: "ED", name: "Giáo dục" },
  ];
  
  const createProduct = (id, name, category_id, image = "") => ({
    id,
    name,
    category_id,
    image,
  });
  
  const products = [
    createProduct("IT1", "Frontend", "IT", "/session22/img/frontend.jpg"),
    createProduct("IT2", "Data Science", "IT" ,"https://factored.ai/wp-content/uploads/2021/08/Graph-10-08-21_1-copia.png"),
    createProduct("IT3", "Backend", "IT", "https://www.interviewbit.com/blog/wp-content/uploads/2021/09/backend.jpg"),
    createProduct("IT4", "Mobile App", "IT", "https://appinventiv.com/wp-content/uploads/sites/1/2020/02/mobile-app-architecture.png"),
    createProduct("IT5", "Data Engineer", "IT","https://factored.ai/wp-content/uploads/2021/08/Graph-10-08-21_1-copia.png"),
    createProduct("EC1", "Macroeconomic", "EC","https://www.ineteconomics.org/uploads/featured/iStock-1270042529.jpg"),
    createProduct("EC2", "Microeconomics", "EC","https://images.theconversation.com/files/418067/original/file-20210826-21-1sf8j51.png?ixlib=rb-1.1.0&rect=0%2C8%2C997%2C788&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"),
    createProduct("ED1", "Math", "ED", "https://t3.ftcdn.net/jpg/04/83/90/18/360_F_483901821_46VsNR67uJC3xIKQN4aaxR6GtAZhx9G8.jpg"),
    createProduct("ED2", "Physics", "ED","https://images.theconversation.com/files/191827/original/file-20171025-25516-g7rtyl.jpg?ixlib=rb-1.1.0&rect=0%2C70%2C7875%2C5667&q=45&auto=format&w=926&fit=clip"),
    createProduct("ED3", "Chemistry", "ED","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDroBfBS4q4onmyNzSfCWPogXQfyXaGFhKh2oBN7vyRBTLxxtxzP4lbyrJPOFA7EB754&usqp=CAU"),
    createProduct("ED4", "Topo", "ED","https://tckt.hn.ss.bfcplatform.vn/2017/06/17A05027-17A05045-TCKT-22.jpg"),
  ];
  
  localStorage.setItem("productsQ1", JSON.stringify(products));
  localStorage.setItem("categoriesQ1", JSON.stringify(categories));
  
  const getProducts = () => JSON.parse(localStorage.getItem("productsQ1"));
  const getCategories = () => JSON.parse(localStorage.getItem("categoriesQ1"));
  