function hideNav() {
    //console.log("hide side-nav")
    document.getElementById('side-nav').style.display = "none"

    //expand content
    document.getElementById('central-content').setAttribute("style", "margin-left:0%")

    //display menu button (without mouseover only whitespace are displayed)
    document.getElementById('menu-button').style.display = "block"
}

function showNav() {
    //console.log('show')
    document.getElementById('side-nav').style.display = "block"

    //shrink content 
    //in this order : 9% + 9rem!!
    document.getElementById('central-content').setAttribute("style", 'margin-left:calc(9% + 9rem)')

    //disable menu button
    document.getElementById('menu-button').style.display = "none"
}

const side_nav = document.getElementById('side-nav')

function showSideNavScrollbar() {
    /*show the the nav scroll bar if necessary*/
    const OPTIONS_SPACE = 170;
    if (side_nav.offsetHeight < document.getElementById('nav-toc').offsetHeight + OPTIONS_SPACE) {
        //console.log('show overflow')
        side_nav.setAttribute("style", "overflow-y:auto")
    }
}

function hideSideNavScrollbar() {
    /*hide the nav scroll bar*/ 
    //is only necessary on desktop; on mobile usually hidden by default
    // if since style attribute change sets display=block
    if (side_nav.style.display != "none") {
        side_nav.setAttribute("style", "overflow-y:hidden")
    }
}

function onContentMove() {
    /*  scroll the nav element if necessary */

    if (side_nav.style.display != "none") {
        const lowest_placement = parseInt(.8 * side_nav.offsetHeight)
        // get loc of active element in toc
        const active_elem = document.getElementsByClassName('is-active-link')[0]
        const loc_of_active = active_elem.offsetTop      
        //alternative is: _.getBoundingClientRect().top //gets position respect to view port

        /* scroll down if below lowest placement*/
        //console.log('top:'+active_elem.innerHTML + 'loc:' + parseInt(loc_of_active))
        //smooth behavior available for most browsers; ?option smooth in safari?
        side_nav.scrollTo({ top: Math.max(0, loc_of_active - lowest_placement), 'behavior': 'smooth' })
    }
}