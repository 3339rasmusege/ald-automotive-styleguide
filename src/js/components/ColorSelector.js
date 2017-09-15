(function(){

  var colors = $('.ColorSelector .ColorSelector-color');

  colors.each( function(){
    var color = $(this).attr('data-color')
    var colorName = $(this).attr('data-color-name')
    $(this).find('label').append('<span style="background-color:'+color+';"></span>')
    $(this).append('<span class="ColorSelector-colorLabel">'+colorName+'</span>')
  })

  // When a color is clicked
  $('.ColorSelector-color').click( function() {
    $('.ColorSelector-color').each( function(){
      $(this).removeClass('is-selected')
    })
    if($(this).find('input').is(':checked')) {
      $(this).addClass('is-selected')
    }
  })

})();
