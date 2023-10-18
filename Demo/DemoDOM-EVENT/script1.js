// HTML DOM
// 1)Element: ID, class, tag, CSS selector, HTML collection
// Finding HTML elements by id  -> lay ra elm
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors  -> lay ra elm (trong th selector)
// Finding HTML elements by HTML object collections

//2)Attribute
//3)Text

//get element method
var headingNode = document.getElementById('heading')

console.log({
   element: headingNode
});

var headingNodes = document.getElementsByClassName('heading')
console.log(headingNodes);

var headingNodess = document.querySelector('.heading-2')
console.log(headingNodess);
var headingNodess1 = document.querySelectorAll('.heading-2')
console.log(headingNodess1); // tra ve NostList

console.log(headingNodess1[3]);  //aa4


//HTML Collection
console.log(document.forms);
console.log("HTML Colection " + document.forms['form-1']);
console.log("HTML Colection1 " + document.forms.formTest);

console.log(document.anchors); // laasy ra toan bo the a
// console.log(document.images); // laasy ra toan bo the image


// get element method 2
// select toan bo li trong box-1 hoac box2
// c1
var listItemNodes = document.querySelectorAll('.box-1 li')
console.log(listItemNodes);
// cach 2 dung boxNode tim element con trong no
var boxNode = document.querySelector('.box-1 ')
console.log(boxNode);
console.log(boxNode.querySelectorAll('li'));
console.log(boxNode.getElementsByTagName('li'));


// get element method 3
// 1. getElementById                 -> lay ra Element
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector                  -> lay ra Element
// 5. querySelectorAll

// 6. HTML collection
// 7. document.write
var headingSelector = document.querySelector('#heading')
console.log(headingSelector);
var headingGetId = document.getElementById('heading')
console.log(headingGetId);
//  ca 2 deu tra ve element

var headingClass = document.getElementsByClassName('heading')
console.log(headingClass);
var headingTag = document.getElementsByTagName('h1')[0] // them 0 voaf thi dung
console.log(headingTag);
//  ca 2 deu tra ve HTMLCollection
// cach lay ras thi them index vao hoac lap for
for (var i = 0; i < headingClass.length; i++) {
   console.log(headingClass[i]);
}
// -> phan biet HTMLColection , NostLIST, element


// Attribute node - Text Node
// lay ra tu nodem element




////////////////////////////////////////////////////////
//DOM ATTRIBUTES
var heading3 = document.querySelector('h4')
console.log(heading3);
heading3.title = "heaiding4"
heading3.id = "heaiding4"
heading3.className = "testHeading3"
//-> thêm attribute vào element thì LẤY THẺ - > THÊM ATTRIBUTE
//  tuy nhiên, một só trường hợp thì một số thẻ khong có thuộc tính đó ( ví dụ
// thẻ h1 không có thuocj tính href như thẻ a) - > dùng phương thức setAttribute 
heading3.setAttribute('href', 'diachi') // 2 đối số truyền vào là TÊN THUỘC TÍNH và GIÁ TRỊ GÁN CHO NÓ
// set attribute

// get ra value của attribute
console.log(heading3.getAttribute('href') );


//innerText , TextContent
var heading4 =document.querySelector('.heading4')
console.log(heading4.textContent);
console.log(heading4.innerText);
// sửa đổi TextNode trong element
heading4.innerText ='New Heading 4'

//geter - setter
// phân biệt inner  -> lấy ra ND của element, nó là thuộc tính của elementNode ,
// và textcontent -> lấy ra toàn bộ nôi dung bên trong, là thuocj tính của elementNode và TextNodes
// một điểm nữa là kkhi text xuống dòng, inner sẽ tạo ra thẻ br bên trong HTML, còn TextContent thì cho ra đoạn mã như cách chúng ta code 


//InnerHTML Propety
var boxElement = document.querySelector('.box1')
//innerHTML - OuterHTML -> 2 thuocj tính 2 elementNode
boxElement.innerHTML='<h1 title="text">THÊM Elm h1</h1>' //-> thêm 1 textNode (đoạn text) vào trong elementNode( thẻ h1)
console.log(document.querySelector('.box1').innerText); //-> THÊM Elm h1
console.log(boxElement.innerHTML); // lấy ra ND ( thẻ con ) dã GÁN <h1 title="text">THÊM Elm h1</h1>
console.log(boxElement.outerHTML); // lấy ra bên ngoài ( cả chính nó)
boxElement.outerHTML='<span>TEST OUTER</span>'; // -> thay thẻ div thành thẻ span
console.log(boxElement); // vẫn hiện thẻ div -> nó còn lưu trong bộ nhớ



/////////////////////
// NodePropety

//Tạo các phần tử HTML (nút) mới
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);
// Phương thức trong ví dụ trước, đã thêm phần tử mới là đứa con cuối cùng của cha mẹ.appendChild()

// Nếu bạn không muốn điều đó, bạn có thể sử dụng phương thức: insertBefore()

//////
//classList property ->DOMTokenList
// add, contains(ktra 1 class có nam trong class hay khong), remove, toggle

var boxElm = document.querySelector('.div2')
console.log(boxElm.classList);
console.log(boxElm.classList.add('red'));
console.log((boxElm.classList.contains('red')));
// Sự kiện thời gian
setTimeout(() => {
boxElm.classList.remove('red');},3000);

//toggle -> kiểm tra element có thẻ red ko => Có thì xóa đi, không có thì thêm vào



