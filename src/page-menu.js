export default function menudiv() {
    let menuorange = document.getElementById("menu")
    let homeorange = document.getElementById("home")
    let contactorange = document.getElementById("contact")
    menuorange.classList.add("orangetime")
    homeorange.classList.remove("orangetime")
    contactorange.classList.remove("orangetime")
    var checkhome = document.getElementById('homediv')
    if(checkhome != null) {
        checkhome.parentNode.removeChild(checkhome)
    }
    let mainbody = document.getElementById("content");
    let maincontent = document.createElement("div");
    maincontent.setAttribute("id","homediv")
    maincontent.classList.add('menu')
    maincontent.classList.add('maincontent')
    let mctitlediv = document.createElement('div')
    let mctitle = document.createElement('h1');
    mctitlediv.classList.add('inneritems')
    mctitle.innerText = "Menu";
    mctitlediv.appendChild(mctitle)
    maincontent.appendChild(mctitlediv);

    let intro = document.createElement("div");
    intro.classList.add('inneritems')
    let introh = document.createElement('h2');
    introh.innerText ='Beverages'
    let introp = document.createElement("p")
    introp.innerHTML = "Honey Tea : $2 <br> Beary Tea: $2"
    intro.appendChild(introh)
    intro.appendChild(introp)
    maincontent.appendChild(intro)

    let hours = document.createElement("div");
    hours.classList.add('inneritems')
    let hoursh = document.createElement('h2');
    hoursh.innerText ='Sides'
    let hoursp = document.createElement("p")
    hoursp.innerHTML = "Toast and Jam: $1 <br> Fresh Fruit: $3"
    hours.appendChild(hoursh)
    hours.appendChild(hoursp)
    maincontent.appendChild(hours)

    let location = document.createElement("div");
    location.classList.add('inneritems')
    let locationh = document.createElement('h2');
    locationh.innerText ='Main Dishes'
    let locationp = document.createElement("p")
    locationp.innerHTML = "Pancakes: $4 <br> French Toast: $5 <br> Beary Veggie Sandwich: $8 <br> BLT: $6 <br> Bagel and Lox: $8"
    location.appendChild(locationh)
    location.appendChild(locationp)
    maincontent.appendChild(location)


    mainbody.appendChild(maincontent);
}