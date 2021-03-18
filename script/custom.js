window.onload = function () {
  document.body.classList.add('loaded');
}



document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             
        evt.originalEvent.touches; 
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }F
    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
          plusSlide()
        } else {
          minusSlide()
        }                       
    }
    xDown = null;
    yDown = null;                                             
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides(slideIndex += 1);
}

function minusSlide() {
  showSlides(slideIndex -= 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var firstTime=0
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var firstTop = document.getElementsByClassName("first-top");
  var secondTop = document.getElementsByClassName("second-top");
  var thirdTop = document.getElementsByClassName("third-top");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 1; i < slides.length; i++) {
    firstTop[i].style.animation = "fade 1s linear";
  }
  
  for (i = 1; i < slides.length; i++) {
    secondTop[i].style.display = "none";
  }
  for (i = 1; i < slides.length; i++) {
    thirdTop[i].style.animation = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  if(firstTime!=undefined) {
    for (i = 0; i < slides.length; i++) {
      firstTop[i].style.animation = "fade 1s linear";
    }
    for (i = 0; i < slides.length; i++) {
      secondTop[i].style.animation = "none";
    }
    for (i = 0; i < slides.length; i++) {
      thirdTop[i].style.animation = "none";
    }
  }
  firstTime++;
}