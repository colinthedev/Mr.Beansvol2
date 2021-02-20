//Coffee Shop Gallery Slide-Show
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("coffeeGallery__mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); //Change image every 4 seconds
}


//Art Gallery Slide-Show
var ArtSlideIndex = 1;
ArtShowSlides(ArtSlideIndex);

// Next/previous controls
function plusSlides(n) {
  ArtShowSlides(ArtSlideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  ArtShowSlides(ArtSlideIndex = n);
}

function ArtShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("artGallery__mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {ArtSlideIndex = 1}
  if (n < 1) {ArtSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[ArtSlideIndex-1].style.display = "block";
  dots[ArtSlideIndex-1].className += " active";
} 