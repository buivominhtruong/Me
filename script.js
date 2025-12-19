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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
