window.addEventListener("load",function() {
    replaceSlideShowImg();
    overridePHP();
})

const el = document.getElementById("FullImageView");
el.addEventListener("fullscreenchange", fullscreenchanged);

function replaceSlideShowImg() {
    $('img').removeAttr('width').removeAttr('height');
}

function overridePHP() {
    $(document).ready(function() { $('img')
        .filter('[id^=FullImage]')
        .each(function () { this.src = this.src.replace("w=1100&", "") })  });
    var imgSize = document.getElementById("FullImage").length;
    for (var i = 0; i < imgSize; i++) {
        document.getElementById("FullImage")[i].src = document.getElementById("FullImage")[i].src.replace("w=1100&", "");
    }
}

function FullView(ImgLink) {
    document.getElementById("FullImage").src = ImgLink;
    document.getElementById("FullImageView").style.display = "block";
    // document.getElementsByClassName("site-header")[0].style.display = "none"
    // document.getElementsByClassName("jetpack-portfolio-template-default")[0].classList.add("stop-scroll");
    overridePHP();
    pauseSlides();
    openFullscreen(ImgLink);
}

function CloseFullView() {
    document.getElementById("FullImageView").style.display = "none";
    // document.getElementsById("masthead").style.display = "block";
    // document.getElementsByClassName("site-header")[0].style.display = "block";
    // document.getElementsByClassName("jetpack-portfolio-template-default")[0].classList.remove("stop-scroll");
}

function openFullscreen(ImgLink) {
    /* Get the element you want displayed in fullscreen */
    var elem = document.getElementById("FullImageView");

    /* Function to open fullscreen mode */
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

function cancelFullscreen() {
    if (document.cancelFullScreen) {
    document.cancelFullScreen();
    } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
    }
}

function fullscreenchanged(event) {
    // document.fullscreenElement will point to the element that
    // is in fullscreen mode if there is one. If not, the value
    // of the property is null.
    if (document.fullscreenElement) {
        console.log(
        `Element: ${document.fullscreenElement.id} entered fullscreen mode.`,
        );
    } else {
        CloseFullView();
        console.log("Leaving fullscreen mode.");
    }
}