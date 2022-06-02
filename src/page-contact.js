export default function contactdiv() {
    let menuorange = document.getElementById("menu")
    let homeorange = document.getElementById("home")
    let contactorange = document.getElementById("contact")
    menuorange.classList.remove("orangetime")
    homeorange.classList.remove("orangetime")
    contactorange.classList.add("orangetime")
    var checkhome = document.getElementById('homediv')
    if(checkhome != null) {
        checkhome.parentNode.removeChild(checkhome)
    }
    let mainbody = document.getElementById("content");
    let maincontent = document.createElement("div");
    maincontent.setAttribute("id","homediv")
    maincontent.classList.add('contact')
    maincontent.classList.add('maincontent')
    let mctitlediv = document.createElement('div')
    let mctitle = document.createElement('h1');
    mctitlediv.classList.add('inneritems')
    mctitle.innerText = "Contact Us";
    mctitlediv.appendChild(mctitle)
    maincontent.appendChild(mctitlediv);

    let intro = document.createElement("div");
    intro.classList.add('inneritems')
    intro.classList.add('hoursection')
    let introh = document.createElement('h2');
    introh.innerText ='Mama Bear'
    let introp = document.createElement("p")
    introp.innerHTML = "Chef <br> 555-555-5555 <br> totallyRealEmail@notFake.com"
    intro.appendChild(introh)
    intro.appendChild(introp)
    maincontent.appendChild(intro)

    let hours = document.createElement("div");
    hours.classList.add('inneritems')
    hours.classList.add('hoursection')
    let hoursh = document.createElement('h2');
    hoursh.innerText ='Papa Bear'
    let hoursp = document.createElement("p")
    hoursp.innerHTML = "Chef <br> 555-555-5555 <br> totallyRealEmail@notFake.com"
    hours.appendChild(hoursh)
    hours.appendChild(hoursp)
    maincontent.appendChild(hours)

    let location = document.createElement("div");
    location.classList.add('inneritems')
    location.classList.add('hoursection')
    let locationh = document.createElement('h2');
    locationh.innerText ='Baby Bear'
    let locationp = document.createElement("p")
    locationp.innerHTML = "Chef <br> 555-555-5555 <br> totallyRealEmail@notFake.com"
    location.appendChild(locationh)
    location.appendChild(locationp)
    maincontent.appendChild(location)


    mainbody.appendChild(maincontent);
}