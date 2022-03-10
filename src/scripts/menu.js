const page = document.querySelector("body");

const menu = page.querySelector(".menu")
const menu_click = menu.querySelector(".menu_title")
const menu_square = menu.querySelector(".menu_square")

menu_click.addEventListener("click", (e)=>{
	if (menu.classList[1] === "menu_close"){
		menu.classList.replace("menu_close", "menu_open")
		menu_square.style.transform="rotate(90deg)"

		// console.log(menu.classList);
	}else if(menu.classList[1] === "menu_open"){
		menu.classList.replace("menu_open", "menu_close")
		menu_square.style.transform="rotate(0)"
	}
})