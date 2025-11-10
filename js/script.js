const nav = document.querySelector('.nav__list');
const navLinks = document.querySelectorAll('.nav__item');
const navBtn = document.querySelector('.nav__burger');
const footerYear = document.querySelector('.footer__year');

window.addEventListener('load', () => {
	const preloader = document.querySelector('#preloader');
	preloader.classList.add('hidden');
});

const handleNav = () => {
	nav.classList.toggle('nav__list--active');

	navLinks.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__list--active');
		});
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

navBtn.addEventListener('click', handleNav);
