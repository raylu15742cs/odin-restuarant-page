export default function menudiv() {
    let menuorange = document.getElementById("menu")
    let homeorange = document.getElementById("home")
    let contactorange = document.getElementById("contact")
    menuorange.classList.add("orangetime")
    homeorange.classList.remove("orangetime")
    contactorange.classList.remove("orangetime")
}