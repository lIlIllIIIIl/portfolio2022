const fullPage = document.querySelector(".mainPage")

const about = document.querySelector(".aboutContainer")
const images = about.querySelectorAll(".aboutImage")

const aboutOpen = document.querySelector(".aboutContainer-open")
const titleOpen = aboutOpen.querySelector(".aboutTitle-open")
const imageOpen = aboutOpen.querySelector(".aboutImage-open")
const textOpen = aboutOpen.querySelector(".aboutText-open")

const aboutOthers = aboutOpen.querySelectorAll(".aboutOther")

aboutOpen.addEventListener("click", function(e){
	aboutOpen.style.display="none"
	about.style.display="flex"
	aboutOthers.forEach(el =>{
		el.classList.toggle("chosenOne", false)
	})
})

images.forEach(elem =>{
	elem.addEventListener("click", function(e){
		let imageAff = document.querySelectorAll(`.${elem.classList[1]}`)
		console.log(imageAff[1]);
		imageAff[1].classList.toggle("chosenOne")
		about.style.display="none"
			aboutOpen.style.display="flex"
			titleOpen.innerHTML = elem.alt
			let src = elem.src.replace("small", "large")
			imageOpen.src = src
			textOpen.innerHTML = elem.ariaValueMax
	})
})
