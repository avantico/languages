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

    $( '.reg-bl a.help' ).qtip( 
        { 
            position:
            {
                my: 'bottom-center',
                at: 'top center'
            },
            style: 
            {
                tip:
                {
                    width: 14,
                    height: 10
                },
                classes: 'qtip-glex-shadow qtip-glex'
            } 
        } 
    );
	
	
    $( '#company' ).qtip( 
        { 
			content: 'Вы не ввели название компании',
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

	$( '.reg-bl .agree').checkbox(
	{
		className: 'custom-checkbox',
		checkedClass: 'custom-checkbox-on',
	} );

    customSelect();
	

	$( '.btn-green-md' ).bind( 'click', function() 
	{
		$( '#company' ).css( 'border', '1px solid red' );
		
		$( '#company' ).qtip( "show" );
		
		return false;	
	} );
	
	
});