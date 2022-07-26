const about = document.querySelector(".aboutContainer")
const images = about.querySelectorAll(".aboutImage")

const aboutOpen = document.querySelector(".aboutContainer-open")
const titleOpen = aboutOpen.querySelector(".aboutTitle-open")
const imageOpen = aboutOpen.querySelector(".aboutImage-open")
const textOpen = aboutOpen.querySelector(".aboutText-open")

let isOpen = 0

document.addEventListener("click", function(e){
	if (isOpen === 1){
		isOpen = 0
		aboutOpen.style.display="none"
		about.style.display="flex"
	}
})

images.forEach(elem =>{
	elem.addEventListener("click", function(e){
		if (isOpen === 0){
			console.log('in');
			about.style.display="none"
			aboutOpen.style.display="block"
			titleOpen.innerHTML = elem.alt
			imageOpen.src = elem.src
			textOpen.innerHTML = elem.ariaValueMax
			isOpen = 1
		}
	})
})