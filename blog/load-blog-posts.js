let pagesize = 20
let latestpost = 4
let page = 1
let pagestoload = Array(pagesize).fill().map((_, index) => -index + latestpost - (page - 1) * pagesize).filter(function (x) { return x > 0 })

async function loadBlogPosts() {
  for (item of pagestoload) {
    const blogposts = await fetch(document.URL + "blog-posts.json").then(files => files.json());
    const match = blogposts.find(file => file.startsWith(`${item}-`));

    const file = await fetch(document.URL + match)
    const text = await file.text()

    let blogpost = new DOMParser().parseFromString(text, "text/html")
    let title = blogpost.getElementById("title").innerHTML
    let date = blogpost.getElementById("date").innerHTML
    let description = blogpost.getElementById("description").innerHTML

    const article = await fetch(document.URL + "article.html")
    const articletext = await article.text()

    let articlehtml = new DOMParser().parseFromString(articletext, "text/html")
    articlehtml.getElementsByClassName("title")[0].innerHTML = title
    articlehtml.getElementsByClassName("date")[0].innerHTML = date
    articlehtml.getElementsByClassName("description")[0].innerHTML = description
    articlehtml.getElementsByClassName("articlelink")[0].setAttribute("href", document.URL + match)

    document.getElementById("articles").innerHTML += articlehtml.documentElement.innerHTML
  }
}

loadBlogPosts()