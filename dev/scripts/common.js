$('.hamburger').click(function(){
	$('.hamburger').toggleClass('is-active');
	$('.mobile-menu').toggleClass('active');
});

$('.close').click(function(){
	$('.mobile-menu').removeClass('active');
	$('.hamburger').removeClass('is-active');
})


$(document).mouseup(function (e) {
    var menu = $('.mobile-menu')
    if (!menu.is(e.target)){
        menu.removeClass('active');
        $('.hamburger').removeClass('is-active');
    }
});


 $(function() {
 $(window).scroll(function() {
 if($(this).scrollTop() != 0) {
 $('#toTop').fadeIn();
 } else {
 $('#toTop').fadeOut();
 }
 });
 $('#toTop').click(function() {
 $('body,html').animate({scrollTop:0},800);
 });
 });