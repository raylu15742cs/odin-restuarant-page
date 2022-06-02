export default function homediv() {
    var checkhome = document.getElementById('homediv')
    if(checkhome != null) {
        checkhome.parentNode.removeChild(checkhome)
    }
    let mainbody = document.getElementById("content");
    let maincontent = document.createElement("div");
    maincontent.setAttribute("id","homediv")
    maincontent.classList.add('home')
    maincontent.classList.add('maincontent')
    let mctitlediv = document.createElement('div')
    let mctitle = document.createElement('h1');
    mctitlediv.classList.add('inneritems')
    mctitle.innerText = "Beary's Breakfast Bar";
    mctitlediv.appendChild(mctitle)
    maincontent.appendChild(mctitlediv);

    let intro = document.createElement("div");
    intro.classList.add('inneritems')
    let introh = document.createElement('h2');
    introh.innerText ='Goldlocks'
    let introp = document.createElement("p")
    introp.innerText = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
    intro.appendChild(introh)
    intro.appendChild(introp)
    maincontent.appendChild(intro)

    let hours = document.createElement("div");
    hours.classList.add('inneritems')
    hours.classList.add('hoursection')
    let hoursh = document.createElement('h2');
    hoursh.innerText ='Hours'
    let hoursp = document.createElement("p")
    hoursp.innerHTML = "Sunday: 8am - 8pm <br> Monday: 6am - 6pm <br> Tuesday: 6am - 6pm <br> Wednesday: 6am - 6pm <br> Thursday: 6am - 6pm <br> Friday: 6am - 10pm <br> Friday: 6am - 10pm <br> Saturday: 8am - 10pm"
    hours.appendChild(hoursh)
    hours.appendChild(hoursp)
    maincontent.appendChild(hours)

    let location = document.createElement("div");
    location.classList.add('inneritems')
    let locationh = document.createElement('h2');
    locationh.innerText ='Location'
    let locationp = document.createElement("p")
    locationp.innerHTML = "123 Forest Drive, Forestville, Maine"
    location.appendChild(locationh)
    location.appendChild(locationp)
    maincontent.appendChild(location)


    mainbody.appendChild(maincontent);
    
    let menuorange = document.getElementById("menu")
    let homeorange = document.getElementById("home")
    let contactorange = document.getElementById("contact")
    menuorange.classList.remove("orangetime")
    homeorange.classList.add("orangetime")
    contactorange.classList.remove("orangetime")
}

