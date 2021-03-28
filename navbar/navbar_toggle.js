function navHide(){
    const navs = document.getElementsByClassName('side-nav')
    navs[0].style.display = "none"

    const main = document.getElementsByClassName('main-content')
    main[0].setAttribute("style","margin-left:0%")
}

document.getElementById("hide-nav").addEventListener('click', navHide);

function navShow(){
    //in work
}
