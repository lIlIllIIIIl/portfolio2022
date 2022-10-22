import { gsap } from "gsap";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();


const homeLogo = document.querySelector(".headerLogoSvg")
const homeLogoSplit = Splitting({ target: homeLogo, by: 'items' });
homeLogo.parentElement.style.overflow = "hidden";
console.log(homeLogoSplit[0]);

let timeline1 = gsap.timeline();
timeline1
.add("step1")
.set(homeLogoSplit[0]["items"], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to(homeLogoSplit[0]["items"], {
    duration: 0.8,
    opacity: 1,
    ease: 'Power3.easeOut',
    y: '0%',
    stagger: 0.04,
}, "step1")


const homeTitle = document.querySelector('.home_title');
const homeTitleSplit = Splitting({ target: homeTitle, by: 'chars' });
homeTitle.parentElement.style.overflow = "hidden";

timeline1
.set(homeTitleSplit[0]["chars"], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to(homeTitleSplit[0]["chars"], {
    duration: 0.8,
    opacity: 1,
    ease: 'Power3.easeOut',
    y: '0%',
    stagger: 0.02,
})


const homeText = document.querySelector(".presentation_text")
const homeTextSplit = Splitting({ target: homeText, by: 'lines' });
homeText.parentElement.style.overflow = "hidden";

timeline1
.add("texting")
.set(homeTextSplit[0]["lines"][0], {
	opacity: 1,
	ease: 'easeIn',
	y: '200%'
}, 'switchtime')
.to(homeTextSplit[0]["lines"][0],  {
    duration: 0.5,
    opacity: 1,
    ease: 'easeIn',
    y: '0%',
}, "texting")

.set(homeTextSplit[0]["lines"][1], {
	opacity: 1,
	ease: 'easeIn',
	y: '200%'
}, 'switchtime')
.to(homeTextSplit[0]["lines"][1],  {
    duration: 0.8,
    opacity: 1,
    ease: 'easeIn',
    y: '0%',
},"texting")


const menuTitle = document.querySelector(".menu_title-text")
const menuTitleSplit = Splitting({ target: menuTitle, by: 'chars' });
menuTitle.parentElement.style.overflow = "hidden";

timeline1
.set(menuTitleSplit[0]["chars"], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to(menuTitleSplit[0]["chars"], {
    duration: 0.8,
    opacity: 1,
    ease: 'Power3.easeOut',
    y: '0%',
    stagger: 0.02,
})


const menuDesign = document.querySelector(".menu_footer")
const menuDesignSplit = Splitting({ target: menuDesign, by: 'items' });
menuDesign.parentElement.style.overflow = "hidden";
console.log(menuDesignSplit);

timeline1
.set(menuDesignSplit[0]["items"], {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '200%'
}, 'switchtime')
.to(menuDesignSplit[0]["items"], {
    duration: 0.8,
    opacity: 1,
    ease: 'Power3.easeOut',
    y: '0%',
    stagger: 0.08,
})
// .set(menuDesignSplit[0]["items"][1], {
// 	opacity: 1,
// 	ease: 'Power3.easeIn',
// 	y: '200%'
// }, 'switchtime')
// .to(menuDesignSplit[0]["items"][1], {
//     duration: 0.5,
//     opacity: 1,
//     ease: 'Power3.easeOut',
//     y: '0%',
//     stagger: 0.02,
// })








const homeBorder = document.querySelector(".border_anim-1")

let timeline2 = gsap.timeline();
timeline2
.set(homeBorder, {
	opacity: 1,
	ease: 'Power3.easeIn',
	x: '100%'
}, 'switchtime')
.to(homeBorder, {
    duration: 0.8,
    opacity: 1,
    ease: 'Power3.easeOut',
    x: '0%',
    stagger: 0.02,
})

const topMenuBorder = document.querySelector(".border_anim-2")

let timeline3 = gsap.timeline();
timeline3
.set(topMenuBorder, {
	opacity: 1,
	ease: 'Power3.easeIn',
	x: '-100%'
}, 'switchtime')
.to(topMenuBorder, {
    duration: 0.8,
    opacity: 1,
    ease: 'Power3.easeOut',
    x: '0%',
    stagger: 0.02,
})

const leftMenuBorder = document.querySelector(".border_anim-3")

let timeline4 = gsap.timeline();
timeline4
.set(leftMenuBorder, {
	opacity: 1,
	ease: 'Power3.easeIn',
	y: '-100%'
}, 'switchtime')
.to(leftMenuBorder, {
    duration: 0.8,
    opacity: 1,
    ease: 'Power3.easeOut',
    y: '0%',
    stagger: 0.02,
})