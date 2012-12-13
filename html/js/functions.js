//------ Content
function styleHelper(){

    $('.clear-float').each(function(){$(this).append('<br class="clear">').css('overflow','visible');});

    $('.btn-up').click(function(){$(window).scrollTo(0,800);});

    if($.browser.msie){
        if($.browser.version < 8){
            $('a').attr('hideFocus','true').css('outline','none');
            $('footer').removeClass('grd-a');
        }
    }
}

function promoBl(){
    var bl = $('#promo-bl'),
        parts = $('> .part', bl),
        nav = $('.nav', bl),
        navLnks = $('a', nav),
        partOfs = 70,
        partOpn = 315,
        speed = 300,
        winW, partW, prnt, name;

    $(window).resize(function(){
        winW = $(window).width();
        if(winW < 1000){winW = 1000}
        partW = (winW - 10) / 2;
        parts.css({width: partW});

        $('.active', bl).stop(true).css({width: partW + partOpn}).siblings().stop(true).css({width: partW - partOpn});

    }).trigger('resize');

    /*parts.mouseenter(function(){
        if(!($(this).hasClass('active')) && !($(this).hasClass('passive'))){
            $(this).stop(true).animate({zIndex: 510,width: partW + partOfs}, speed).siblings().stop(true).animate({zIndex: 500,width: partW - partOfs}, speed);
        }
    });

    bl.mouseleave(function(){
        if(!(parts.hasClass('active')) && !(parts.hasClass('passive'))){
            parts.stop(true).animate({zIndex: 500,width: partW}, speed);
        }
    });*/

    navLnks.click(function(){
        var a = $(this);

        if(a.hasClass('selected') || a.hasClass('disabled')){return false;}

        navLnks.addClass('disabled');

        prnt = a.parents('.part');
        name = a.text();
        $('H1 .name', prnt).text(name);

        if(!(prnt.hasClass('active')) && !(prnt.hasClass('passive'))){

            prnt.stop(true).animate({zIndex: 510,width: '+=' + partOpn}, speed).siblings().stop(true).animate({zIndex: 500,width: '-=' + partOpn}, speed, function(){prBlOpen(prnt,a);});

            if(prnt.hasClass('l')){
                $('h1, .nav', prnt).animate({right: '+=' + partOpn}, speed);
                $('.r .nav', bl).animate({left: 70}, speed);
            }
            else if(prnt.hasClass('r')){
                $('h1, .nav', prnt).animate({left: '+=' + partOpn}, speed);
                $('.l .nav', bl).animate({right: 70}, speed);
            }
        }
        else if(prnt.hasClass('passive')){

            prnt.stop(true).animate({zIndex: 510,width: '+=' + (partOpn * 2)}, speed).siblings().stop(true).animate({zIndex: 500,width: '-=' + (partOpn * 2)}, speed, function(){prBlOpen(prnt,a);});

            if(prnt.hasClass('l')){
                $('.nav', prnt).animate({right: '+=' + (partOpn * 2)}, speed);
                $('h1', prnt).animate({right: '+=' + (partOpn)}, speed);
                $('.r h1, .r .nav', bl).animate({left: 70}, speed);
                $('.r .block', bl).fadeOut(speed);
                $('.r .block img,.r .block .txt', bl).fadeOut(speed);
            }
            else if(prnt.hasClass('r')){
                $('.nav', prnt).animate({left: '+=' + (partOpn * 2)}, speed);
                $('h1', prnt).animate({left: '+=' + (partOpn)}, speed);
                $('.l h1, .l .nav', bl).animate({right: 70}, speed);
                $('.l .block', bl).fadeOut(speed);
                $('.l .block img,.l .block .txt', bl).fadeOut(speed);
            }
        }
        else if(prnt.hasClass('active')){
            prBlOpen(prnt,a);
        }

        prnt.removeClass('passive').addClass('active').siblings().removeClass('active').addClass('passive');
        navLnks.removeClass('selected');
        a.addClass('selected');
        return false;
    });

    $('.close', bl).click(function(){
        prBlClose();
        return false;
    });

    function prBlOpen(prnt,a){

        var blockNew = $('.block.new', prnt),
            blockOld = $('.block.old', prnt);

        blockNew.css({zIndex: 600}).show().removeClass('new').addClass('old');
        blockOld.css({zIndex: 550});

        $('.bg', blockNew).attr('src',a.data('bg'));
        $('.txt', blockNew).html(a.data('txt'));
        $('img:first', blockNew).attr('src',a.data('img'));

        $.imgpreload([a.data('bg'),a.data('img')],function(){
            $('.bg', blockNew).fadeIn(speed);
            $('img:first', blockOld).hide();
            $('.txt', blockNew).delay(speed).fadeIn(speed);
            $('img:first', blockNew).delay(speed + 500).fadeIn(speed);
            blockOld.delay(speed + 500).fadeOut(speed,function(){
                $(this).removeClass('old').addClass('new')
                $('img, .txt', this).hide();
                navLnks.removeClass('disabled');
            });
        });
    }

    function prBlClose(){
        var active = $('> .active', bl);
        $('.block', bl).fadeOut(speed,function(){$('img, .txt', this).hide();});
        active.stop(true).animate({zIndex: 510,width: '-=' + partOpn}, speed).siblings().stop(true).animate({zIndex: 500,width: '+=' + partOpn}, speed, function(){
            parts.removeClass('active').removeClass('passive');
        });
        navLnks.removeClass('selected');
        if(active.hasClass('l')){
            $('h1, .nav', active).animate({right: '-=' + partOpn}, speed);
            $('.r .nav', bl).animate({left: 368}, speed);
        }
        else if(active.hasClass('r')){
            $('h1, .nav', active).animate({left: '-=' + partOpn}, speed);
            $('.l .nav', bl).animate({right: 368}, speed);
        }
    }
}



