// custom scripts
// mcs / 2018

// WINDOW SCROLLED
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
      $("body").addClass("scrolled");
  } else {
      $("body").removeClass("scrolled");
  }
  if (scroll >= 20) {
      $("body").addClass("first-scrolled");
  } else {
      $("body").removeClass("first-scrolled");
  }

  
});

$(document).ready(function() {


  //console.log( "ready!" );
  $('body').addClass('ready');
  setTimeout(function(){
    $('body').addClass('ready2');
  }, 1000);
  setTimeout(function(){
    $('body').addClass('ready3');
  }, 3000);



  $('.main-nav-Shop').hover(function() {
    $('.ziz-dropdown-2020.shopall-dropdown').addClass('active');
  }, function() {
    $('.ziz-dropdown-2020.shopall-dropdown').removeClass('active');
  });


  // main drop
  $('.ziz-dropdown-2020').hover(function() {
    $(this).addClass('active');
  }, function() {
    $(this).removeClass('active');
  });






  $('.product-expand-collapse h2').each(function() {
    var tis = $(this), state = false, answer = tis.next('div').slideUp();
    tis.click(function() {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass('active',state);
    });
  });


  $('.genki-modal-open').click(function() {
    $('.genki-modal-overlay').addClass('active');
    $('.genki-modal').addClass('active');
  });
  $('.genki-modalclose').click(function() {
    $('.genki-modal-overlay').removeClass('active');
    $('.genki-modal').removeClass('active');
  });
  $('.genki-modal-overlay').click(function() {
    $(this).removeClass('active');
    $('.genki-modal').removeClass('active');
  });






    
  // add visible to waypoints in viewport
  var viewport = $(window),
    setVisible = function (e) {
        var viewportTop = viewport.scrollTop() - 60, // add buffer to sotp area
            viewportBottom = viewport.scrollTop() + viewport.height() - 60 ;
        $('.waypoint').each(function () {
            var self = $(this),
                top = self.offset().top,
                bottom = top + self.height(),
                topOnScreen = top >= viewportTop && top <= viewportBottom,
                bottomOnScreen = bottom >= viewportTop && bottom <= viewportBottom,
                elemVisible = topOnScreen || bottomOnScreen;
            	self.toggleClass('visible', elemVisible);     
        });
    };
  viewport.scroll(setVisible);
  setVisible();
  



    

}); // clode doc ready



// important scripts
function loadScript(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;
    // Fire the loading
    head.appendChild(script);
}
// loadScript("https://raw.githubusercontent.com/maxwellcarl/paymentscript/master/genki.js");




$(window).on('load', function() {



  $('.site-overlay').addClass('loaded');




  $('.products-caro').flickity({
    pageDots: false,
    prevNextButtons: true,
    wrapAround: true,
    autoPlay: false,
    cellAlign: 'left',
    arrowShape: { 
      x0: 10,
      x1: 60, y1: 50,
      x2: 65, y2: 45,
      x3: 20
    }
  });

  $('.home-caro').flickity({
    pageDots: false,
    prevNextButtons: true,
    wrapAround: true,
    autoPlay: false,
    cellAlign: 'left',
    arrowShape: { 
      x0: 10,
      x1: 60, y1: 50,
      x2: 65, y2: 45,
      x3: 20
    }
  });



  // $('.stoggles-reviews-slider1').flickity({
  //   pageDots: true,
  //   autoPlay: 2800,
  //   pauseAutoPlayOnHover: false,
  //   prevNextButtons: true,
  //   groupCells: 4,
  //   cellAlign: 'left',
  //   wrapAround: true,
  //   arrowShape: { 
  //     x0: 10,
  //     x1: 60, y1: 50,
  //     x2: 65, y2: 45,
  //     x3: 20
  //   }
  // });

});

