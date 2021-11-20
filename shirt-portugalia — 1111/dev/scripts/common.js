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


	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				return item.el.attr('title') + '<small>ESTAMPA DE CAMISETA</small>';
			}
		}
	});

});


