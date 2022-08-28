import { gsap } from "gsap";
// import { gsap } from "../../node_modules/gsap/index.js";
// import { gsap } from "https://cdn.skypack.dev/gsap";

const percent = document.querySelector(".loader-percent")
let count = document.querySelectorAll(".theCount");


window.addEventListener("load", loader);

function loader(){
     const tlload = gsap.timeline({
        onUpdate: changeIt,
     });

     tlload
     .to(".loader-name", {
         top: "5%",
        duration: 1,
        ease: "power2.out",
        opacity: "100%",
    })
     .to(".loader-percent", {
         top: "5%",
        duration: 1,
        ease: "power2.out",
        opacity: "100%",
    }, "-=0.6")
     .to(".loader-image-f-1", {
        top: "0%",
        opacity: "100%",
        duration: 1.2,
        ease: "power2.out"
    }, "-=0.3")
     .to(".loader-image-a-2", {
        opacity: "100%",
        duration: 1.2,
        ease: "power2.out"
    })
     .to(".loader-image-a-3", {
        opacity: "100%",
        duration: 1.2,
        ease: "power2.out"
    })
     .to(".loader-image-a-4", {
        opacity: "100%",
        duration: 1.2,
        ease: "power2.out"
    })
    .to(".load_container", {
        display: "none",
    })
}

function changeIt() {
    let newPercent = (this.progress() * 99).toFixed();
    count.forEach((obj, i) => {
      obj.textContent = newPercent;
    });
  }

loader()