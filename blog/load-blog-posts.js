let pagesize = 20
let latestpost = 4
let page = 1
let pagestoload = Array(pagesize).fill().map((_, index) => -index + latestpost - (page - 1) * pagesize).filter(function(x){ return x > 0 })

async function loadBlogPosts() {
    for (item of pagestoload) {
        const file = await fetch(item.toString() + ".html")
        const text = await file.text()

        let blogpost = new DOMParser().parseFromString(text, "text/html")
        let title = blogpost.getElementById("title").innerHTML
        let date = blogpost.getElementById("date").innerHTML
        let description = blogpost.getElementById("description").innerHTML

        const article = await fetch(window.location.origin + "/blog/article.html")
        const articletext = await article.text()

        let articlehtml = new DOMParser().parseFromString(articletext, "text/html")
        articlehtml.getElementsByClassName("title")[0].innerHTML = title
        articlehtml.getElementsByClassName("date")[0].innerHTML = date
        articlehtml.getElementsByClassName("description")[0].innerHTML = description
        articlehtml.getElementsByClassName("articlelink")[0].setAttribute("href", window.location.origin + "/blog/" + item.toString() + ".html")

        document.getElementById("articles").innerHTML += articlehtml.documentElement.innerHTML
    }
}

loadBlogPosts()