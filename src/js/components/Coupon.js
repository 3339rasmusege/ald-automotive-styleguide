( function() {

  var coupon = $('.Coupon')
  var couponField = coupon.find('.Coupon-field')
  var couponButton = coupon.find('.Coupon-button')

  function showButton() {
    if( couponField.val() ) {
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

})();
