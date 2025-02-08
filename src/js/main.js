function RegistrationFrame() {
    const centerDiv = document.getElementById("about-b")
    centerDiv.style.backgroundColor = "#f5f5f5"
}

function setBackElement() {
    const currentHash = window.location.hash;

    const links = document.querySelectorAll(".section-li");
    links.forEach(link => link.classList.remove("active-gray"));

    switch (currentHash) {
        case "#about":
            document.getElementById("about-link").classList.add("active-gray");
            break;
        case "#info":
            document.getElementById("info-link").classList.add("active-gray");
            break;
        case "#news":
            document.getElementById("news-link").classList.add("active-gray");
            break;
        default:
            break;
    }
}

window.addEventListener("load", setBackElement);
window.addEventListener("hashchange", setBackElement);