function carousel(){

    $('.carousel-bl').each(function(){
        var wrp = $('.carousel', this),
            prv = $('.prev', this),
            nxt = $('.next', this);

        wrp.carouFredSel({
            circular: true,
            infinite: false,
            prev: prv,
            next: nxt,
            items: {visible: 1},
            auto: {play: true, delay: 4000}
        });
    });
}

//------ Form
$.fn.jQueryInputHints = function(options){var opts = jQuery.extend({},jQuery.fn.jQueryInputHints.defaults, options);object = jQuery(this);return this.each(function(){object.val(opts.hintText);if(object.val() == null || object.val() == '')object.val(opts.hintText);object.focus(function(){if(jQuery(this).val() == opts.hintText) {jQuery(this).val('').removeClass('plh-enabled');}});object.blur(function(){if(jQuery(this).val() == ''){jQuery(this).val(opts.hintText).addClass('plh-enabled');}});});}
function placeholder(){var h = $('.placeholder'),val;h.each(function(){val = $(this).val();$(this).addClass('plh-enabled').jQueryInputHints({hintText:val});});}

function selectEm()
{

    var obj = '.form-a div[class ^= sel-]',
        bl = $( obj ),
        prnt, val, valV;

    $( '.switch', bl ).click( function()
    {
        prnt = $( this ).parents( obj );
        $( '.dd', prnt ).slideDown( 200 );

        return false;
    } );

    $('.dd a', bl ).click( function()
    {
        prnt = $( this ).parents( bl ).eq(4);

        $(' .dd ', prnt).slideUp( 200 );
        val = $( this ).attr( 'href' );
        valV = $( this ).html();
        $( '.dd li', bl ).removeClass( 'selected' );
        $( this ).parents( 'li' ).addClass( 'selected' );
        $( 'input:hidden', prnt ).val( val ).trigger( 'blur' ); 
        $( '.switch span span', prnt ).html( valV );
        $( '.dd li .last', bl ).removeClass( 'last' );
        $( '.dd li:visible:last:not( selected ) a', bl ).addClass( 'last' );

        return false;
    } );
    
    $( bl ).mouseleave( function()
    {
        $( 'input:hidden', this ).trigger( 'blur' );
        $( '.dd', this ).slideUp( 200 );
    } );

}

function cboxEm(){
    var bl = $('form .cbox-cont'),
        prnt;

    bl.each(function(){
        $('input', this).css('opacity','0').after('<span class="switch"></span>');
        $('.switch, label', this).click(function(){
            prnt = $(this).parents('.cbox-cont');
            if($('.switch', prnt).hasClass('checked')){
                $('input', prnt).prop({checked:false}).trigger('blur');
                $('.switch', prnt).removeClass('checked');
            }
            else{
                $('input', prnt).prop({checked:true}).trigger('blur');
                $('.switch', prnt).addClass('checked');
                prnt.removeClass('error');
            }
            return false;
        });
    });
}

function goValid(){
    var form = $(this).parents('form'),
    prnt = $('.field-cont'),
    emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
    urlReg = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2,4})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;

    if($(this).hasClass('vld-req')){
        if($.trim($(this).val()) == '' || $(this).hasClass('plh-enabled')){$(this).addClass('invalid').parents(prnt).addClass('error');}
        else {$(this).removeClass('invalid').parents(prnt).removeClass('error');}
    }
    else if($(this).hasClass('vld-mail')){
        if(!emailReg.test($(this).val()) || $(this).hasClass('plh-enabled')){$(this).addClass('invalid').parents(prnt).addClass('error');}
        else {$(this).removeClass('invalid').parents(prnt).removeClass('error');}
    }

    var invalid = form.find('.invalid:visible, .sel-cont .invalid:hidden').length;
    if(invalid > 0){$('.btn-sbm', form).addClass('disabled'); return false;}
    else {$('.btn-sbm', form).removeClass('disabled'); return true;}
}

function formFunc(){

    var form = $('form'),
        cont = $('.inp-cont, .cbox-cont, .file-uploader', form),
        fields = $('.vld-req, .vld-mail, .vld-url, .vld-cbox, .vld-sel, .vld-file', form);

    cont
        .addClass('field-cont');

    fields
        .addClass('invalid')
        .blur(goValid);

    //--- Form submit
    form.submit(function(){
        fields.blur();
        if($('.btn-sbm', this).hasClass('disabled')){return false;}

        // ----- FORM SUBMIT!

    });

    $('.btn-sbm', form).click(function(){$(this).parents('form').submit(); return false;});
    form.keypress(function(e){if(e.keyCode == 13){$(this).submit();}});

    //--- Emulate
    selectEm();
}

////////////////////////////////////////////////////////////

$(document).ready(function() {

    styleHelper();
    promoBl();
    carousel();
    placeholder();
    formFunc();

});