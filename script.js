const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Nếu muốn hiệu ứng lặp lại khi cuộn ngược lên:
            // entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Kích hoạt khi 10% phần tử xuất hiện
});
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-list');

// Mở/Đóng menu khi click vào nút Hamburger
menu.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    
    // Hiệu ứng xoay nút Hamburger (tùy chọn)
    this.classList.toggle('is-active');
});

// Tự động đóng menu khi người dùng chọn 1 mục
document.querySelectorAll('.nav-list a').forEach(n => n.addEventListener('click', () => {
    menuLinks.classList.remove('active');
}));
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
