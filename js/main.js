$(document).ready(function() {

  $('body').removeClass('no-js');

  // $('a.blog-button').click(function() {
  //   if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
  //   currentWidth = $('.panel-cover').width();
  //   if (currentWidth < 960) {
  //     $('.panel-cover').addClass('panel-cover--collapsed');
  //     $('.content-wrapper').addClass('animated slideInRight');
  //   } else {
  //     $('.panel-cover').css('max-width',currentWidth);
  //     $('.panel-cover').animate({'max-width': '500px', 'width': '30%'}, 400, swing = 'swing', function() {} );
  //   }
  // });

  // console.log(window.location.hash);
  // console.log(window.innerWidth);
  if (window.innerWidth < 500 && window.location.hash == "") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }
  
  if (window.location.pathname.substring(0, 6) == "/page/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function() {
    if ($('.navigation-wrapper').css('display') == "block") {
      // $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      //   $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
      // });
      // $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
      $('.navigation-wrapper').css('display',"none");
    } else {
      $('.navigation-wrapper').css('display',"block");
      // $('.navigation-wrapper').toggleClass('visible animated bounceInDown');
    }
    $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  });

  // $('.navigation-wrapper .blog-button').click(function() {
  //   currentWidth = $('body').width();
  //   if ($('.navigation-wrapper').css('display') == "block") {
  //     if (currentWidth < 1100) {
  //        $('.navigation-wrapper').css('display',"none");
  //     }

  //     $('.navigation-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
  //       $('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
  //     });

  //     $('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');
  //   } else {
  //     if (currentWidth < 1100) {
  //        $('.navigation-wrapper').css('display',"block");
  //     }
  //     // $('.navigation-wrapper').css('display',"block");
  //   }
  //   $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
  // });

  $("article.post-container--single a[href^=http]").attr("target", "_blank");
  $("article.post-container--single a[href^=mailto]").attr("target", "_blank");
});
