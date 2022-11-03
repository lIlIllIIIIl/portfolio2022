import { gsap } from "gsap";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();

const homeLogo = document.querySelector(".headerLogoSvg")
const homeLogoSplit = Splitting({ target: homeLogo, by: 'items' });
homeLogo.parentElement.style.overflow = "hidden";
// console.log(homeLogoSplit[0]);


let tl = gsap.timeline();
tl
.set(homeLogoSplit[0]["items"], {
	y: '+=100%',
}, 'switchtime')
.to(homeLogoSplit[0]["items"], {
	duration: 0.7,
	ease: 'Power2.inOut',
	y: '0%',
	stagger: 0.10,
}, 0)


const homeTitle = document.querySelector('.home_title');
const homeTitleSplit = Splitting({ target: homeTitle, by: 'chars' });
homeTitle.parentElement.style.overflow = "hidden";

let chars = homeTitleSplit[0]["chars"]
let lenght = homeTitleSplit[0]["words"].length;
chars.forEach(char => {
	let charIndex = getComputedStyle(char).getPropertyValue('--char-index');

	tl
	.set(char, {
		opacity: 0,
		y: `${80+(charIndex*6)}%`
	}, "switchtime")
	.to(char, {
		duration: 0.6,
		opacity: 1,
		ease: 'circ.out',
		y: '0%',
	}, 0.4)
})


const homeText = document.querySelector(".presentation_text")
const homeTextSplit = Splitting({ target: homeText, by: 'lines' });
// homeText.parentElement.style.overflow = "hidden";
let words = homeTextSplit[0]["words"]
let len = homeTextSplit[0]["lines"].length;


words.forEach(word => {
	let lineNum = getComputedStyle(word).getPropertyValue('--line-index');
	tl
	.set(word, {
		opacity: 0,
		// y: `${}`%,
		y: `${(len+1)*50+(lineNum*50)}%`
	}, 'switchtime')
	.to(word, {
		duration: 1,
		opacity: 1,
		ease: 'power3.out',
		y: '0%',
	}, `<${1+lineNum*0.17})`)
})



const menuTitle = document.querySelector(".menu_title-text")
const menuTitleSplit = Splitting({ target: menuTitle, by: 'chars' });
// menuTitle.parentElement.style.overflow = "hidden";

tl
.set(menuTitleSplit[0]["chars"], {
	opacity: 0,
	ease: 'Power3.easeIn',
	// y: '200%'
}, 'switchtime')
.to(menuTitleSplit[0]["chars"], {
	duration: 1,
	opacity: 1,
	ease: 'Power3.easeOut',
	y: '0%',
	stagger: 0.02,
}, 0)

const menuSquare = document.querySelector(".menu_square")
const menuSquareSplit = Splitting({ target: menuSquare, by: 'items' });
// console.log(menuSquareSplit[0]["items"]);

tl
.set(menuSquareSplit[0]["items"], {
	opacity: 0,
	rotation: 80,
}, 'switchtime')
.to(menuSquareSplit[0]["items"], {
	duration: 0.6,
	rotation: 0,
	opacity: 1,
	ease: 'Power2.inOut',
	y: '0%',
	stagger: 0.02,
}, 0)


const menuDesign = document.querySelector(".menu_footer")
const menuDesignSplit = Splitting({ target: menuDesign, by: 'items' });
menuDesign.parentElement.style.overflow = "hidden";

tl
.set(menuDesignSplit[0]["items"], {
	opacity: 0,
}, 'switchtime')
.to(menuDesignSplit[0]["items"], {
	duration: 0.6,
	opacity: 1,
	ease: 'Power2.inOut',
}, 0)


const homeBorder = document.querySelector(".border_anim-1")

tl
.set(homeBorder, {
	opacity: 0,
	x: '100%'
}, 'switchtime')
.to(homeBorder, {
	duration: 0.6,
	opacity: 1,
	ease: 'Power2.inOut',
	x: '0%',
	stagger: 0.02,
}, 0)

const topMenuBorder = document.querySelector(".border_anim-2")

tl
.set(topMenuBorder, {
	opacity: 0,
	x: '-100%'
}, 'switchtime')
.to(topMenuBorder, {
	duration: 0.6,
	opacity: 1,
	ease: 'Power2.inOut',
	x: '0%',
	stagger: 0.02,
}, 0)

const leftMenuBorder = document.querySelector(".border_anim-3")

tl
.set(leftMenuBorder, {
	opacity: 0,
	y: '-100%'
}, 'switchtime')
.to(leftMenuBorder, {
	duration: 0.6,
	opacity: 1,
	ease: 'Power2.inOut',
	y: '0%',
	stagger: 0.02,
}, 0)