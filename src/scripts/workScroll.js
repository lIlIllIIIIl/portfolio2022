// import "../../node_modules/locomotive-scroll/dist/locomotive-scroll.js";

import LocomotiveScroll from 'locomotive-scroll';

const l = document.querySelector(".work_project-blank")

const workScroll = new LocomotiveScroll({
    el: document.querySelector(".work_global"),
    smooth: true,
    lerp: "0.05",
    direction: "horizontal",
    gestureDirection: "both",
    scrollFromAnywhere: "true",
    reloadOnContextChange: "true",
    smartphone: {
		gestureDirection: "both",
    },
    tablet: {
        gestureDirection: "both",
    }
})

