(function(){

  $('.PackageSelector-optionHeader').click(function(){
    $('.PackageSelector-optionDetails').removeClass('is-open')
    $(this).parent().find('.PackageSelector-optionDetails').addClass('is-open')
    $(this).find('input[type="radio"]').prop('checked', true)
  })

})();
