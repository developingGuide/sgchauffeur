let lastScrollY = 0
navBar = document.getElementById('navBar')

window.addEventListener('scroll', function(){
    const currentScrollY = window.scrollY
    
    if (currentScrollY > lastScrollY){
        navBar.classList.add("hidden")
    }
    else{
        navBar.classList.remove("hidden")
    }
    
    lastScrollY = currentScrollY
})

let count = 0
const dropBar = document.querySelector('.dropBar')
const barsIcon = document.querySelector('.fa-solid.fa-bars.fa-xl')
const xBtn = document.querySelector('.fa-solid.fa-x.fa-xl')

function showNavbar(){
    count += 1
    if (count % 2 != 0){
        dropBar.style.display = "flex"
        barsIcon.replaceWith(xBtn)
        xBtn.style.display = "flex"
        lastScrollY = 100000
        document.body.classList.add('stopScrolling')
    }
    else{
        dropBar.style.display = "none"
        xBtn.replaceWith(barsIcon)
        xBtn.style.display = "none"
        document.body.classList.remove('stopScrolling')
    }
}