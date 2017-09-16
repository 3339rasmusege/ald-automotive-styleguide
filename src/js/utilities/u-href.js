(function(){
  $(window).bind("load", function() {

    $('[data-href]').click( function(){
      var href = $(this).attr('data-href')
      if( href.length ) {
        window.location.href = href
      }
    })

  })
})();
