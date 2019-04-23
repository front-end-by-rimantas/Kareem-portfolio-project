"use strict";

/* HEADER */
window.onscroll = function() {stickToTop()};



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
    var category_name = $(this).attr('data-filter');
    console.log( category_name );

    if ( category_name === 'all' ) {
        $('.gallery > .item-list > .item').show();
    } else {
        $('.gallery > .item-list > .item').hide();
        $('.gallery > .item-list > .item span[data-filter="'+category_name+'"]').parents('.item').show();

    }
});

$('.item-list > .item').click(function(){
    console.log( $(this).find('.background > .texts > h4').text() );
    // $(this).addClass('labas-rytas');
    // $(this).removeClass('labas-rytas');
    // $(this).toggleClass('labas-rytas');
});


/* JOB HISTORY */
document.getElementById('history').innerHTML = renderHistory( jobs );


/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */