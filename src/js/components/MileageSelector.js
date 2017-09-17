(function(){
  $(window).bind("load", function() {

    // Add value to .RequestForm-configuration
    var mileageSelector = $('.MileageSelector')
    var configurationList = $('.RequestForm-configuration ul')

    var initialValue = mileageSelector.find('.selectric-hide-select select option:first-child').text() // If no option is set to selected
    var initialValue = mileageSelector.find('.selectric-hide-select select option:selected').text() // If an option is selected

    function setMileageInConfList(value) {
      if( configurationList.length ) {
        configurationList.find('li.mileage').remove()
        configurationList.prepend('<li data-sort="0" class="mileage">Km: '+value+'</li>')
      }
    }

    // On click
    mileageSelector.find('.selectric-Dropdown .selectric-items li').click(function(){
      var optionValue = $(this).text()
      setMileageInConfList(optionValue)
    })

    // On pageload
    setMileageInConfList(initialValue)

  })
})();
