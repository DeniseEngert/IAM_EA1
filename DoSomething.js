function initialiseView() {

    // === Toggle Views and Transitions ===

    var toggle = document.getElementById("toggleView");
    var body = document.body;
    var main = document.querySelector("main");

    toggle.onclick = () => {
        main.classList.toggle("faded");
        main.addEventListener("transitionend", onTransitionEnd);
    };

    function onTransitionEnd() {
        main.classList.toggle("faded");
        main.removeEventListener("transitionend", onTransitionEnd);

        if (body.classList.contains("tiles")) {
            body.classList.remove("tiles");
        } else {
            body.classList.add("tiles");
        }

    }

    // === Auswahl Listenelement ===

    var ul = document.getElementsByTagName("UL")[0];

    function lookUpLi(el){
        if (el.tagName === "LI"){
            console.log("LI");
            return el;
        } else if (el.className === "option") {
            console.log("option");
            return el;
        } else if (el.tagName === "UL"){
            console.error("lookUpLi(): reached list root");
            return null;
        } else if (el.parentNode) {
            return lookUpLi(el.parentNode);
        } else {
            console.error("lookUpLi(): something went wrong, get: ", el);
            return null;
        }
    }

    ul.onclick = (evt) => {
        var selectedLI = lookUpLi(evt.target);
        alert("selected: " + getListitemName(selectedLI));
        //;
    };

    function getListitemName(li) {
        return li.querySelector("h2").textContent;
    }

    // === Listenelement hinzufuegen ===

    const add = document.querySelector("header .add");
    add.onclick = () => {
        addNewLi({title: "Title", src: "img/300_100.jpeg"})
    };

    function addNewLi(obj) {
        alert("addNewLi(): " + JSON.stringify(obj));
    }
}