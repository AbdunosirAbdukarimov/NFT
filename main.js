"use script"

let bars = document.querySelector(".fa-bars-staggered")
let bars_modal = document.querySelector(".bars_modal")

bars.onclick = () =>{
    bars_modal.classList.toggle("active")
}