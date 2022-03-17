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

function placeHoriz(elem){
	console.log("hoverHoriz " + elem.classList[0]);
	elem.style.display = "flex"
	elem.style.transform = "translate(100%)"
}
function replaceHoriz(elem){
	console.log("leaveHoriz " + elem.classList[0]);
	elem.style.transform = "translate(200%)"
}
function initHoriz(elem){
	console.log("initHoriz " + elem.classList[0]);
	// elem.style.display = "none"
	elem.style.transform = "translate(0)"
}

function placeVert(elem){
	console.log("hoverVert " + elem.classList[0]);
	elem.style.display = "flex"
	elem.style.transform = "translateY(-100%)"
}
function replaceVert(elem){
	console.log("leaveVert " + elem.classList[0]);
	elem.style.transform = "translateY(-200%)"
}
function initVert(elem){
	console.log("initVert " + elem.classList[0]);
	elem.style.display = "none"
	elem.style.transform = "translateY(100%)"
}

function display(elem){
	elem.style.display = "flex"
}
function undisplay(elem){
	elem.style.display = "none"
}

manga.addEventListener("mouseleave", () =>{
	replaceHoriz(gameHover)
	setTimeout(undisplay, 180,gameHover)
	setTimeout(initHoriz, 200,gameHover)
	setTimeout(display, 300,gameHover)

	replaceHoriz(foodHover)
	setTimeout(undisplay, 180,foodHover)
	setTimeout(initHoriz, 200,foodHover)
	setTimeout(display, 300,foodHover)
})

food.addEventListener("mouseleave", () =>{
	replaceHoriz(gameHover)
	setTimeout(undisplay, 180,gameHover)
	setTimeout(initHoriz, 200,gameHover)
	setTimeout(display, 300,gameHover)

	replaceVert(mangaHover)
	setTimeout(undisplay, 180,mangaHover)
	setTimeout(initVert, 200,mangaHover)
	setTimeout(display, 300,mangaHover)
})

manga.addEventListener("mouseenter", () =>{
	setTimeout(placeHoriz, 300, gameHover)
	// placeHoriz(gameHover)
	setTimeout(placeHoriz, 300, foodHover)
	// placeHoriz(foodHover)
})


food.addEventListener("mouseenter", () =>{
	setTimeout(placeHoriz, 300, gameHover)
	// placeHoriz(gameHover)
	setTimeout(placeVert, 300, mangaHover)
	// placeVert(mangaHover)
})



// game.addEventListener("mouseleave", () =>{
// 	replaceHoriz(foodHover)
// 	setTimeout(display, 400, foodHover)
	
// 	replaceHoriz(gameHover)
// 	setTimeout(display, 400, gameHover)

// 	replaceVert(mangaHover)
// 	setTimeout(display, 400, mangaHover)
// })
// manga.addEventListener("mouseleave", () =>{
// 	console.log("manga leave");

// 	replaceHoriz(foodHover)
// 	setTimeout(display, 400, foodHover)
	
// 	replaceHoriz(gameHover)
// 	setTimeout(display, 400, gameHover)

// 	replaceVert(mangaHover)
// 	setTimeout(display, 400, mangaHover)
// })
// food.addEventListener("mouseleave", () =>{
// 	console.log("food leave");

// 	replaceHoriz(foodHover)
// 	initHoriz(foodHover)
// 	setTimeout(display, 400, foodHover)
	
// 	replaceHoriz(gameHover)
// 	setTimeout(display, 400, gameHover)
	
// 	replaceVert(mangaHover)
// 	setTimeout(display, 400, mangaHover)
// })


// game.addEventListener("mouseover", () =>{
// 	placeVert(mangaHover)
// 	placeHoriz(foodHover)
// 	console.log("game enter");
// })
// manga.addEventListener("mouseover", () =>{
// 	console.log("manga enter");

// 	// placeHoriz(gameHover)
// 	// placeHoriz(foodHover)
// 	setTimeout(placeHoriz, 10, gameHover)
// 	setTimeout(placeHoriz, 10, foodHover)
// })
// food.addEventListener("mouseover", () =>{
// 	console.log("food enter");

// 	setTimeout(placeHoriz, 10, gameHover)
// 	setTimeout(placeVert, 10, mangaHover)
// 	// placeHoriz(gameHover)
// 	// placeVert(mangaHover)
// })

  function goUp(elem) {
	return new Promise( (resolve) => { 
		console.log("promise go");
		elem.style.display = "flex"
		elem.style.transform = "translateY(-100%)"
		resolve(true)
	})
}

  function goDown(elem) {
	return new Promise( (resolve) => { 
		console.log("promise 2 go");
		elem.style.display = "flex"
		elem.style.transform = "translateY(0%)"
		resolve(true)
	})
}

// goUp(mangaHover)
	// .then((resolve) => console.log(resolve))
	// .then(goDown(mangaHover))
	// .then((resolve) => console.log(resolve)))
// goUp(mangaHover).then(goDown(mangaHover))