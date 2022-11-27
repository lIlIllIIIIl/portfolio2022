import { gsap } from "gsap";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";



const timing = 0.1

Splitting();
let tl = gsap.timeline();

const arrow = document.querySelector(".home_arrow")

tl
.set(arrow, {
	scale:(0.0),
	y: "100%",
	x: "-100%",
}, 'switchtime')
.to(arrow, {
	duration: 0.2,
	scale: (1),
	y: "0",
	x: "0",
}, 2)
.to(arrow, {
	duration: 0.2,
	scale: (0.0),
	y: "-100%",
	x: "100%",
}, ">-40%")
.to(arrow, {
	duration: 0,
	scale: (0.0),
	y: "100%",
	x: "-100%",
}, ">-10%")
.to(arrow, {
	duration: 0.2,
	scale: (1),
	y: "0%",
	x: "0%",
}, ">-10%")




const headerLogo = document.querySelector(".headerLogoSvg")
const headerLogoSplit = Splitting({ target: headerLogo, by: 'items' });
headerLogo.parentElement.style.overflow = "hidden";

tl
.set(headerLogoSplit[0]["items"], {
	y: '+=100%',
}, 'switchtime')
.to(headerLogoSplit[0]["items"], {
	duration: 0.7,
	ease: 'Power2.inOut',
	y: '0%',
	stagger: 0.10,
}, 0)


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


const topBorder = document.querySelector(".border_anim-1")

tl
.set(topBorder, {
	opacity: 0,
	x: '100%',
}, 'switchtime')
.to(topBorder, {
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



const animTitle = document.querySelectorAll('.anim_title');
let c = 0;
console.log(animTitle);


animTitle.forEach(title => {
	let animTitleSplit = Splitting({ target: title	, by: 'chars' });
	// title.parentElement.style.overflow = "hidden";

	let chars = animTitleSplit[0]["chars"]
	let lenght = animTitleSplit[0]["words"].length;
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
		}, 0.8+c+timing)
	})
	c += 0.1;
})


if (window.location.href.includes("index") || window.location.href.includes("contact") || window.location.href === "http://localhost:1234/"){
	const animText = document.querySelector(".anim_text")
	const animTextSplit = Splitting({ target: animText, by: 'lines' });
	// animText.parentElement.style.overflow = "hidden";
	let words = animTextSplit[0]["words"]
	let len = animTextSplit[0]["lines"].length;
	
	
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
}


if (window.location.href.includes("about")){
	let c = 1;

	const images = document.querySelectorAll(".aboutImage")

	images.forEach(image =>{
		// let imageNum = getComputedStyle(image).getPropertyValue('--line-index');
		tl
		.set(image, {
			opacity: 0,
			y: `${100+(c*30)}`,
		}, 'switchtime')
		.to(image, {
			opacity: 1,
			y: "0%",
			duration: 0.8,
			ease: "Power3.out",
		}, 1.5+(c*0.01))
		c+=1;
	})
}

if (window.location.href.includes("contact")){

	const mail = document.querySelectorAll(".contact_mail")
	const mailSplit = Splitting({ target: mail, by: 'lines' });
	let words = mailSplit[0]["words"]
	let len = mailSplit[0]["lines"].length;

	words.forEach(word => {
		let lineNum = getComputedStyle(word).getPropertyValue('--line-index');
		tl
		.set(word, {
			opacity: 0,
			y: `${(len+1)*50+(lineNum*50)}%`
		}, 'switchtime')
		.to(word, {
			duration: 1,
			opacity: 1,
			ease: 'power3.out',
			y: '0%',
		}, `<${1.5+lineNum*0.17})`)
	})

}

