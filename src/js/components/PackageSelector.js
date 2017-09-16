(function(){

  $('.PackageSelector-optionHeader').click(function(){
    $('.PackageSelector-optionDetails').removeClass('is-open')
    $(this).parent().find('.PackageSelector-optionDetails').addClass('is-open')
    $(this).find('input[type="radio"]').prop('checked', true)
  })

  $('.PackageSelector-optionHeader .PackageSelector-optionOpenClose').click(function(){
    if( $(this).parent('.PackageSelector-option').hasClass('is-open') ) {
      $(this).parent('.PackageSelector-option').removeClass('is-open')
    } else {
      $(this).parent('.PackageSelector-option').addClass('is-open')
    }
  })

})();

// TODO: select when label is clicked
// TODO: open when caret is clicked
// TODO: colorselecor: set selected on pageload
