---
title: Portfolio
layout: landing
description: Moments of stillness captured
image: assets/images/main_portfolio.webp
nav-menu: true
---

<!-- Main -->
<div id="main">

<!-- One 
<section id="one">
	<div class="inner">
		<header class="major">
			<h2>Sed amet aliquam</h2>
		</header>
		<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.</p>
	</div>
</section> -->

<!-- One -->
<section id="one">
	<div class="inner">

<!-- Two -->
<section id="two">
	<!-- <span class="image fit"><img src="{% link assets/images/main_banner.webp %}" alt="" /></span> -->
	<div class="box alt">
		<div class="row 100% uniform">
			<!-- Start ROW 1 -->
			<div class="4u"><span class="image fit hover-img"><img onclick="openModal();currentSlide(1)" src="{% link assets/images/portfolio_2430.JPG %}" alt="" /></span></div>
			<div class="4u"><span class="image fit hover-img"><img onclick="openModal();currentSlide(2)" src="{% link assets/images/portfolio_2266.JPG %}" alt="" /></span></div>
			<div class="4u$"><span class="image fit hover-img"><img onclick="openModal();currentSlide(3)" src="{% link assets/images/portfolio_2367.JPG %}" alt="" /></span></div>
			<!-- Break ROW 2 -->
			<div class="4u"><span class="image fit hover-img"><img onclick="openModal();currentSlide(4)" src="{% link assets/images/portfolio_1180.JPG %}" alt="" /></span></div>
			<div class="4u"><span class="image fit hover-img"><img onclick="openModal();currentSlide(5)" src="{% link assets/images/about_1160.JPG %}" alt="" /></span></div>
			<div class="4u$"><span class="image fit hover-img"><img onclick="openModal();currentSlide(6)" src="{% link assets/images/portfolio_1156.JPG %}" alt="" /></span></div>
			<!-- Break ROW 3 -->
			<div class="4u"><span class="image fit hover-img"><img onclick="openModal();currentSlide(7)" src="{% link assets/images/portfolio_6186.JPG %}" alt="" /></span></div>
			<div class="4u"><span class="image fit hover-img"><img onclick="openModal();currentSlide(8)" src="{% link assets/images/portfolio_6200.JPG %}" alt="" /></span></div>
			<div class="4u$"><span class="image fit hover-img"><img onclick="openModal();currentSlide(9)" src="{% link assets/images/portfolio_6226.JPG %}" alt="" /></span></div>
		</div>
	</div>
</section>

<!-- The Modal/Lightbox -->
<div id="slideModal" class="slide-modal">
	<!-- The Close button -->
	<span class="close" onclick="closeModal()">&times;</span>
	<!-- Modal content -->
	<div class="modal-content">
		<!-- The slides\images -->
		<!-- Start ROW 1 -->
		<div class="mySlides">
			<div class="numbertext">1 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_2430.JPG %}">
		</div>
		<div class="mySlides">
			<div class="numbertext">2 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_2266.JPG %}">
		</div>
		<div class="mySlides">
			<div class="numbertext">3 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_2367.JPG %}">
		</div>
		<!-- Break ROW 2 -->
		<div class="mySlides">
			<div class="numbertext">4 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_1180.webp %}">
		</div>
		<div class="mySlides">
			<div class="numbertext">5 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_1160.webp %}">
		</div>
		<div class="mySlides">
			<div class="numbertext">6 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_1156.webp %}">
		</div>
		<!-- Break ROW 3 -->
		<div class="mySlides">
			<div class="numbertext">7 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_6186.JPG %}">
		</div>
		<div class="mySlides">
			<div class="numbertext">8 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_6200.JPG %}">
		</div>
		<div class="mySlides">
			<div class="numbertext">9 / 9</div>
			<img class="popImage" src="{% link assets/images/portfolio_6226.JPG %}">
		</div>
		<!-- Next/previous controls -->
		<a class="prevslide" onclick="plusSlides(-1)">&#10094;</a>
		<a class="nextslide" onclick="plusSlides(1)">&#10095;</a>
		<!-- Caption text 
		<div class="caption-container">
			<p id="caption"></p>
		</div> -->
		<!-- Thumbnail image controls
		<div class="column">
			<img class="demo" src="{% link assets/images/portfolio_2430.JPG %}" onclick="currentSlide(1)" alt="Nature">
		</div>
		<div class="column">
			<img class="demo" src="{% link assets/images/portfolio_2266.JPG %}" onclick="currentSlide(2)" alt="Snow">
		</div>
		<div class="column">
			<img class="demo" src="{% link assets/images/portfolio_2367.JPG %}" onclick="currentSlide(3)" alt="Mountains">
		</div>
		<div class="column">
			<img class="demo" src="img4.jpg" onclick="currentSlide(4)" alt="Lights">
		</div> -->
  	</div>
</div>

<!-- Calling the JavaScript code -->
<script src="{{ '/assets/js/gallery.js' | relative_url }}"></script>

<script>
	// Aviram's to-do list of the gallery implementation:
	// * Make the background blurred out when gallery is open
	// * Make images transition fadein\fadeout between them
	// * DONE - Position the popped up image in center, with bezels (spacing) from top and bottom of browser
	// * DONE - Merge the gallery script into _main.js ??
	// * DONE - Add rounded edges to the pics in gallery
	// * DONE - Create infrastructure for single image enlarge pop-up for blog posts
</script>