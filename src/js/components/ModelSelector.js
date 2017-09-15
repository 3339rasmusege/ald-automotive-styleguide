// http://idangero.us/swiper/api/

(function() {

  var ModelSelector = new Swiper('.ModelSelector', {
    spaceBetween: 0,
    slideClass: 'Swiper-slide',
    wrapperClass: 'Swiper-wrapper',
    slideActiveClass: 'is-active',
    slidesPerView: 4.5,
    nextButton: '.ModelSelector-next',
    prevButton: '.ModelSelector-previous',
    // when window width is <= value
    breakpoints: {
      1300: {
        slidesPerView: 2.75
      }
    }
  })

  // Don't show ModelSelector as a slider unless we're on a tablet or bigger
  // Also add/remove some classes for styling
  function initModelSelector() {
    if( window.matchMedia("(max-width: 767px)").matches ) {
      ModelSelector.destroy(true, true)
      $('.ModelSelector').addClass('ModelSelector--verticalList')
      $('.ModelSelector.Swiper').removeClass('Swiper')
      $('.ModelSelector .Swiper-slide').addClass('ModelSelector-model')
      $('.ModelSelector .Swiper-slide').removeClass('Swiper-slide')
      $('.ModelSelector .Swiper-slideInner').addClass('ModelSelector-modelInner')
      $('.ModelSelector .Swiper-slideInner').removeClass('Swiper-slideInner')
      $('.ModelSelector .Swiper-wrapper').addClass('ModelSelector-inner')
      $('.ModelSelector .Swiper-wrapper').removeClass('Swiper-wrapper')
    }
  }

  initModelSelector()

})();
