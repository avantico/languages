// JavaScript Document

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}


var selectedAgent = 1;

$( document ).ready(function() 
{
	$('.box-link-to-big-scheme .link').click(
		function( e ) 
		{
		    $( '#how-it-works-scheme' ).lightbox_me(
				{
		    	    centered: true,
					closeSelector: '.btn-lightbox-close'
       		 	}
			);
			e.preventDefault();
		}
	);	
	
	$('.materials-bl .material-link-1').click(
		function( e ) 
		{
		    $( '#window-material-1' ).lightbox_me(
				{
		    	    centered: true,
					closeSelector: '.btn-lightbox-close'
       		 	}
			);
			e.preventDefault();
		}
	);		

	$('.materials-bl .material-link-2').click(
		function( e ) 
		{
		    $( '#window-material-2' ).lightbox_me(
				{
		    	    centered: true,
					closeSelector: '.btn-lightbox-close'
       		 	}
			);
			e.preventDefault();
		}
	);		

	$('.materials-bl .material-link-3').click(
		function( e ) 
		{
		    $( '#window-material-3' ).lightbox_me(
				{
		    	    centered: true,
					closeSelector: '.btn-lightbox-close'
       		 	}
			);
			e.preventDefault();
		}
	);		

	
	$('.who-bl .agents-list li a').each( function ( index, el )
	{
		$( this ).click( function()
		{
			$( '.who-bl ul.agents-list li:eq(' + ( selectedAgent - 1 ) + ')' ).removeClass( 'selected' );
			$( this ).parent().addClass( 'selected' );
			selectedAgent = $( '.who-bl ul.agents-list li' ).index( $( '.who-bl ul.agents-list li.selected' ) ) + 1;
						
			return false;
		} );
	} );
	
	$('.who-bl .agents-list li').each( function ( index, el )
	{
		$( this ).bind( 'mouseenter', function()
		{
			selectedAgent = $( '.who-bl ul.agents-list li' ).index( $( '.who-bl ul.agents-list li.selected' ) ) + 1;
			$( '.who-bl ul.agents-list li:eq(' + ( selectedAgent - 1 ) + ')' ).removeClass( 'selected' );			
			$( '.who-bl ul.show' ).removeClass( 'show' );
			$( '.who-bl .where .content-' + ( index + 1 ) ).addClass( 'show' );
			$( '.who-bl .medium .content-' + ( index + 1 ) ).addClass( 'show' );			
		} );


		$( this ).bind( 'mouseleave', function()
		{
			$( '.who-bl ul.agents-list li:eq(' + ( selectedAgent - 1 ) + ')' ).addClass( 'selected' );			
			$( '.who-bl ul.show' ).removeClass( 'show' );
			$( '.who-bl .where .content-' + selectedAgent ).addClass( 'show' );
			$( '.who-bl .medium .content-' + selectedAgent ).addClass( 'show' );			
		} );
		
	} );
	
});