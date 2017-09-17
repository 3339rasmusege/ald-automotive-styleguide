(function(){
  $(window).bind("load", function() {

    var laptopScreenWidth = 1300
    var tabletScreenWidth =  768

    var requestForm = $('.RequestForm')
    var requestFormToggle = requestForm.find('.RequestForm-openClose')
    var requestFormOverview = requestForm.find('.RequestForm-overview')

    // Set the size of RequestForm-openClose
    function setTogglePosition() {
      var overviewPosition = requestFormOverview.position()
      if (window.matchMedia("(min-width: "+laptopScreenWidth+"px)").matches) {
        requestFormToggle.css({
          'left': overviewPosition.left+'px',
          'width': requestFormOverview.width()+'px',
          'opacity': '1'
        })
      } else if (window.matchMedia("(min-width: "+tabletScreenWidth+"px)").matches) {
        requestFormToggle.css({
          'left': '74px',
          'width': 'auto',
          'opacity': '1'
        })
      } else {
        requestFormToggle.css({
          'left': '25px',
          'width': 'auto',
          'opacity': '1'
        })
      }
    }

    // Move RequestForm-overviewPriceDetails from container to container
    function moveOverviewPriceDetails() {
      var priceDetails = $('.RequestForm-overviewPriceDetails')
      var priceContainer = $('.RequestForm-overviewHeader')
      var formContainer = $('.RequestForm-form')

      if (window.matchMedia("(min-width: "+laptopScreenWidth+"px)").matches) {
        priceDetails.prependTo(formContainer);
      } else {
        priceDetails.appendTo(priceContainer);
      }
    }

    function setOverviewHeight() {
      if (window.matchMedia("(min-width: "+tabletScreenWidth+"px)").matches) {
        requestFormOverview.css({
          'min-height': requestForm.height()+'px'
        })
      }
    }

    // On pageload
    if(requestForm.length) {
      setTogglePosition()
      moveOverviewPriceDetails()
      setOverviewHeight()
    }

    $( window ).resize(function() {
      if(requestForm.length) {
        setTogglePosition()
        moveOverviewPriceDetails()
      }
    })

    $(window).bind('resize', function(e) {
      window.resizeEvt
      $(window).resize(function() {
        clearTimeout(window.resizeEvt)
        window.resizeEvt = setTimeout(function() {
          setOverviewHeight()
        }, 250)
      })
    })

  })
})();
