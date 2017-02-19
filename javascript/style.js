$(document).ready(function() {
   $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('#parallaxed').css({
        'transform' : 'translate(0px, -'+ wScroll /25 + '%)'
    });

    $('.header').css({
        'transform': 'translate(0px, '+ wScroll / 17 +'%)'
    });


}) 

   $('.nav-btn').click(function() {
    $('.nav-overlay').css('margin-right', '0');
   });


});