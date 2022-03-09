const page = document.querySelector("body");

const menu = page.querySelector(".menu")
const menu_click = menu.querySelector(".menu_title h5")

menu_click.addEventListener("click", (e)=>{
	if (menu.classList[1] === "menu_close"){
		menu.classList.replace("menu_close", "menu_open")
		// console.log(menu.classList);
	}else if(menu.classList[1] === "menu_open"){
		menu.classList.replace("menu_open", "menu_close")
	}
})