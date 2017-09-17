(function(){
  $(window).bind("load", function() {

    var featureSelector = $('.FeatureSelector')
    var configurationList = $('.RequestForm-configuration ul')

    // Add value to .RequestForm-configuration
    function setFeaturesInConfList() {
      if( configurationList.length ) {
        configurationList.find('li.feature').remove()
        setTimeout(function(){
          featureSelector.find('input[type="checkbox"]').each(function(){
            if( $(this).is(':checked') ) {
              var value = $(this).siblings('label').text()
              configurationList.append('<li data-sort="3" class="feature">Ekstraudstyr: '+value+'</li>')
            }
          })
        }, 100);
      }
    }

    // On click:  Add value to .RequestForm-configuration
    featureSelector.find('.FeatureSelector-option label').click(function(){
      setFeaturesInConfList()
    })

    // On pageload:  Add value to .RequestForm-configuration
    setFeaturesInConfList()

  })
})();
