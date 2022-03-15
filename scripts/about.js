const pageAbout = document.querySelector(".aboutPage")

const game = pageAbout.querySelector(".div_game")
const gameImage = game.querySelector(".image_game")
const gameHover = game.querySelector(".game_hover")

const gameRowNum = Math.round(gameImage.clientHeight/14)-1;


const manga = pageAbout.querySelector(".div_manga")
const mangaImage = manga.querySelector(".image_manga")
const mangaHover = manga.querySelector(".manga_hover")

const mangaColNum = Math.round(mangaImage.clientWidth/7);

const food = pageAbout.querySelector(".div_food")
const foodImage = food.querySelector(".image_food")
const foodHover = food.querySelector(".food_hover")

const foodRowNum = Math.round(foodImage.clientHeight/14)-1;



function createHoverLines (){
	for (i = 0 ; i < gameRowNum ; i++){
		let newSpan = document.createElement("span")
		newSpan.classList.add("game_row")
		gameHover.appendChild(newSpan);

	}

	for (i = 0 ; i < mangaColNum ; i++){
		let newSpan = document.createElement("span")
		newSpan.classList.add("manga_column")
		mangaHover.appendChild(newSpan);
	}

	for (i = 0 ; i < foodRowNum ; i++){
		let newSpan = document.createElement("span")
		newSpan.classList.add("food_row")
		foodHover.appendChild(newSpan);
	}
}

createHoverLines()

let gameRows = game.querySelectorAll(".game_row")
let mangaColumns = manga.querySelectorAll(".manga_column")
let foodRows = food.querySelectorAll(".food_row")

function replaceHoriz(elem){
	elem.style.display = "none"
	elem.style.transform = "translate(-100%)"
}
function replaceVert(elem){
	elem.style.display = "none"
	elem.style.transform = "translateY(100%)"
}
function display(elem){
	elem.style.display = "inline"
}
	// NE PAS DEPLACER LES LIGNES UNE PAR UNE MAIS TTE LA DIV
game.addEventListener("mouseenter", () =>{
	for (let row of gameRows){
		// row.style.display = "inline"
		// row.style.transform = "translate(100%)"
	}
})
game.addEventListener("mouseleave", () =>{
	for (let row of gameRows){
		row.style.transform = "translate(200%)"
		setTimeout(replaceHoriz, 300, row)
		setTimeout(display, 400, row)
	}
})

manga.addEventListener("mouseenter", () =>{
	for (let column of mangaColumns){
		// column.style.display = "inline"
		// column.style.transform = "translateY(-100%)"
	}
})
manga.addEventListener("mouseleave", () =>{
	for (let column of mangaColumns){
		column.style.transform = "translateY(-200%)"
		setTimeout(replaceVert, 300, column)
		setTimeout(display, 400, column)
	}
})

food.addEventListener("mouseenter", () =>{
	for (let row of foodRows){
		// row.style.display = "inline"
		// row.style.transform = "translate(100%)"
	}
})
food.addEventListener("mouseleave", () =>{
	for (let row of foodRows){
		row.style.transform = "translate(200%)"
		setTimeout(replaceHoriz, 300, row)
		setTimeout(display, 400, row)
	}
})
