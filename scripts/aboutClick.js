const about = document.querySelector(".aboutContainer")
const images = about.querySelectorAll(".aboutImage")

const aboutOpen = document.querySelector(".aboutContainer-open")
const titleOpen = aboutOpen.querySelector(".aboutTitle-open")
const imageOpen = aboutOpen.querySelector(".aboutImage-open")
const textOpen = aboutOpen.querySelector(".aboutText-open")
images.forEach(elem =>{
	elem.addEventListener("click", function(e){
		about.style.display="none"
		aboutOpen.style.display="block"
		titleOpen.innerHTML = elem.alt
		imageOpen.src = elem.src
		textOpen.innerHTML = elem.ariaValueMax
	})
})