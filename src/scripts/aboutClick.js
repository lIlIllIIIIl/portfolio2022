// import { LogLevels } from "@barba/core/dist/core/src/modules/Logger";
import { gsap } from "gsap";

import Splitting from "splitting";
Splitting();

let tl = gsap.timeline();

const timing = 0.1

const fullPage = document.querySelector(".mainPage")

const about = document.querySelector(".aboutContainer")
const images = about.querySelectorAll(".aboutImage")

const aboutOpen = document.querySelector(".aboutContainer-open")
const aboutFullTitle = document.querySelector(".aboutFullTitle-open")
const titleOpen = aboutOpen.querySelector(".aboutTitle-open")
let aboutTitleSplit
const imageOpen = aboutOpen.querySelector(".aboutImage-open")
const textOpen = aboutOpen.querySelector(".aboutText-open")

const cross = aboutOpen.querySelector(".aboutTitle-cross")
const crossOne = cross.querySelector(".aboutTitle-cross :nth-child(1)")
const crossTwo = cross.querySelector(".aboutTitle-cross :nth-child(2)")

const aboutOthers = aboutOpen.querySelectorAll(".aboutOther")




cross.addEventListener("click", function(e){
	let tl = gsap.timeline({ onComplete: () => gsap.set(".aboutContainer-open", {clearProps: true}) });

	let mainTitle = document.querySelectorAll('.anim_title');
	let images = document.querySelectorAll(".aboutImage")
	let aboutImages = document.querySelectorAll(".aboutAnim")

	let countChars = 0;
	let countImages = 1;
	let countImagesAbout = 0;

	let mainTitleSplit = Splitting({ target: mainTitle, by: 'chars' });
	let mainChars = mainTitleSplit[0]["chars"]

	let aboutTitleChars = aboutTitleSplit[0]["chars"]

	const textOpenSplit = Splitting({ target: textOpen, by: 'lines' });
	let textWords = textOpenSplit[0]["words"]
	let len = textOpenSplit[0]["lines"].length;


	tl
	.set(aboutOpen, {
		autoAlpha: 1,
	}, "switchtime")
	.set(cross, {
		autoAlpha: 1,
	}, "switchtime")
	.to(crossOne, {
		duration: 0.4,
		rotation: -135,
		transformOrigin: "50% 50%"
	}, ">")
	.to(crossTwo, {
		duration: 0.4,
		rotation: -45,
		transformOrigin: "50% 50%"
	}, "<")
	.to(aboutOpen, {
		duration: 0.5,
		autoAlpha: 0,
	}, ">-0.5")
	.to(aboutOpen, {
		display: "none",
	}, ">0")
	.to(about, {
		autoAlpha: 1,
		display: "flex",
	}, ">")
	.to(crossOne, {
		rotation: 0,
	}, ">0")
	.to(crossTwo, {
		rotation: 0,
	}, ">0")


	mainChars.forEach(char => {
		let charIndex = getComputedStyle(char).getPropertyValue('--char-index');
		tl
		.set(char, {
			autoAlpha: 0,
			y: `${80+(charIndex*6)}%`
		}, "switchtime")
		.to(char, {
			duration: 0.6,
			y: '0%',
			autoAlpha: 1,
			ease: 'circ.out',
			}, 0.8+countChars+timing)
	})
	countChars+=0.1;

	images.forEach(image =>{
		tl
		.set(image, {
			autoAlpha: 0,
			y: `${100+(countImages*30)}`,
		}, 'switchtime')
		.to(image, {
			autoAlpha: 1,
			y: "0%",
			duration: 0.8,
			ease: "Power3.out",
		}, 1.3+(countImages*0.01))
		countImages+=1;
	})

	aboutOthers.forEach(el =>{
		el.classList.toggle("chosenOne", false)
	})


})



// cross.addEventListener("click", function(e){
// 	aboutOpen.style.display="none"
// 	about.style.display="flex"
// 	aboutOthers.forEach(el =>{
// 		el.classList.toggle("chosenOne", false)
// 	})
// })

function changeContent(titleOpen, elem, imageOpen, textOpen){
	titleOpen.innerHTML = elem.alt
	let src = elem.src.replace("small", "large")
	imageOpen.src = src
	textOpen.innerHTML = elem.getAttribute("desc")
}

