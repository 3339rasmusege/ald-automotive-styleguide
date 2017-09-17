// http://idangero.us/swiper/api/

(function() {
  $(window).bind("load", function() {

    var swiper = new Swiper('.Swiper--big', {
      pagination: '.Swiper-pagination',
      paginationClickable: true,
      autoplay: 3000,
      spaceBetween: 0,
      slideClass: 'Swiper-slide',
      wrapperClass: 'Swiper-wrapper',
      slideActiveClass: 'is-active'
    })

    function positionPagination() {
      var heading = $('.Swiper--big .Swiper-slide.is-active .Swiper-heading')
      if( !heading.length ) {
        var headingOffset = 25
      } else {
        var headingWidth = heading.width()
        var headingPositionLeft = heading.position('left')
        var headingOffset = headingPositionLeft.left + headingWidth + 20
        if(headingOffset < 280) { headingOffset = 280 }
      }

      $('.Swiper--big .Swiper-pagination').css({ 'left': headingOffset+'px' })
    }

    if($('.Swiper--big').length) {
      positionPagination()

      swiper.on('slideChangeEnd', function () {
        positionPagination()
      })

      swiper.on('onResize', function () {
        positionPagination()
      })
    }

  })
})();
