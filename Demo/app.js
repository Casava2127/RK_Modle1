// lập trình hướng đối tượng OOP
const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue"; 

// document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old.";
person.firstName + " is " + person.age + " years old.";
person.result1 = function() {return  this.firstName + " " + this.lastName;}

// 2 cách lôi ra giá trị thuộc tính của đối tượng
console.log("Person is name "+person.lastName);
console.log(person.result1);
console.log(("Person is name "+person[lastName]));
// cách khai báo này có nghĩa như đối tượng tương tự mảng trong việc khai báo thuộc tính cho nó

// -> điều này chứng tỏ cho câu "Các biến JavaScript cũng có thể chứa nhiều giá trị.
// Các đối tượng cũng là biến. Nhưng các ĐỐI TƯỢNG có thể chứa nhiều giá trị"
