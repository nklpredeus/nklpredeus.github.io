$('.hamburger').click(function(){
	$('.hamburger').addClass('is-active');
	$('.mobile-menu').addClass('active');
});

$('.close').click(function(){
	$('.mobile-menu').removeClass('active');
	$('.hamburger').removeClass('is-active');
})

$(document).mouseup(function (e) {
    var container = $(".mobile-menu");
    if (container.has(e.target).length === 0){
        container.removeClass('active');
        $('.hamburger').removeClass('is-active');
    }
});