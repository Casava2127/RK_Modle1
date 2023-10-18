// str.padStart(targetLength, padString)

function updateClock() {
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById('hour').textContent = hour;
    document.getElementById('minute').textContent = minute;
    document.getElementById('second').textContent = second;
}


setInterval(updateClock, 1000);

//
setInterval(function () {
    const audio = new Audio('song.mp3');
    audio.play();
}, 3000); 

// Đổi ảnh nền 
setInterval(function () {
    const backgrounds = ['m1.jpg', 'm2.jpg', 'm3.jpg'];
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const selectedBackground = backgrounds[randomIndex];
    document.body.style.backgroundImage = `url(${selectedBackground})`;
}, 2000); 
