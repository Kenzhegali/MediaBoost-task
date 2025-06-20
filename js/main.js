

// accordion //
document.querySelectorAll('.accordion__header').forEach(header => {
    header.addEventListener('click', () => {
        const currentItem = header.closest('.accordion__item');
        const currentContent = currentItem.querySelector('.accordion__content');
        const isActive = currentItem.classList.contains('active');

        document.querySelectorAll('.accordion__item').forEach(item => {
            const content = item.querySelector('.accordion__content');
            item.classList.remove('active');
            content.style.maxHeight = null;
        });

        if (!isActive) {
            currentItem.classList.add('active');
            currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
        }
    });
});



// burger //
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("menuClose");
const submenuToggle = document.getElementById("submenuToggle");
const submenu = document.getElementById("submenu");

burgerBtn?.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeBtn?.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

submenuToggle?.addEventListener("click", () => {
    submenuToggle.parentElement.classList.toggle("open");
});