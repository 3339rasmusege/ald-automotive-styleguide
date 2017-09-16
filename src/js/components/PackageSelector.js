(function(){

  function openClosePackageOption(element) {
    var clickedPackageOption = element.closest('.PackageSelector-option')
    var allPackageOptions = clickedPackageOption.parent('form').find('.PackageSelector-option')

    // Close all open options
    allPackageOptions.each( function() {
      if( $(this)[0] !== clickedPackageOption[0] ) {
        $(this).removeClass('is-open')
      }
    })

    // Open clicked option
    if( clickedPackageOption.hasClass('is-open') ) {
      clickedPackageOption.removeClass('is-open')
    } else {
      clickedPackageOption.addClass('is-open')
    }
  }

  $('.PackageSelector-optionOpenClose').click( function(){
    openClosePackageOption($(this))
  })

})();
