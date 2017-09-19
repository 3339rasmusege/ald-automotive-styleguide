(function(){
  window.addEventListener('trigger-load', function() {
    console.log('u-hrefs initiated')

    $('[data-href]').click( function(){
      var href = $(this).attr('data-href')
      if( href.length ) {
        window.location.href = href
      }
    })

  })
})();
