async function loadNavMenu() {
    const file = await fetch("/generic/html/nav-menu.html")
    const text = await file.text()

    document.getElementById("nav-menu").innerHTML = text
    let findcurrent = document.evaluate("//a[contains(., '" + document.title + "')]", document, null, XPathResult.ANY_TYPE, null)
    findcurrent.iterateNext().style.backgroundColor = "#303030"
}

loadNavMenu()