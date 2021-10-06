$('.hamburger').click(function(){
	$('.mobile-menu').addClass('active');
	$('.hamburger').addClass('is-active');
})
$(document).mouseup(function (e) {
    var container = $(".mobile-menu.active");
    if (container.has(e.target).length === 0){
        container.removeClass('active');
        $('.hamburger').removeClass('is-active');
    }
});