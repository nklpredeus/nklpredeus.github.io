$('.hamburger').click(function(){
	$('.hamburger').addClass('is-active');
	$('.mobile-menu').addClass('active');
});

$('.close').click(function(){
	$('.mobile-menu').removeClass('active');
	$('.hamburger').removeClass('is-active');
})