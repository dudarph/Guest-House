"use strict";

// Swiper
let swiper = new Swiper(".guests__mySwiper", {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
});

// Scroll to anchors
(function () {
	// Функция для плавной прокрутки
	const smoothScroll = (targetEl, duration) => {
		// Получаем высоту заголовка (header)
		const headerElHeight = document.querySelector(".header").clientHeight;
		let target = document.querySelector(targetEl);
		// Получаем позицию целевого элемента относительно вьюпорта с учетом высоты заголовка
		let targetPosition = target.getBoundingClientRect().top - headerElHeight;
		let startPosition = window.pageYOffset;
		let startTime = null;

		// Функция для расчета плавности
		const ease = function (t, b, c, d) {
			t /= d / 2;
			if (t < 1) return (c / 2) * t * t + b;
			t--;
			return (-c / 2) * (t * (t - 2) - 1) + b;
		};

		// Функция анимации
		const animation = (currentTime) => {
			if (startTime === null) startTime = currentTime;
			const timeElapsed = currentTime - startTime;
			const run = ease(timeElapsed, startPosition, targetPosition, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		};

		// Запуск анимации
		requestAnimationFrame(animation);
	};

	// Функция для обработки кликов по кнопке
	const scrollButton = document.querySelector(".js-scrollButton");
	scrollButton.addEventListener("click", function () {
		const currentTarget = "#booking"; // Здесь указываем селектор целевого элемента
		smoothScroll(currentTarget, 1000);
	});

	// Вызываем функцию для обработки кликов
	scrollButton();
})();
