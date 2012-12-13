// JavaScript Document

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}

$(
    [ 
    'img/icon-small-agents-h.png',
    'img/icon-small-places-h.png',
    ]
).preload();

function showBackToScheme( i )
{
	if ( i >5 ) { i = 5 };
	
	pos = $( '.wrapper .hr-' + i ).position();
	
	$( '.wrapper .box-back-to-scheme').css( 'top', pos.top + 20 ); 
	$( '.wrapper .box-back-to-scheme').css( 'display', 'block' );
}


$(document).ready(function() 
{
    $( '.box-step' ).each( 
        function( index, value )
        {
            $( this ).bind( 'mouseenter mouseleave',
                function()
                {
                    $( '.scheme-bl .hi-box-step-' + ( index + 1 ) ).toggleClass( 'show-hi-box' );
                }
            );

            $( this ).bind( 'click',
                function()
                {
					if ( index < 5  )
					{
						showBackToScheme( index + 1 );
					}
					else
					{
						showBackToScheme( index );						
					}
                    $( window ).scrollTo( '#step-' + ( index + 1 ), 500 );
                }
            );


        }
    );
    
	$( '.wrapper .box-back-to-scheme' ).bind( 'click',
		function()
		{
			$( window ).scrollTo( '.scheme-bl', 500 );
			$( this ).css( 'display', 'none' );			
		}
	);

});