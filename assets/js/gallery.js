// JS code to enable pop-up modals with enlarged images:
// Open the Modal
var modal = document.getElementById("slideModal")

function openModal() {
  modal.classList.add('slide-modal-visible');
}

// Close the Modal
// Close by clicking on element with onclick:CloseModal() function:
function closeModal() {
  modal.classList.remove('slide-modal-visible');
}

// When the user clicks anywhere outside of the modal, close the modal:
window.onclick = function(event) {
	if (event.target == modal) {
		modal.classList.remove('slide-modal-visible');
	}
}

// Add event listener to close modal on ESC key press
document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
		modal.classList.remove('slide-modal-visible');
	}
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  //var captionText = document.getElementById("caption");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
}