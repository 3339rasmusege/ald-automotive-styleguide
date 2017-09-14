(function() {

  var swiper = new Swiper('.Swiper', {
    pagination: '.Swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    slideClass: 'Swiper-slide',
    wrapperClass: 'Swiper-wrapper',
    slideActiveClass: 'is-active'
  })

  function positionPagination() {
    var heading = $('.Swiper-slide.is-active .Swiper-heading')
    console.log(heading)
    if( !heading.length ) {
      var headingOffset = 25
    } else {
      var headingWidth = heading.width()
      var headingPositionLeft = heading.position('left')
      var headingOffset = headingPositionLeft.left + headingWidth + 20
      if(headingOffset < 280) { headingOffset = 280 }
    }


    $('.Swiper-pagination').css({ 'left': headingOffset+'px' })
  }

  positionPagination()

  swiper.on('slideChangeEnd', function () {
    positionPagination()
  })

  swiper.on('onResize', function () {
    positionPagination()
  })

})();
