(function(){
  $(window).bind("load", function() {

    var laptopScreenWidth = 1300
    var tabletScreenWidth =  768

    function matchTitleHeightToSwiper() {
      var title = $('.SwiperHero .Title')
      var height = $('.SwiperHero .Swiper img').height()
      if (window.matchMedia("(min-width: "+laptopScreenWidth+"px)").matches) {
        title.css({
          'height': height+'px'
        })
      } else if (window.matchMedia("(max-width: "+laptopScreenWidth+"px)").matches) {
        title.css({
          'height': 'auto'
        })
      }
    }

    matchTitleHeightToSwiper()

    $(window).bind('resize', function(e) {
      window.resizeEvt
      $(window).resize(function() {
        clearTimeout(window.resizeEvt)
        window.resizeEvt = setTimeout(function() {
          matchTitleHeightToSwiper()
        }, 250)
      })
    })

  })
})();
