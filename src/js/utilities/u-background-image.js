(function(){
  $(window).bind("load", function() {

    $('[data-background-image]').each( function() {
      var imageUrl = $(this).attr('data-background-image')
      $(this).css({
        'background-image': 'url('+imageUrl+')'
      })
    })

  })
})();
