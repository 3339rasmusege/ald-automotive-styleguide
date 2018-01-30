(function(){
  moduleScripts.mileageSelector = function() {
    console.log('milage-selector initiated')

    // Add value to .RequestForm-configuration
    var mileageSelector = $('.MileageSelector')
    var configurationList = $('.RequestForm-configuration ul')

    var initialValue = mileageSelector.find('.selectric-hide-select select option:first-child').text() // If no option is set to selected
    var initialValue = mileageSelector.find('.selectric-hide-select select option:selected').text() // If an option is selected

    function setMileageInConfList(value) {
      if( configurationList.length ) {
        // configurationList.find('li.mileage').remove()
        configurationList.find('li.mileage').text('Km: '+value)
      }
    }

    // On click
    mileageSelector.find('.selectric-Dropdown .selectric-items li').click(function(){
      var optionValue = $(this).text()
      
      dataLayer.push({
        event: "form_interact",
        form_field: "milage",
      })
      
      setMileageInConfList(optionValue)
    })

    // On pageload
    setMileageInConfList(initialValue)

  }
})();
