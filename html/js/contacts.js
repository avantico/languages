// JavaScript Document

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}


function customSelect()
{

    var obj = '.custom-select div[class ^= sel-]',
        bl = $(obj),
        prnt,val,valV;

    $('.switch', bl).click( function()
    {
        prnt = $( this ).parents( obj );
        $('.dd', prnt).slideDown( 200 );

        return false;
    } );

    $('.dd a', bl).click( function()
    {
        prnt = $( this ).parents( bl ).eq(4);
        $(' .dd ', prnt).slideUp( 200 );
        val = $( this ).attr( 'href' );
        valV = $( this ).html();
        $( '.dd li', bl ).removeClass( 'selected' );
        $(this).parents( 'li' ).addClass( 'selected' );
        $( 'input:hidden', prnt ).val( val ).trigger( 'blur' );
        $( '.switch span span', prnt).html( valV );
        $( '.dd li .last', bl).removeClass( 'last' );
        $( '.dd li:visible:last:not( selected ) a', bl).addClass( 'last' );

        return false;
    } );
    
    $( bl ).mouseleave( function()
    {
        $( 'input:hidden', this ).trigger( 'blur' );
        $( '.dd', this ).slideUp( 200 );
    } );

}



$(document).ready(function() 
{
	
	$('.post .map').click(
		function( e ) 
		{
		    $( '#map' ).lightbox_me(
				{
		    	    centered: true,
					closeSelector: '.btn-lightbox-close'
       		 	}
			);
			e.preventDefault();
		}
	);	
	
	
    $( '#name' ).qtip( 
        { 
			content: 'Вы не указали имя',
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

    $( '#message' ).qtip( 
        { 
			content: 'Вы не написали сообщение',
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


	customSelect();
	

	$( '.btn-green-md' ).bind( 'click', function() 
	{
		$( '#name' ).css( 'border', '1px solid red' );
		$( '#name' ).qtip( "show" );

		$( '#message' ).css( 'border', '1px solid red' );
		$( '#message' ).qtip( "show" );
		
		return false;	
	} );
	
	
});