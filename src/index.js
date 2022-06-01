let mainbody = document.getElementById("content");

function newdiv() {
    const newdiv = document.createElement('div');
    newdiv.innerHTML = "home"

    return newdiv
}

mainbody.appendChild(newdiv());