aboutOthers.forEach(elem =>{
	elem.addEventListener("click", function(e){
		aboutOthers.forEach(remover =>{
			remover.classList.remove("chosenOne")
		})
		let imageAff = document.querySelectorAll(`.${elem.classList[1]}`)
		imageAff[1].classList.toggle("chosenOne")
		tl
		.to(imageOpen, {
			autoAlpha: 0,
			y: "-40px",
			ease: "Power4.inOut",
		})
		.to(textOpen, {
			autoAlpha: 0,
			y: "-40px",
			ease: "Power4.inOut",
		}, "<")
		.to(aboutFullTitle, {
			autoAlpha: 0,
			ease: "Power4.inOut",
		}, "<")
		.call(changeContent, [titleOpen, elem, imageOpen, textOpen])
		.to(imageOpen, {
			y: "40px",
			duration: "0s",
		}, ">0")
		.to(textOpen, {
			y: "40px",
			duration: "0s",
		}, "<")
		.to(imageOpen, {
			autoAlpha: 1,
			y: "0%",
			ease: "Power4.inOut",
		})
		.to(aboutFullTitle, {
			autoAlpha: 1,
			ease: "Power4.inOut",
		}, "<")
		.to(textOpen, {
			autoAlpha: 1,
			y: "0%",
			ease: "Power4.inOut",
		}, "<")
		about.style.display="none"
		aboutOpen.style.display="flex"
		// titleOpen.innerHTML = elem.alt
		// let src = elem.src.replace("small", "large")
		// imageOpen.src = src
		// textOpen.innerHTML = elem.getAttribute("desc")
	})
})


images.forEach(elem =>{
	elem.addEventListener("click", function(e){
		console.log("lll");
		let imageAff = document.querySelectorAll(`.${elem.classList[1]}`)
		imageAff[1].classList.toggle("chosenOne")
		imageAff[2].classList.toggle("chosenOne")
		tl
		.set(about, {
			autoAlpha: 1,
		}, "switchtime")
		.set(aboutOpen, {
			autoAlpha: 0,
			y: "10%"
		})
		.to(about, {
			autoAlpha: 0,
		}, "switchtime")
		.to(about, {
			display: "none",
		}, "switchtime")
		.to(aboutOpen, {
			display: "flex",
		})
		.to(aboutOpen, {
			autoAlpha: 1,
			y: "0%",
			ease: "Power4.inOut",
		})


		// tl
		// .set(about, {
		// 	autoAlpha: 1,
		// }, "switchtime")
		// .set(aboutOpen, {
		// 	autoAlpha: 0,
		// }, "switchtime")
		// .set(imageOpen, {
		// 	autoAlpha: 0,
		// 	y: "10%",
		// 	ease: "Power4.inOut",
		// }, "switchtime")
		// .set(aboutFullTitle, {
		// 	autoAlpha: 0,
		// 	ease: "Power4.inOut",
		// }, "switchtime")
		
		// .to(about, {
		// 	autoAlpha: 0,
		// 	duration: 0.4,
		// }, "<")
		// .to(about, {
		// 	display: "none",
		// 	duration: 0.4,
		// }, "<")
		// .to(aboutOpen, {
		// 	display: "flex",
		// 	autoAlpha: 1,
		// 	duration: 0.4,
		// }, ">")
		// .set(textOpen, {
		// 	autoAlpha: 0,
		// 	y: "20%",
		// 	ease: "Power4.inOut",
		// }, "switchtime")
		// .to(textOpen, {
		// 	autoAlpha: 1,
		// 	y: "0%",
		// 	ease: "Power4.inOut",
		// 	duration: 0.4,
		// }, "<")
		// .to(imageOpen, {
		// 	autoAlpha: 1,
		// 	y: "0%",
		// 	ease: "Power4.inOut",
		// 	duration: 0.4,
		// }, "<")
		// .to(aboutFullTitle, {
		// 	autoAlpha: 1,
		// 	ease: "Power4.inOut",
		// 	duration: 0.4,
		// }, "<")



		titleOpen.innerHTML = elem.alt
		let src = elem.src.replace("small", "large")
		imageOpen.src = src
		// textOpen.innerHTML = elem.ariaValueMax
		textOpen.innerHTML = elem.getAttribute("desc")
		return aboutTitleSplit = Splitting({ target: titleOpen, by: 'chars' });
	})
})
