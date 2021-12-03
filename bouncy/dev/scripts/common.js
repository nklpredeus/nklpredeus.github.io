

$(document).ready(function () {


	$('.hamburger').click(function () {
		$('.hamburger').toggleClass('is-active');
		$('.mobile-menu').toggleClass('active');
	});

	$('.close').click(function () {
		$('.mobile-menu').removeClass('active');
		$('.hamburger').removeClass('is-active');
	})

	$(document).mouseup(function (e) {
		var menu = $('.mobile-menu')
		if (!menu.is(e.target)) {
			menu.removeClass('active');
			$('.hamburger').removeClass('is-active');
		}
	});


	// $('.black-carousel-list').slick({
	// 	slidesToShow: 3,
	// 	infinite: true,
	// 	arrows: true,
	// 	dots: false,
	// 	prevArrow: '<img class="carousel-arrow-left" src="images/fa-angle-left.png" alt="left"> ',
	// 	nextArrow: '<img class="carousel-arrow-right" src="images/fa-angle-right.png" alt="right">',
	// 	autoplay: true,
	// 	autoSpeedplay: 30,
	// });


	// var mixer = mixitup('.work-items');

});


