$(document).ready(function(){
    
    //Chargement des 3 picto en fonciton du scroll
    $( function () {
    
    var charts = $( ".col-3 img" );
    
    /* FUNCTIONS */
    
    // Return boolean when an element is partially visible on screen
    function isPartialVisible ( element ) {
        var
            viewPortHeight = $( window ).height(), // Viewport Height
            scrollTop = $( window ).scrollTop(), // Scroll Top
            currElementPosY = $( element ).offset().top,
            elementHeight = $( element ).height();
        
        return ( ( currElementPosY + elementHeight + elementHeight ) > scrollTop && currElementPosY < ( viewPortHeight + scrollTop ) );
    }
    
    // Return boolean when an element is wholly visible on screen
    function isWholeVisible( element ) { 
        var 
            viewPortHeight = $( window ).height(), // Viewport Height
            scrollTop = $( window ).scrollTop(), // Scroll Top
            currElementPosY = $( element ).offset().top,
            elementHeight = $( element ).height();
        
        return ( currElementPosY > scrollTop && currElementPosY + elementHeight < ( viewPortHeight + scrollTop ) );
    }
    
    // Animate chart only when you see it
    function animateChartWhenVisible ( chart ) {
        for ( var i = 0, count = chart.length; i < count; i++ ) {
            if ( isWholeVisible( chart[ i ] )  ) {
                $( chart[ i ] ).addClass("flipInY");
            }
        }
    }
    
    /* FUNCTIONS END */
    
    // On scroll
    $( window ).scroll( function () {  
        animateChartWhenVisible( charts );
    } );
    
    /* On load */    
    animateChartWhenVisible( charts );
    
} );
    
    
    //Chargement des boutons en fonciton du scroll
    $( function () {
    
    var charts = $( "button" );
    
    /* FUNCTIONS */
    
    // Return boolean when an element is partially visible on screen
    function isPartialVisible ( element ) {
        var
            viewPortHeight = $( window ).height(), // Viewport Height
            scrollTop = $( window ).scrollTop(), // Scroll Top
            currElementPosY = $( element ).offset().top,
            elementHeight = $( element ).height();
        
        return ( ( currElementPosY + elementHeight + elementHeight ) > scrollTop && currElementPosY < ( viewPortHeight + scrollTop ) );
    }
    
    // Return boolean when an element is wholly visible on screen
    function isWholeVisible( element ) { 
        var 
            viewPortHeight = $( window ).height(), // Viewport Height
            scrollTop = $( window ).scrollTop(), // Scroll Top
            currElementPosY = $( element ).offset().top,
            elementHeight = $( element ).height();
        
        return ( currElementPosY > scrollTop && currElementPosY + elementHeight < ( viewPortHeight + scrollTop ) );
    }
    
    // Animate chart only when you see it
    function animateChartWhenVisible ( chart ) {
        for ( var i = 0, count = chart.length; i < count; i++ ) {
            if ( isWholeVisible( chart[ i ] )  ) {
                $( chart[ i ] ).addClass("bounceIn");
            }
        }
    }
    
    /* FUNCTIONS END */
    
    // On scroll
    $( window ).scroll( function () {  
        animateChartWhenVisible( charts );
    } );
    
    /* On load */    
    animateChartWhenVisible( charts );
    
} );
    
    
    
    // animation burger menu mobil version
	$('#nav-mobil').click(function(){
        
		$(this).toggleClass('open');
        
         if($('#nav-mobil').hasClass('open')){
            $('.menu ul').css('visibility', 'visible');
            $('.menu ul').css('height', 'auto');
             $('.menu ul').css('padding', '50px 0px');
           } else {
            $('.menu ul').css('visibility', 'hidden');
            $('.menu ul').css('height', '0px');
            $('.menu ul').css('padding', '0px 0px');
           }
	});
    
    
    // hover menu-top icon video
    $('#video-icon').hover(function(){
        $(this).attr('src', 'img/video-hover.svg');   
        }, function(){
    
        $(this).attr('src', 'img/video.svg'); 
    });

    // hover menu-top icon fb
    $('#fb-icon').hover(function(){
            $(this).fadeIn().attr('src', 'img/fb-hover.svg');   
        }, function(){

            $(this).attr('src', 'img/fb.svg'); 
        });

    // hover menu-top icon twitter
    $('#twitter-icon').hover(function(){
            $(this).attr('src', 'img/twitter-hover.svg');   
        }, function(){
    
        $(this).attr('src', 'img/twitter.svg'); 
    });

    
    
});