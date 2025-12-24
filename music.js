// music.js - File JavaScript riêng để phát nhạc

// Khởi tạo audio
const music = new Audio('https://raw.githubusercontent.com/15phamkhoa-a11y/Merry-Chrismas/refs/heads/main/spoticatch%20(mp3cut.net).mp3');
music.loop = true; // Lặp lại nhạc
music.volume = 0.3; // Âm lượng 70%

let isPlaying = false;

// Hàm phát nhạc
function playMusic() {
    if (!isPlaying) {
        music.play()
            .then(() => {
                isPlaying = true;
                console.log('Nhạc đang phát');
            })
            .catch((error) => {
                console.log('Lỗi phát nhạc:', error);
            });
    }
}

// Hàm dừng nhạc (nếu cần)
function pauseMusic() {
    music.pause();
    isPlaying = false;
    console.log('Nhạc đã dừng');
}

// Hàm toggle nhạc (bật/tắt)
function toggleMusic() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

// Tự động phát khi click vào bất kỳ đâu trên trang
document.addEventListener('click', playMusic, { once: true });

// Tự động phát khi touch (cho mobile)
document.addEventListener('touchstart', playMusic, { once: true });

// Tự động phát khi load trang (có thể bị chặn bởi trình duyệt)
window.addEventListener('load', () => {
    music.play().catch(() => {
        console.log('Autoplay bị chặn - Cần tương tác người dùng');
    });
});

// Phát nhạc khi nhấn phím Space (tùy chọn)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        toggleMusic();
    }
});

// Export các hàm nếu cần dùng ở file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { playMusic, pauseMusic, toggleMusic };
}