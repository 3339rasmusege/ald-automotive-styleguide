(function(){
  moduleScripts.coupon = function() {
    console.log('coupon loaded')

    var coupon = $('.Coupon')
    var couponField = coupon.find('.Coupon-field')
    var couponButton = coupon.find('.Coupon-button')

    function showButton() {
      if( couponField.val() ) {
        dataLayer.push({
          event: "form_interact",
          form_field: "coupon",
        })
        coupon.addClass('is-open')
        coupon.css({ 'height': '160px' })
        setTimeout( function() {
          couponButton.css({ 'opacity': '1' })
        }, 200)
      } else {
        couponButton.css({ 'opacity': '0' })
        setTimeout( function() {
          coupon.removeClass('is-open')
          coupon.css({ 'height': '98px' })
        }, 200)
      }
    }

    couponField.keyup( function() {
      showButton()
    })

  }
})();
