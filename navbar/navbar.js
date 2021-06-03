function hideNav() {
    //hide side-nav
    document.getElementById('side-nav').style.display = "none"

    //expand content
    const content = document.getElementById('central-content')
    content.setAttribute("style", "margin-left:0%")

    //display menu button (without mouseover only whitespace are displayed)
    document.getElementById('menu-button').style.display = "block"
}

function showNav() {
    //console.log('show')
    document.getElementById('side-nav').style.display = "block"

    //shrink content 
    const content = document.getElementById('central-content')
    //in this order : 9% + 9rem!!
    content.setAttribute("style", 'margin-left:calc(9% + 9rem)')

    //disable menu button
    document.getElementById('menu-button').style.display = "none"
}


function mouseOverSideNav() {
    /*show the the nav scroll bar if necessary*/
    const TITLE_OFFSET = 170;
    const side_nav = document.getElementById('side-nav')
    if (side_nav.offsetHeight < document.getElementById('nav-toc').offsetHeight + TITLE_OFFSET) {
        //console.log('show overflow')
        side_nav.setAttribute("style", "overflow-y:auto")
    }

}

function onContentMove() {
    /* 
    * scrolls the nav element if necessary
    * hide the nav scroll bar //would be only necessary on desktop on mobile usually auto hidden
    */
    const side_nav = document.getElementById('side-nav')
    console.log('content move')
    
    if (side_nav.style.display != "none") {
        const lowest_placement = parseInt(.8 * side_nav.offsetHeight)
        

        side_nav.setAttribute("style", "overflow-y:hidden")
        const active_elem = document.getElementsByClassName('is-active-link')[0]
        const loc_of_active = active_elem.offsetTop      //alternative would be: getBoundingClientRect().top //gets position respect to view port
        //console.log('top:'+active_elem + parseInt(loc_of_active))
        /*usually works; smooths seems disabled in safari*/
        side_nav.scrollTo({ top: Math.max(0, loc_of_active - lowest_placement), 'behavior': 'smooth' })
    }
}