var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// --------------------------------------------------------------------------------------------------------------------------

var slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(m) {
  showSlides1((slideIndex1 += m));
}

function currentSlide1(m) {
  showSlides1((slideIndex1 = m));
}

function showSlides1(m) {
  var j;
  var slides1 = document.getElementsByClassName("mySlides1");
  var dots1 = document.getElementsByClassName("dot1");
  if (m > slides1.length) {
    slideIndex1 = 1;
  }
  if (m < 1) {
    slideIndex1 = slides1.length;
  }
  for (j = 0; j < slides1.length; j++) {
    slides1[j].style.display = "none";
  }
  for (j = 0; j < dots1.length; j++) {
    dots1[j].className = dots1[j].className.replace(" active", "");
  }
  slides1[slideIndex1 - 1].style.display = "block";
  dots1[slideIndex1 - 1].className += " active";
}

// --------------------------------------------------------------------------------------------------------------------------

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(o) {
  showSlides2((slideIndex2 += o));
}

function currentSlide2(o) {
  showSlides2((slideIndex2 = o));
}

function showSlides2(o) {
  var k;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (o > slides2.length) {
    slideIndex2 = 1;
  }
  if (o < 1) {
    slideIndex2 = slides2.length;
  }
  for (k = 0; k < slides2.length; k++) {
    slides2[k].style.display = "none";
  }
  for (k = 0; k < dots2.length; k++) {
    dots2[k].className = dots2[k].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active";
}

// --------------------------------------------------------------------------------------------------------------------------

var slideIndex3 = 1;
showSlides3(slideIndex3);

function plusSlides3(o) {
  showSlides3((slideIndex3 += o));
}

function currentSlide3(o) {
  showSlides3((slideIndex3 = o));
}

function showSlides3(o) {
  var k;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (o > slides3.length) {
    slideIndex3 = 1;
  }
  if (o < 1) {
    slideIndex3 = slides3.length;
  }
  for (k = 0; k < slides3.length; k++) {
    slides3[k].style.display = "none";
  }
  for (k = 0; k < dots3.length; k++) {
    dots3[k].className = dots3[k].className.replace(" active", "");
  }
  slides3[slideIndex3 - 1].style.display = "block";
  dots3[slideIndex3 - 1].className += " active";
}
