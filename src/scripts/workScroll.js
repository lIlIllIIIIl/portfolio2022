import LocomotiveScroll from '../../node_modules/locomotive-scroll/dist/locomotive-scroll';

const scroll = new LocomotiveScroll();














// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// let panelsSection = document.querySelector(".work_global"),
// 	panelsContainer = document.querySelector("#works"),
// 	tween;
// document.querySelectorAll(".anchor").forEach(anchor => {
// 	anchor.addEventListener("click", function(e) {
// 		e.preventDefault();
// 		let targetElem = document.querySelector(e.target.getAttribute("href")),
// 			y = targetElem;
// 		if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
// 			let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
// 				totalMovement = (panels.length - 1) * targetElem.offsetWidth;
// 			y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
// 		}
// 		gsap.to(window, {
// 			scrollTo: {
// 				y: y,
// 				autoKill: true
// 			},
// 			duration: 1
// 		});
// 	});
// });

// /* Panels */
// const panels = gsap.utils.toArray("#works .work_project");
// tween = gsap.to(panels, {
// 	xPercent: -100 * ( panels.length - 1 ),
// 	ease: "none",
// 	scrollTrigger: {
// 		// trigger: "#works",
// 		trigger: ".container",
// 		pin: true,
// 		start: "center center",
//         // markers: true,
// 		scrub: 1,
// 		// snap: {
// 		// 	snapTo: 1 / (panels.length - 1),
// 		// 	inertia: false,
// 		// 	duration: {min: 0.1, max: 0.1}
// 		// },
// 		end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
// 	}
// });







// // let sections = gsap.utils.toArray(".work_project");
// // console.log(sections);
// // gsap.to(sections, {
// //   xPercent: -100 * (sections.length - 1),
// //   ease: "none",
// //   scrollTrigger: {
// //     trigger: ".container",
// //     pin: true,
// //     scrub: 1,
// //     snap: 1 / (sections.length - 1),
// //     // base vertical scrolling on how wide the container is so it feels more natural.
// //     end: "+=3500",
// //   }
// // });

