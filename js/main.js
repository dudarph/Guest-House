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
