function hideNav(){
    //hide side-nav
    document.getElementById('side-nav').style.display = "none"
    //expand content
    const content = document.getElementById('central-content')
    content.setAttribute("style","margin-left:0%")
    //display menu
    document.getElementById('menu-button').style.display = "block"
}

function showNav(){
    //console.log('show')
    document.getElementById('side-nav').style.display = "block"
    //shrink content 
    const content = document.getElementById('central-content')
    //in this order : 9% + 9rem!!
    content.setAttribute("style",'margin-left:calc(9% + 9rem)')
    //hide menu
    document.getElementById('menu-button').style.display = "none"
}