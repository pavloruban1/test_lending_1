const menuImage = document.querySelector('.menu-image');
const menuImageImg = document.querySelector('.menu-image img');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuImage.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle('show');
});

document.addEventListener('click', () => {
    dropdownMenu.classList.remove('show');
});

menuImageImg.addEventListener('mouseenter', () => {
    menuImageImg.style.transform = 'scale(1.2)';
    menuImageImg.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    dropdownMenu.style.left = `${menuImageImg.offsetLeft}px`;
    dropdownMenu.style.width = `${menuImageImg.offsetWidth}px`;
});

menuImageImg.addEventListener('mouseleave', () => {
    menuImageImg.style.transform = 'scale(1)';
    menuImageImg.style.boxShadow = 'none';
});

