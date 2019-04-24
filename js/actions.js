"use strict";

/* HEADER */
window.onscroll = function() {stickToTop()};

$('#header .menu').click(function(){
    var visible_menu = false;
    if ( $(this).hasClass('open') ) {
        visible_menu = true;
    }
    $(this).toggleClass('open');

    if ( visible_menu ) {
        $(".sliding-menu > .sliding-part.part-right").animate({
            'margin-right': -500
        }, 1000);
    
        $(".sliding-menu > .sliding-part.part-left").animate({
            'margin-left': -500
        }, 1000, function() {
            // Animation complete.
            $('body').toggleClass('sliding-menu-visible');
        });

    } else {
        $('body').toggleClass('sliding-menu-visible');

        $(".sliding-menu > .sliding-part.part-right").animate({
            'margin-right': 0
        }, 2000);
    
        $(".sliding-menu > .sliding-part.part-left").animate({
            'margin-left': 0
        }, 2000);
    }
});



/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
document.getElementById('statistics_cards').innerHTML = renderCards( statistics );


/* SKILLS */
document.getElementById('skills_progress_bars').innerHTML = renderSkills( skills );
// document.getElementById('offers').innerHTML = renderCards( offers );
$('#offers').html( renderCards( offers ) );

/* LATEST WORKS */
document.getElementById('latest_works').innerHTML = renderWorks( works );

$('.gallery > .filter > div').click(function(){
    console.log( $(this).text() );
});

$('.item-list > .item').click(function(){
    console.log( $(this).find('.background > .texts > h4').text() );
    // $(this).addClass('labasRytas');
    // $(this).removeClass('labas-rytas');
    // $(this).toggleClass('labas-rytas');
});


/* JOB HISTORY */
document.getElementById('history').innerHTML = renderHistory( jobs );


/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */

$( window ).scroll(function() {
    console.log( $(window).scrollTop() );
});