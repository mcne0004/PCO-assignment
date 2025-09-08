async function loadNavMenu() {
    const file = await fetch(window.location.origin + "/generic/html/nav-menu.html")
    const text = await file.text()

    document.getElementById("nav-menu").innerHTML = text
}

loadNavMenu()