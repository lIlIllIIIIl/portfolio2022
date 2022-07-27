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

const music = pageAbout.querySelector(".div_music")
const musicImage = music.querySelector(".image_music")
const musicHover = music.querySelector(".music_hover")

const musicColNum = Math.round(musicImage.clientWidth/7);

const snow = pageAbout.querySelector(".div_snow")
const snowImage = snow.querySelector(".image_snow")
const snowHover = snow.querySelector(".snow_hover")

const snowColNum = Math.round(snowImage.clientWidth/7);

const japan = pageAbout.querySelector(".div_japan")
const japanImage = japan.querySelector(".image_japan")
const japanHover = japan.querySelector(".japan_hover")

const japanRowNum = Math.round(japanImage.clientWidth/14);

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

	for (i = 0 ; i < musicColNum ; i++){
		let newSpan = document.createElement("span")
		newSpan.classList.add("music_column")
		musicHover.appendChild(newSpan);
	}

	for (i = 0 ; i < snowColNum ; i++){
		let newSpan = document.createElement("span")
		newSpan.classList.add("snow_column")
		snowHover.appendChild(newSpan);

	}
	for (i = 0 ; i < japanRowNum ; i++){
		let newSpan = document.createElement("span")
		newSpan.classList.add("japan_row")
		japanHover.appendChild(newSpan);
	}
}
createHoverLines()

function noDuration(elem){ elem.style.transitionDuration = "0s" }
function doDuration(elem){ elem.style.transitionDuration = "0.3s" }

function display(elem){ elem.style.display = "flex" }
function undisplay(elem){ elem.style.display = "none" }

function hoverHoriz(elem){
	elem.style.transform = "translateX(100%)"
}
function hoverVert(elem, w){
	elem.style.transform = `translateY(${w}100%)`
}

function fullAnimHoriz(elem){
	elem.style.display = "flex"
	elem.style.transform = "translateX(200%)"
	setTimeout(noDuration, 1, elem)
	setTimeout(undisplay, 280, elem)
	setTimeout(initHoriz, 300, elem)
	setTimeout(doDuration, 310, elem)
	setTimeout(display, 310, elem)
}
function fullAnimVert(elem, w){
	elem.style.display = "flex"
	elem.style.transform = `translateY(${w}200%)`
	setTimeout(noDuration, 1, elem)
	setTimeout(undisplay, 280, elem)
	setTimeout(initVert, 300, elem)
	setTimeout(doDuration, 310, elem)
	setTimeout(display, 310, elem)
}

function initHoriz(elem){
	elem.style.transform = "translate(0)"
}
function initVert(elem){
	elem.style.transform = "translateY(0)"
}

manga.addEventListener("mouseenter", () =>{
	setTimeout(hoverHoriz, 350, foodHover)
	setTimeout(hoverHoriz, 350, gameHover)
	setTimeout(hoverHoriz, 350, japanHover)
	setTimeout(hoverVert, 350, musicHover, "-")
	setTimeout(hoverVert, 350, snowHover, "+")
})

manga.addEventListener("mouseleave", () =>{
	fullAnimHoriz(gameHover)
	fullAnimHoriz(foodHover)
	fullAnimHoriz(japanHover)
	fullAnimVert(mangaHover, "-")
	fullAnimVert(musicHover, "-")
	fullAnimVert(snowHover, "+")
})

music.addEventListener("mouseenter", () =>{
	setTimeout(hoverHoriz, 350, foodHover)
	setTimeout(hoverHoriz, 350, gameHover)
	setTimeout(hoverHoriz, 350, japanHover)
	setTimeout(hoverVert, 350, mangaHover, "-")
	setTimeout(hoverVert, 350, snowHover, "+")
})

music.addEventListener("mouseleave", () =>{
	fullAnimHoriz(gameHover)
	fullAnimHoriz(foodHover)
	fullAnimHoriz(japanHover)
	fullAnimVert(mangaHover, "-")
	fullAnimVert(musicHover, "-")
	fullAnimVert(snowHover, "+")
})

snow.addEventListener("mouseenter", () =>{
	setTimeout(hoverHoriz, 350, foodHover)
	setTimeout(hoverHoriz, 350, gameHover)
	setTimeout(hoverHoriz, 350, japanHover)
	setTimeout(hoverVert, 350, mangaHover, "-")
	setTimeout(hoverVert, 350, musicHover, "-")
})

snow.addEventListener("mouseleave", () =>{
	fullAnimHoriz(gameHover)
	fullAnimHoriz(foodHover)
	fullAnimHoriz(japanHover)
	fullAnimVert(mangaHover, "-")
	fullAnimVert(musicHover, "-")
	fullAnimVert(snowHover, "+")
})

food.addEventListener("mouseenter", () =>{
	setTimeout(hoverHoriz, 350, gameHover)
	setTimeout(hoverHoriz, 350, japanHover)
	setTimeout(hoverVert, 350, mangaHover, "-")
	setTimeout(hoverVert, 350, musicHover, "-")
	setTimeout(hoverVert, 350, snowHover, "+")
})

food.addEventListener("mouseleave", () =>{
	fullAnimHoriz(foodHover)
	fullAnimHoriz(gameHover)
	fullAnimHoriz(japanHover)
	fullAnimVert(mangaHover, "-")
	fullAnimVert(musicHover, "-")
	fullAnimVert(snowHover, "+")
})

game.addEventListener("mouseenter", () =>{
	setTimeout(hoverHoriz, 350, foodHover)
	setTimeout(hoverHoriz, 350, japanHover)
	setTimeout(hoverVert, 350, mangaHover, "-")
	setTimeout(hoverVert, 350, musicHover, "-")
	setTimeout(hoverVert, 350, snowHover, "+")
})

game.addEventListener("mouseleave", () =>{
	fullAnimHoriz(foodHover)
	fullAnimHoriz(gameHover)
	fullAnimHoriz(japanHover)
	fullAnimVert(mangaHover, "-")
	fullAnimVert(musicHover, "-")
	fullAnimVert(snowHover, "+")
})

japan.addEventListener("mouseenter", () =>{
	setTimeout(hoverHoriz, 350, foodHover)
	setTimeout(hoverHoriz, 350, gameHover)
	setTimeout(hoverVert, 350, mangaHover, "-")
	setTimeout(hoverVert, 350, musicHover, "-")
	setTimeout(hoverVert, 350, snowHover, "+")
})

japan.addEventListener("mouseleave", () =>{
	fullAnimHoriz(foodHover)
	fullAnimHoriz(gameHover)
	fullAnimHoriz(gameHover)
	fullAnimVert(mangaHover, "-")
	fullAnimVert(musicHover, "-")
	fullAnimVert(snowHover, "+")
})