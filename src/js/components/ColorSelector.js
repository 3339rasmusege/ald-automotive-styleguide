(function(){
  $(window).bind("load", function() {

    var colors = $('.ColorSelector .ColorSelector-color');

    // When page is loaded: set checked color
    $('.ColorSelector-color').each( function(){
      if($(this).find('input').is(':checked')) {
        $(this).addClass('is-selected')
      }
    })

    function setActiveColor(element) {
      $('.ColorSelector-color').each( function(){
        $(this).removeClass('is-selected')
        $(this).find('input').removeAttr('checked')
      })
      if(element.find('input').is(':checked')) {
        element.addClass('is-selected')
      }
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
      setActiveColor($(this))
    })
  })
})();
