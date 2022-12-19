// import "../../node_modules/locomotive-scroll/dist/locomotive-scroll.js";

import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projectScroll = new LocomotiveScroll({
    el: document.querySelector(".project_images"),
    smooth: true,
    lerp: "0.05",
    direction: "horizontal",
    gestureDirection: "both",
    scrollFromAnywhere: "true",
    reloadOnContextChange: "true",
    multiplier: 0.8,
    smartphone: {
		direction: "vertical",
    }
})