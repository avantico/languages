// JavaScript Document

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}





$(document).ready(function() 
{

	$( '.questions .question > a' ).each( function(){
		
		$( this ).click( function(){

			$( this ).parent().find( '.answer' ).toggleClass( 'show' );
			return false;
			
		} );		

	} );
	
});