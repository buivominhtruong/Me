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
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Tìm tất cả các thanh bar bên trong phần skills
            const bars = entry.target.querySelectorAll('.bar');
            bars.forEach((bar) => {
                // Lấy giá trị từ data-width và gán vào chiều rộng thực tế
                bar.style.width = bar.getAttribute('data-width');
            });
            // Nếu bạn chỉ muốn chạy hiệu ứng 1 lần duy nhất:
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 }); // Chạy khi 50% phần skills xuất hiện

// Bắt đầu theo dõi phần Skills
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}
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
