$(window).bind("load", function() {
	( function( $, window, document, undefined ){
		$( '.Upload-input' ).each( function(){

			var $input	 = $( this ),
				$uploadList	 = $(this).parent().find('.Upload-list'),
				uploadListVal = $uploadList.html()

			$input.on( 'change', function( e ){
				var fileName = ''

				if( this.files && this.files.length > 1 ) {
					fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length )
				} else if( e.target.value ) {
					fileName = e.target.value.split( '\\' ).pop()
	      }

				if( fileName ) {
					$uploadList.find( 'span' ).html( fileName )
					$uploadList.find('.Upload-listRemove').show()
				} else {
					$uploadList.html( uploadListVal )
	      }
			})

			// Firefox bug fix
			$input
			.on( 'focus', function(){ $input.addClass( 'has-focus' ) })
			.on( 'blur', function(){ $input.removeClass( 'has-focus' ) })
		})

	  // Remove link
	  $('.Upload-listRemove').on('click', function(e) {
	    e.preventDefault();
	    $(this).parent().find('span').html('')
	    $(this).hide()
	  })
	})( jQuery, window, document )
})