if (window.location.href.includes("work")){

	const workImages = document.querySelectorAll('.work_image');
	let countImages = 0;
	// animTitle.parentElement.style.overflow = "hidden";
	
	workImages.forEach(image => {
		tl
		.set(image, {
			opacity: 0,
			y: "30%",
		}, "switchtime")
		.to(image, {
			y: "0%",
			duration: 1,
			opacity: 1,
			ease: 'power3',
		}, 0.8+countImages+timing)
		countImages += 0.1;
	})
	
	const bordersWork = document.querySelectorAll(".border_work")
	const workGlobal = document.querySelector(".work_global")
	let countBorders = 0
	workGlobal.style.overflow = "hidden";
	
	bordersWork.forEach(border => {
		tl
		.set(border, {
			opacity: 0,
			y: '-100%'
		}, 'switchtime')
		.to(border, {
			duration: 0.6,
			opacity: 1,
			ease: 'Power2.inOut',
			y: '0%',
			stagger: 0.02,
		}, 0.2+countBorders+timing)
		countBorders += 0.2
	})
	
	// const bordersWorkTop = document.querySelector(".border_work-top")

	const arrows = document.querySelectorAll(".arrow_link")
	let countArrows = 0
	console.log(0.2+countArrows+timing);



	tl
	.set(arrows, {
		scale:(0.0),
		y: "100%",
		x: "-100%",
	}, "switchtime")
	.to(arrows, {
		duration: 0.4,
		ease: "Power4.inOut",
		scale: (1),
		y: "0",
		x: "0",
		stagger: 0.13,
	}, 1.2+timing)




	// arrows.forEach(arrow =>{
	// 	tl
	// 	.set(arrow, {
	// 		scale:(0.0),
	// 		y: "100%",
	// 		x: "-100%",
	// 	}, 'switchtime')
	// 	.to(arrow, {
	// 		duration: 0.2,
	// 		ease: "Power4.inOut",
	// 		scale: (1),
	// 		y: "0",
	// 		x: "0",
	// 	}, 1.2+countArrows+timing)
		// .to(arrow, {
		// 	duration: 0.2,
		// 	scale: (0.0),
		// 	y: "-100%",
		// 	x: "100%",
		// }, ">-40%")
		// .to(arrow, {
		// 	duration: 0,
		// 	scale: (0.0),
		// 	y: "100%",
		// 	x: "-100%",
		// }, ">-10%")
		// .to(arrow, {
		// 	duration: 0.2,
		// 	scale: (1),
		// 	y: "0%",
		// 	x: "0%",
		// }, ">-10%")
		// countArrows += 0.2
	// })


}

if (window.location.href.includes("projects")){
	let count = 0
	const projectInfos = document.querySelectorAll(".anim_text")

	projectInfos.forEach(text =>{
		text.style.overflow = "hidden";
		tl
		.set(text, {
			autoAlpha: 0,
			y: "100%"
		}, "switchtime")
		.to(text, {
			autoAlpha: 1,
			duration: 1,
			ease: 'power3.out',
			y: '0%',
			stagger: 1,
		// }, ">1")
		}, `${1.3+count*0.15}`)
		count+=1
	})
	const paragraphe = document.querySelector(".anim_paragraphe")
	let pSplit = Splitting({ target: paragraphe, by: 'lines'});
	let words = pSplit[0]["words"];
	let len = pSplit[0]["lines"].length;

	words.forEach(word => {
		let lineNum = getComputedStyle(word).getPropertyValue('--line-index');
		tl
		.set(word, {
			autoAlpha: 0,
			y: `${(len+1)*50+(lineNum*50)}%`
		}, "switchtime")
		.to(word, {
			duration: 1,
			autoAlpha: 1,
			ease: 'power3.out',
			y: '0%',
		}, `<${2.5+lineNum*0.17})`)
	})

	const aa = document.querySelector("#image-1")
	tl
	.set(aa, {
		autoAlpha: 0,
	}, "switchtime")
	.to(aa, {
		autoAlpha: 1,
		duration: 0.6,
	}, "1.2")

}
// words.forEach(word => {
// 	let lineNum = getComputedStyle(word).getPropertyValue('--line-index');
// 	tl
// 	.set(word, {
// 		opacity: 0,
// 		// y: `${}`%,
// 		y: `${(len+1)*50+(lineNum*50)}%`
// 	}, 'switchtime')
// 	.to(word, {
// 		duration: 1,
// 		opacity: 1,
// 		ease: 'power3.out',
// 		y: '0%',
// 	}, `<${1+lineNum*0.17})`)
// })