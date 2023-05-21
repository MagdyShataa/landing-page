function myFunction() {
	var x = document.getElementById("myTopnav");

	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

const navbar = document.getElementById("myTopnav");
const sticky = navbar.offsetTop;

function myFunction() {
	if (window.scrollY >= sticky) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}

let links = document.querySelectorAll("a[href^='#']");

links.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		let arrt = document.querySelector(this.getAttribute("href"));
		arrt.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});

let wow = document.querySelectorAll(".wow");
let i = 0;
window.addEventListener("scroll", function () {
	for (i = 0; i < wow.length; i++) {
		if (wow[i].getBoundingClientRect().top < window.innerHeight) {
			wow[i].classList.add("show");
		} else {
			wow[i].classList.remove("show");
		}
	}
});
AOS.init();
