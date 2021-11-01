/* CACHING THE DOM */
const mobileMenuToggler = document.querySelector('.mobile-toggler');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

mobileMenuToggler.addEventListener('click', () => {
	mobileMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
	mobileMenu.style.display = 'none';
});
