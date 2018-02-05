(function(){
  moduleScripts.colorSelector = function() {
    console.log('color-selector initiated')

    var colorSelector = $('.ColorSelector')
    var colors = colorSelector.find('.ColorSelector-color')
    var configurationList = $('.RequestForm-configuration ul')
    var initialColor = colorSelector.find('input:checked').closest('.ColorSelector-color').attr('data-color-name') // If an option is selected

    // When page is loaded: set checked color
    $('.ColorSelector-color').each( function(){
      if($(this).find('input').is(':checked')) {
        $(this).addClass('is-selected')
      }
    })

    function setActiveColor(element) {
        $('.ColorSelector-color').each(function () {
            $(this).removeClass('is-selected');
            $(this).find('input').removeAttr('checked');
        });
 
        element.addClass('is-selected');
    }

    // Build colors
    colors.each( function(){
      var color = $(this).attr('data-color')
      var colorName = $(this).attr('data-color-name')
      $(this).find('label').append('<span style="background-color:'+color+';"></span>')
      $(this).append('<span class="ColorSelector-colorLabel">'+colorName+'</span>')
    })


    // When a color is clicked
    $('.ColorSelector-color').click( function() {
      if($('.ColorSelector-color.is-selected').data('color-name') !== $(this).data('color-name')) {
        dataLayer.push({
          event: "form_interact",
          form_field: "color",
          interaction_value: $(this).data('color-name')
        })
      }
      setActiveColor($(this))
      var colorName = $(this).find('.ColorSelector-colorLabel').text()
      setColorInConfList(colorName)
    })

    // Add value to .RequestForm-configuration
    function setColorInConfList(value) {
      if( configurationList.length ) {
        // configurationList.find('li.color').remove()
        configurationList.find('li.color').text('Farve: '+value)
      }
    }

    // On pageload: Add value to .RequestForm-configuration
    setColorInConfList(initialColor)

  }
})();
