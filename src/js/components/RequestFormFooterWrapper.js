(function(){
  $(window).bind("load", function() {

    // Sticky footer
    function stickUnstick() {
      var footerWrapper = $('.RequestFormFooterWrapper')
      var wrapperHeight = footerWrapper.height()
      var windowHeight = window.innerHeight
      var windowWidth = window.innerWidth
      var featureSelectorPosition = $('.FeatureSelector').position()
      var featureSelectorBottomPosition = featureSelectorPosition.top + $('.FeatureSelector').outerHeight()
      var wrapperXPosition = (windowWidth - footerWrapper.innerWidth)/2

      if( window.innerWidth < 767 ) {
        var footerYOffset = 48
      } else if ( (window.innerWidth > 768) && (window.innerWidth < 1300) ) {
        var footerYOffset = 66
      } else if ( window.innerWidth > 1301 ) {
        var footerYOffset = 88
      }

      var footerYPosition = windowHeight - footerYOffset

      // NOTE: The unstickpoint is calculated from another element that remains
      // static while scrolling. The stickyness depends on this element for
      // reference of position.
      var unstickPoint = featureSelectorBottomPosition + footerYOffset

      if( (window.pageYOffset+windowHeight) > unstickPoint ) {
        footerWrapper.css({
          'opacity': '1',
          'position': 'relative',
          'transform': 'translate3d(0, 0, 0)'
        })
        $('body').css({
          'padding-bottom': '0'
        })
      } else {
        footerWrapper.css({
          'opacity': '1',
          'position': 'fixed',
          'top': '0',
          'left': wrapperXPosition+'px',
          'transform': 'translate3d(0, '+footerYPosition+'px, 0)'
        })
        $('body').css({
          'padding-bottom': wrapperHeight+'px'
        })
      }
    }

    stickUnstick()

    $( window ).resize(function() {
      stickUnstick()
    })

    $(window).on( 'scroll', function(){
      stickUnstick()
    });

    // Scroll to footer when .RequestForm-openClose is clicked
    $('.RequestForm-openClose').click(function(){
      var featureSelectorPosition = $('.FeatureSelector').position()
      var featureSelectorBottomPosition = featureSelectorPosition.top + $('.FeatureSelector').outerHeight()
      $("html, body").animate({ scrollTop: (featureSelectorBottomPosition-72) }, 300);
    })

  })
})();
