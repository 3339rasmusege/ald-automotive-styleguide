(function(){
  moduleScripts.field = function() {
    console.log('field initiated')

    var Field = $('.Field')

    // Add class to Field when it has been filled out
    function addRemoveClasses(element) {
        if( element.val() ) {
        element.addClass('is-filled')
      } else {
        element.removeClass('is-filled')
        element.removeClass('is-error')
      }
    }

    Field.each( function() {
      addRemoveClasses($(this))
    })

    Field.keyup( function() {
      addRemoveClasses($(this))
    })

    Field.blur( function() {
      dataLayer.push({
        event: "form_interact",
        form_field: "form_field"
      })
    })

  }
})();
