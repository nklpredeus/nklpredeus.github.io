

$(document).ready(function () {

	//Кнопка вверх

	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() != 0) {
	// 		$('#toTop').fadeIn();
	// 	} else {
	// 		$('#toTop').fadeOut();
	// 	}
	// });
	// $('#toTop').click(function () {
	// 	$('body,html').animate({ scrollTop: 0 }, 800);
	// });


	$('.black-carousel-list').slick({
		slidesToShow: 3,
		infinite: true,
		arrows: true,
		dots: false,
		prevArrow: '<img class="carousel-arrow-left" src="images/fa-angle-left.png" alt="left"> ',
		nextArrow: '<img class="carousel-arrow-right" src="images/fa-angle-right.png" alt="right">',
		autoplay: true,
		autoSpeedplay: 30,
	});


	var mixer = mixitup('.work-items');

});


