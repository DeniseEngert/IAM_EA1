function initialiseView() {

    var toggle = document.getElementById("toggleView");
    var body = document.body;
    //var refresh = document.querySelector(".refresh");
    var main = document.querySelector("main");

    // Toggle Views and Transitions

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
}