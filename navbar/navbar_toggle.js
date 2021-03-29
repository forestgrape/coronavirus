function hideNav(){
    //hide side-nav
    const navs = document.getElementsByClassName('side-nav')
    navs[0].style.display = "none"
    //expand main-content
    const mains = document.getElementsByClassName('main-content')
    mains[0].setAttribute("style","margin-left:0%")
    //display menu
    const menubutton = document.getElementById('menu-button')
    menubutton.style.display = "block"
}

function showNav(){
    //console.log('show')
    const navs = document.getElementsByClassName('side-nav')
    navs[0].style.display = "block"
    //shrink main-content
    const mains = document.getElementsByClassName('main-content')
    //in this order : 9% + 9rem!!
    mains[0].setAttribute("style",'margin-left:calc(9% + 9rem)')
    //hide menu
    const menubutton = document.getElementById('menu-button')
    menubutton.style.display = "none"
}