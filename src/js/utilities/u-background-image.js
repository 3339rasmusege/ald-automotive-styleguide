(function(){
  moduleScripts.backgroundImageHelper = function() {
    console.log('background-image initiated')

    $('[data-background-image]').each( function() {
      var imageUrl = $(this).attr('data-background-image')
      $(this).css({
        'background-image': 'url('+imageUrl+')'
      })
    })

  }
})();
