const fullPage = document.querySelector(".mainPage")

const about = document.querySelector(".aboutContainer")
const images = about.querySelectorAll(".aboutImage")

const aboutOpen = document.querySelector(".aboutContainer-open")
const titleOpen = aboutOpen.querySelector(".aboutTitle-open")
const imageOpen = aboutOpen.querySelector(".aboutImage-open")
const textOpen = aboutOpen.querySelector(".aboutText-open")


aboutOpen.addEventListener("click", function(e){
	console.log("out");
	aboutOpen.style.display="none"
	about.style.display="flex"
})

images.forEach(elem =>{
	elem.addEventListener("click", function(e){
			console.log('in');
			about.style.display="none"
			aboutOpen.style.display="flex"
			titleOpen.innerHTML = elem.alt
			let src = elem.src.replace("small", "large")
			console.log(src);
			imageOpen.src = src
			textOpen.innerHTML = elem.ariaValueMax
	})
})
