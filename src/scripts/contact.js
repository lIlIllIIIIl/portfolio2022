// const mail = document.querySelector(".mail")

// mail.addEventListener("mouseenter", () => {
//     console.log("inMail");
//     mail.addEventListener("mouseleave", () =>{
//         console.log("outMail");
//     })
// })


const click = document.querySelector('.click')
const mail = document.querySelector(".contact_mail")
const mailText = document.querySelector(".mail")

let pointerPos = { x: 0, y: 0 }
let pointerOffset = { x: 0, y: 0 }

function syncpointer(elem = click) {
  const transform = `translate(${pointerPos.x + pointerOffset.x}px, ${pointerPos.y + pointerOffset.y}px)`
	elem.style.transform = transform
}

document.addEventListener('mousemove', e => {
	pointerPos.x = e.clientX-5
	pointerPos.y = e.clientY-30
	syncpointer(click)
})

mail.addEventListener("mouseover", e =>{
    click.classList.remove("not")
    mail.addEventListener("click", e => {
        navigator.clipboard.writeText(mailText.textContent)
            .then(() => {
            console.log("Mail copied to clipboard.")
        })
            .catch(err => {
            console.log('Something went wrong.', err);
        })
    })
})

mail.addEventListener("mouseout", e =>{
    click.classList.add("not")
})


document.querySelectorAll('.mail').forEach((e) => {
    let at = new RegExp('at', 'g');
    e.textContent = e.textContent.replace(at, '@');
});