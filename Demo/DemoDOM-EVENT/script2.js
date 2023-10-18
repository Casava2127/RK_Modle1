// // DOM Event
// // 1. Attribute events -> lắng nghe sự kiện người dùng bắng attribute
// // 2. Assign event using the element node

// var h3Element = document.querySelector('h3');
// h3Element.onclick = function() {
//     console.log(Math.random());
// }
// // lấy ra tất cả các thẻ h3 trong HTML
// var h3Elms = document.querySelectorAll('h3')
// // duyệt qua các thẻ -> gán sự kiện - > chạy hàm khi nhấn sự kiện vào thẻ 
// for(var i =0;i<h3Elms.length;i++){
//     h3Elms[i].onclick = function(e){
//         console.log(e.target); 

//     }
// }

// //
//     // 1.Input / select 
//     // 2.key up/ down 
//     inputElement = document.querySelector('input[ type="text" ]')
//     console.log((inputElement));
//     inputElement.onchange = function(e){
//         console.log(e.target); // lấy ra element
//         console.log(e.target.value);
//         // tương tự cho checkbox và select


//     // preventDefault        
//     var aElement = document.links

//      for( var i =0;i<aElement.length;++i){
//         aElement[i].onclick = function(e){
//             if(!e.target.href.startsWith('ttps://www.w3schools.com/js/js_htmldom_events.asp')){
//                 e.preventDefault();
//             }
//         }
//      }
//     }
//     //
//      document.querySelector('.divT').onclick = 
//      function(e){
//         console.log('Div');
//      }
//      document.querySelector('button').onclick = 
//      function(e){
//         e.stopPropagation(); // ngăn chặn nổi bọt
//         console.log('Click Me');
//      }
//      // - > ngay lúc này, nổi bọt xảy ra, khi nhấn button thì nó lam sự kiện onclick ra cả thẻ divT
//      // - > khắc phục  StopPropagation - > ngăn chăn nổi bọt

//      ///////////////////

   