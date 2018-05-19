$(document).ready(function(){


var autoswitch=true;
var autoswitch_speed=15000;


$('.slide').first().addClass('active');
$('.slide').hide();
$('.active').show();


//next switch

  $('.next').click(function(){

  $('.active').removeClass('active').addClass('oldActive');

      if($('.oldActive').is(':last-child')){
        $('.slide').first().addClass('active');
      }
      else {
        $('.oldActive').next().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut('slow');
      $('.active').fadeIn('slow');

  });


//prev switch


  $('.prev').click(function(){

  $('.active').removeClass('active').addClass('oldActive');

      if($('.oldActive').is(':first-child')){
        $('.slide').last().addClass('active');
      }
      else {
        $('.oldActive').prev().addClass('active');
      }
      $('.oldActive').removeClass('oldActive');
      $('.slide').fadeOut('slow');
      $('.active').fadeIn('slow');
  });




});
