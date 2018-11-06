function initialiseView() {

    var toggle = document.getElementById("toggleView");
    var body = document.body;
    var main = document.querySelector("main");
    var ul = document.getElementsByTagName("UL")[0];
    const add = document.querySelector("header .add");
    const liTemplate = document.querySelector("main ul template");


    xhr("GET", "data/listitems.json", null, (xhrobj) => {
        //alert("request successfully finished: " + xhrobj.status + "content: " + xhrobj.responseText);
        var listitems = JSON.parse(xhrobj.responseText);
        console.log("got objects: ", listitems);

        listitems.forEach(obj => {
            addNewLi(obj);
        })
    });

    // === Toggle Views and Transitions ===

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

    function lookUpLi(el) {
        if (el.tagName === "LI") {
            console.log("LI");
            return el;
        } else if (el.className === ".option") {
            console.log("option");
            return el;
        } else if (el.tagName === "UL") {
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
        //if (confirm("do you want to delete this element?")) {
        //    selectedLI.parentNode.removeChild(selectedLI);
        //}
    };

    function getListitemName(li) {
        return li.querySelector("h2").textContent;
    }


    // === Listenelement hinzufuegen ===

    add.onclick = () => {
        var obj = {name: "direm", src: "content/300_100.jpeg"};

        addNewLi(obj);
    };

    function addNewLi(obj) {
        const liwrapper = document.importNode(liTemplate.content, true); // true = deep import -> alle ChhildNodes

        const newLi = liwrapper.querySelector("li");
        newLi.querySelector(".picture").src = obj.src;
        newLi.querySelector(".title").textContent = obj.name;

        ul.appendChild(newLi);
    }

    // Listenelement entfernen

}