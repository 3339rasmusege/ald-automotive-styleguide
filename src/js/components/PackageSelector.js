(function(){
  moduleScripts.packageSelector = function() {
    console.log('package-selector initiated')

    var configurationList = $('.RequestForm-configuration ul')
    var initialPackage = $('.PackageSelector').find('input:checked').siblings('h3').text()

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

    // Add value to .RequestForm-configuration
    function setPackageInConfList(value) {
      dataLayer.push({
        event: "form_interact",
        form_field: "package_select",
      })
      if( configurationList.length ) {
        // configurationList.find('li.package').remove()
        configurationList.find('li.package').text('Udstyrspakke: '+value)
      }
    }

    // On click: Add value to .RequestForm-configuration
    $('.PackageSelector').find('.PackageSelector-option label').click(function(){
      var packageValue = $(this).siblings('h3').text()
      setPackageInConfList(packageValue)
    })

    // On pageload: Add value to .RequestForm-configuration
    setPackageInConfList(initialPackage)

  }
})();
