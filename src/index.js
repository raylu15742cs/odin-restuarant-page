import './style.css';

import homediv from "./page-home.js";
import contactdiv from "./page-contact.js";
import menudiv from "./page-menu.js"

function headerdiv() {
    let mainbody = document.getElementById("content");
    let newbutton = document.createElement("div");
    let header = document.createElement("div")
    header.classList.add('header')
    let hometab = document.createElement('button');
    hometab.setAttribute("id", "home")
    hometab.innerText = "Home";
    hometab.onclick = homediv;
    header.appendChild(hometab);
    let menutab = document.createElement('button')
    menutab.innerText = "Menu"
    menutab.setAttribute("id", "menu")
    menutab.onclick = menudiv;
    header.appendChild(menutab)
    let contacttab = document.createElement('button')
    contacttab.innerText = "Contact"
    contacttab.setAttribute("id", "contact")
    contacttab.onclick = contactdiv;
    header.appendChild(contacttab)
    newbutton.appendChild(header)
    mainbody.appendChild(newbutton);
}

headerdiv();
homediv();