document.addEventListener("DOMContentLoaded", () => {
	"use strict";

	/**
	 * Preloader
	 */
	const preloader = document.querySelector("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			setTimeout(() => {
				preloader.classList.add("loaded");
			}, 1000);
			setTimeout(() => {
				preloader.remove();
			}, 2000);
		});
	}

	/**
	 * Mobile nav toggle
	 */
	const mobileNavShow = document.querySelector(".mobile-nav-show");
	const mobileNavHide = document.querySelector(".mobile-nav-hide");

	document.querySelectorAll(".mobile-nav-toggle").forEach(el => {
		el.addEventListener("click", function (event) {
			event.preventDefault();
			mobileNavToogle();
		});
	});

	function mobileNavToogle() {
		document.querySelector("body").classList.toggle("mobile-nav-active");
		mobileNavShow.classList.toggle("d-none");
		mobileNavHide.classList.toggle("d-none");
	}

	/**
	 * Hide mobile nav on same-page/hash links
	 */
	document.querySelectorAll("#navbar a").forEach(navbarlink => {
		if (!navbarlink.hash) return;

		let section = document.querySelector(navbarlink.hash);
		if (!section) return;

		navbarlink.addEventListener("click", () => {
			if (document.querySelector(".mobile-nav-active")) {
				mobileNavToogle();
			}
		});
	});

	/**
	 * Toggle mobile nav dropdowns
	 */
	const navDropdowns = document.querySelectorAll(".navbar .dropdown > a");

	navDropdowns.forEach(el => {
		el.addEventListener("click", function (event) {
			if (document.querySelector(".mobile-nav-active")) {
				event.preventDefault();
				this.classList.toggle("active");
				this.nextElementSibling.classList.toggle("dropdown-active");

				let dropDownIndicator = this.querySelector(
					".dropdown-indicator"
				);
				dropDownIndicator.classList.toggle("bi-chevron-up");
				dropDownIndicator.classList.toggle("bi-chevron-down");
			}
		});
	});

	/**
	 * Scroll top button
	 */
	const scrollTop = document.querySelector(".scroll-top");
	if (scrollTop) {
		const togglescrollTop = function () {
			window.scrollY > 100
				? scrollTop.classList.add("active")
				: scrollTop.classList.remove("active");
		};
		window.addEventListener("load", togglescrollTop);
		document.addEventListener("scroll", togglescrollTop);
		scrollTop.addEventListener(
			"click",
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			})
		);
	}

	/**
	 * Initiate glightbox
	 */
	const glightbox = GLightbox({
		selector: ".glightbox",
	});

	/**
	 * Init swiper slider with 1 slide at once in desktop view
	 */
	new Swiper(".slides-1", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	/**
	 * Init swiper slider with 3 slides at once in desktop view
	 */
	new Swiper(".slides-3", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 40,
			},

			1200: {
				slidesPerView: 3,
			},
		},
	});

	/**
	 * Animation on scroll function and init
	 */
	function aos_init() {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
			mirror: false,
		});
	}
	window.addEventListener("load", () => {
		aos_init();
	});
});

// Get the elements with the "Terraverde" and "Monteverde" classes
var terraverdeElement = document.querySelector(".terraverde");
var monteverdeElement = document.querySelector(".monteverde");

// Get the monteverdeUnitElement
var monteverdeUnitElement = document.querySelector(".monteverde-unit");
var terraverdeUnitElement = document.querySelector(".terraverde-unit");

// Store the initial content of monteverdeUnitElement
var initialContent = monteverdeUnitElement.innerHTML;
var initialContentTerra = terraverdeUnitElement.innerHTML;

// Add click event listeners to the terraverdeElement
terraverdeElement.addEventListener("click", function () {
	// Update the content of monteverdeUnitElement to display "Terraverde"
	// Remove the "active" class from the monteverdeElement
	monteverdeElement.classList.remove("active");
	// Add the "active" class to the terraverdeElement
	terraverdeElement.classList.add("active");
	terraverdeUnitElement.style.display = "block";

	terraverdeUnitElement.innerHTML = initialContentTerra;
	monteverdeUnitElement.innerHTML = "";
});

// Add click event listeners to the monteverdeElement
monteverdeElement.addEventListener("click", function () {
	// Remove the "active" class from the terraverdeElement
	terraverdeElement.classList.remove("active");
	// Add the "active" class to the monteverdeElement
	monteverdeElement.classList.add("active");
	// Restore the initial content of monteverdeUnitElement
	monteverdeUnitElement.innerHTML = initialContent;
	terraverdeUnitElement.innerHTML = "";
});
