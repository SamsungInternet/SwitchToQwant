document.getElementsByTagName("main")[0].addEventListener("scroll", onScroll);

// screens
var main = document.getElementById('main')
var lastScreen = document.getElementById('last-screen')

// buttons
var next = document.getElementById('next')
var close = document.getElementById('close')

// Fired when scrolling happens
function onScroll(){
    if(isInViewport(lastScreen)){
        next.classList.remove('hidden')
    }else{
        next.classList.add('hidden')
    }
}

// Check if element is in viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return rect.right - window.innerWidth > 10
}
