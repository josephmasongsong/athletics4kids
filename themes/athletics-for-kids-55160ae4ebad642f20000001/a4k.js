var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

if( !isMobile.any ()) { 
  
  var width = $(window).width();

  $(window).scroll (function() {
    var scroll = $(this).scrollTop();
    
    if (scroll >= 100) {
      $('.navbar').addClass('navbar-onscroll')

    } else if ((window.location.pathname) !== '/') {
      $('.navbar').addClass('navbar-onscroll')

    } else {
      $('.navbar').removeClass('navbar-onscroll')
    }

  });

  var $window = $(window)

  $(window).on('resize', function() {
    if ($window.width() < 992) {
      $('.navbar').addClass('navbar-onscroll')
    } else {
      $('.navbar').removeClass('navbar-onscroll')
    }
  }); 

};

$(document).ready(function ($) {
  if ((window.location.pathname) !== '/') {
    $('.navbar').addClass('navbar-onscroll')
  }
});

$('#video-modal-link').click(function () {
    var videoSRC = $(this).attr( "data-theVideo" ), 
        videoSRCauto = videoSRC+"?autoplay=1" ;
    $('#videoModal').show();
    $('#videoModal iframe').attr('src', videoSRCauto);
});

$('#videoModal').on('hidden.bs.modal', function () {
    $('#videoModal iframe').removeAttr('src');
});


$('.modalBio-link').click(function(){
  $('#'+$(this).data('id')).show();
});

$('.canada-helps, .menu-collapse ul.nav.navbar-nav li:last-child a').click(function(e) {
  e.preventDefault;
  window.location='https://www.canadahelps.org/dn/3686';
});