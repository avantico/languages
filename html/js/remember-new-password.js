// JavaScript Document

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}





$(document).ready(function() 
{
    $( '#email' ).qtip( 
        { 
			content: 'Вы не ввели E-Mail',
			hide: 
			{
				leave: false
			},
            position:
            {
                my: 'left-center',
                at: 'right center'
            },
            style: 
            {
                tip:
                {
                    width: 14,
                    height: 10
                },
                classes: 'qtip-glex-error-shadow qtip-glex-error'
            } 
        } 
    );	




	$( '.btn-gray-md' ).bind( 'click', function() 
	{
		$( '#email' ).css( 'border', '1px solid red' );		
		$( '#email' ).qtip( "show" );
		
		return false;	
	} );
	
	
});