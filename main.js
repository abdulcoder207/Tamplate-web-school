const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const profilToggle = document.getElementById('profilToggle');
const profilMenu = document.getElementById('profilMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

profilToggle.addEventListener('click', () => {
    profilMenu.classList.toggle('hidden');
});