import "../../node_modules/locomotive-scroll/dist/locomotive-scroll.js";


const hScroll = new LocomotiveScroll({
    el: document.querySelector(".project_global"),
    smooth: true,
    lerp: "0.05",
    direction: "horizontal",
    gestureDirection: "both",
})
