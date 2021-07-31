function scrollReact (element){
    let y = window;
    let thresholdPassed = false;

    return function () {
        if ((y.scrollY>50)!==thresholdPassed) {
            thresholdPassed = !thresholdPassed;
            if(thresholdPassed) {
                element.classList.add('shrunk');
            } else {
                element.classList.remove('shrunk');
            }
        }
    }
}

window.onscroll = scrollReact(document.querySelector("h1"));