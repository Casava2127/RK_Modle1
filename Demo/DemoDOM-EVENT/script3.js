// 1.Event Listener
// a. xử lí nhiều việc khi event xảy ra
// b. lắng nghe / hủy bỏ lắng nghe
// phân biệt Dom Event và Event Listener


//DOM Event
// var btn = document.getElementById('btn');
// btn.onclick = function(){
//     //viec 1
//   console.log('viec 1');
//   //viec 2
//   console.log('viec 2');
// }

// // huy bỏ lắng nghe - ghi đề bằng hàm rỗng sau 3s
// setTimeout(function(){
//     btn.onclick=function(){}
// }, 3000);  // sau 3s thì sụ kiện hủy bỏ lắng nghe

//Event Listener
function viec1(){
    console.log('viec1');
}
var btn = document.getElementById('btn');
// btn.addEventListener('click', function(e){
//     console.log('Event1');
// })
// btn.addEventListener('click', function(e){
//     console.log('Event2');
// })
// btn.addEventListener('click', function(e){
//     console.log('Event3');
// }) 

btn.addEventListener('click', viec1)
setTimeout(function(){
    btn.removeEventListener('click', viec1)
}, 3000)


