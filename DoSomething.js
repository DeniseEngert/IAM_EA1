function initialiseView() {

    var toggle = document.getElementById("toggleView");
    var body = document.body;
    var refresh = document.querySelector(".refresh");
    var main = document.querySelector("main");

    toggle.onclick = () => {
        if (body.classList.contains("tiles")) {
            body.classList.remove("tiles");
        } else {
            body.classList.add("tiles");
        }

    };

    refresh.onclick = () => {
        main.classList.toggle("faded");
    }
}