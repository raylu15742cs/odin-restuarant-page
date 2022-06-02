export default function contactdiv() {
    let menuorange = document.getElementById("menu")
    let homeorange = document.getElementById("home")
    let contactorange = document.getElementById("contact")
    menuorange.classList.remove("orangetime")
    homeorange.classList.remove("orangetime")
    contactorange.classList.add("orangetime")
}