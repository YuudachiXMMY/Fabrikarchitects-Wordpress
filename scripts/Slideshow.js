var slideIndex = 1;
var myTimer;
var slideshowContainer;
var status;
window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 3000);
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1);
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  }
}

//Controls the current slide and resets interval if needed
function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
  showSlides(slideIndex = n);
}

function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var images = document.getElementsByClassName("slideshowImage");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  images[slideIndex-1].className += " active";

    document.getElementById("FullImage").src = images[slideIndex-1].src;
    <!---FIV---->
    var totalCountFIV = $(".slideshow-inner").find('img').length;
    $('#countFIV').html(slideIndex);
    $('#count2FIV').html(' / ' + totalCountFIV );

  <!---------------- Pagination Display---------------->
  var totalCount = $(".slideshow-inner").find('img').length;
$('#count').html(slideIndex);
  $('#count2').html(' / ' + totalCount );
 <!---Small Pagination Display---->
  var totalCountSmall = $(".slideshow-inner").find('img').length;
  $('#countSmall').html(slideIndex);
  $('#count2Small').html(' / ' + totalCountSmall );
<!---------------- End of Pagination Display---------------->
}
function pauseSlides(){
    clearInterval(myTimer);
}