// JavaScript Document

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}



$(document).ready(function() 
{

	$( '.who-scheme .list-agents a' ).qtip( 
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

});