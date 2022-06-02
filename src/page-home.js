export default function homediv() {
    let mainbody = document.getElementById("content");
    let newbutton = document.createElement("div");
    let header = document.createElement("div")
    header.classList.add('header')
    let hometab = document.createElement('button')
    hometab.innerText = "Home";
    header.appendChild(hometab)
    let contacttab = document.createElement('button')
    contacttab.innerText = "Contact"
    header.appendChild(contacttab)
    let abouttab = document.createElement('button')
    abouttab.innerText = "About"
    header.appendChild(abouttab)
    newbutton.appendChild(header)
    mainbody.appendChild(newbutton);
}

