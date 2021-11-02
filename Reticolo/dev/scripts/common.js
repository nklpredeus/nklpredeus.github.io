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
		v
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
		autoSpeedplay: 30,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					autoplay: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					autoplay: true,
					arrows: false
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					autoplay: true,
					arrows: false
				}
			}
		]
	});


	var mixer = mixitup('.latest-works-mixer');

});


