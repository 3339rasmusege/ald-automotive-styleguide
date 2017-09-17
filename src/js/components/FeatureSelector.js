(function(){
  $(window).bind("load", function() {

    var featureSelector = $('.FeatureSelector')
    var configurationList = $('.RequestForm-configuration ul')

    // Add value to .RequestForm-configuration
    function setFeaturesInConfList() {
      if( configurationList.length ) {
        featureSelector.find('input[type="checkbox"]').each(function(){
          if( $(this).is(':checked') ) {
            if( !configurationList.find('li[data-input-name="'+$(this).attr('name')+'"]').length ) {
              var value = $(this).siblings('label').text()
              configurationList.append('<li data-input-name="'+$(this).attr('name')+'" data-sort="3" class="feature">Ekstraudstyr: '+value+'</li>')
            }
          // If not checked
          } else {
            configurationList.find('li[data-input-name="'+$(this).attr('name')+'"]').remove()
          }
        })
      }
    }

    // On click:  Add value to .RequestForm-configuration
    featureSelector.find('.FeatureSelector-option label').click(function(){
      setTimeout(function(){
        setFeaturesInConfList()
      }, 100);
    })

    // On pageload:  Add value to .RequestForm-configuration
    setFeaturesInConfList()

  })
})();
