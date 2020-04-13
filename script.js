$(function() {
  $('.burger-btn').click(function() {
    $('.header-navi').fadeToggle(300);
    $(this).toggleClass('close');
    $('body').toggleClass('noscroll');
  });

  if( $(window).width() < 768 ){
    $('.nav-item>a').on('click',function(){
      $('.header-navi').fadeOut(300);
      $('.burger-btn').removeClass('close');
      $('body').removeClass('noscroll');
    });
  }

  $('a[href^="#"]').click(function() {
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('html,body').animate( {
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

  var pageTop = $('#page-top');

  pageTop.hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100 ) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });

  pageTop.click(function() {
    $('html,body').animate( {
      scrollTop: 0
    }, 500);
    return false;
  });

});
