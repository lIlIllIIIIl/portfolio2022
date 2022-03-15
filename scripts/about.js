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
let foodRows = manga.querySelectorAll(".food_row")

gameHover.addEventListener("mouseenter", () =>{
    for (let row of gameRows){
        row.style.display = "inline"
    }
})
gameHover.addEventListener("mouseleave", () =>{
    for (let row of gameRows){
        row.style.display = "none"
    }
})

mangaHover.addEventListener("mouseenter", () =>{
    for (let column of mangaColumns){
        column.style.display = "inline"
    }
})
mangaHover.addEventListener("mouseleave", () =>{
    for (let column of mangaColumns){
        column.style.display = "none"
    }
})

foodHover.addEventListener("mouseenter", () =>{
    for (let row of foodRows){
        row.style.display = "inline"
    }
})
foodHover.addEventListener("mouseleave", () =>{
    for (let row of foodRows){
        row.style.display = "none"
    }
})
