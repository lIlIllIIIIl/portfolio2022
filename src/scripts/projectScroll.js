// import "../../node_modules/locomotive-scroll/dist/locomotive-scroll.js";

import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const projectScroll = new LocomotiveScroll({
    el: document.querySelector(".project_images"),
    smooth: true,
    lerp: "0.05",
    direction: "horizontal",
    gestureDirection: "both",
    reloadOnContextChange: "true",
    smartphone: {
		direction: "vertical",
    }
})