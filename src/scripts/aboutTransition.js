const row2 = pageAbout.querySelector(".about_row-2")
const lines = pageAbout.querySelectorAll(".design_lines");

const aboutGames = pageAbout.querySelector(".about_games")


gameImage.addEventListener("click", () =>{
	gameImage.style.border = "unset"
	aboutGames.style.display = "block"

	manga.classList.add("not_about")
	food.classList.add("not_about")

	let toDelete = pageAbout.querySelectorAll(".not_about")
	
	for (const elem of toDelete){
		elem.style.opacity = "0"
	}
	row2.style.opacity = "0"
	for (const elem of lines){
		elem.style.opacity = "0"
	}
})