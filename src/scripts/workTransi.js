const { gsap } = require("gsap/dist/gsap");
const { TweenLite } = require("gsap/gsap-core");
// const { ScrollTrigger } = require("gsap/dist/ScrollTrigger");
    
// gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const images = gsap.utils.toArray(".about_link");
images.forEach(image => {
    image.addEventListener("mouseenter", function(e){
        // this.children[0].style.opacity="1"
        this.addEventListener("mouseleave", function(e){
            // this.children[0].style.opacity="0"
        })
    })
})


// const imgs = document.querySelectorAll(".about_image")
// let duration = .8
// let isAnim = false

// imgs.forEach(image => {
//     image.addEventListener("click", function(e){
//         if(!isAnim){
//             switchPages(e.currentTarget.dataset.out,
//                 e.currentTarget.dataset.in)
//     }    })
// })
   