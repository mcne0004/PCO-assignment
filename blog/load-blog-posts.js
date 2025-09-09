let pagesize = 5
let latestpost = 10
let page = 1
let pagestoload = Array(pagesize).fill().map((_, index) => -index + latestpost - (page - 1) * pagesize).filter(function(x){ return x > 0 })
console.log(pagestoload)