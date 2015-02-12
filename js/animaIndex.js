$(document).ready(function(){
    TweenMax.from(".cabecera", 0.5, {opacity:0,ease: Power1.easeOut});
    TweenMax.from(".item", 0.5, {opacity:0,ease: Power1.easeOut});
	
    $('#boton1').click(function(){
                TweenMax.to(".cabecera", 0.3, {opacity:0,ease: Power1.easeOut});
                TweenMax.to(".item", 0.3, {opacity:0,ease: Power1.easeOut});
                TweenMax.delayedCall(0.3, myFunction);				
			})
    
    $('#boton1').hover(function(){
                document.body.style.cursor='pointer';
				$(this).css('color','#EBEBEB')
				$(this).css('background-color','#858585')
			}, function(){
                document.body.style.cursor='default';
				$(this).css('color','#858585')
				$(this).css('background-color','#EBEBEB')
			})
    

    function myFunction() {
        window.location.href = 'tae.html';
    }

})