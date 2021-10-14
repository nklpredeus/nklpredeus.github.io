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

	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 800);
	});

	//Team Slider

	$('.team-slider').slick({
		slidesToShow: 4,
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: '<img class="team-arrow-left" src="images/fa-angle-left.png" alt="left"> ',
		nextArrow: '<img class="team-arrow-right" src="images/fa-angle-right.png" alt="right">',
		autoplay: true,
		autoSpeedplay: 10,
	});

	$('.brand-slider').slick({
		slidesToShow: 5,
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: '<img class="brand-arrow-left" src="images/fa-angle-left.png" alt="left"> ',
		nextArrow: '<img class="brand-arrow-right" src="images/fa-angle-right.png" alt="right">',

	});

});


