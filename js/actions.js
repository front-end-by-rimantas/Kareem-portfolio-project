"use strict";

/* HEADER */
window.onscroll = function() {stickToTop()};

$('#header .menu').click(function(){
    $('body').toggleClass('sliding-menu-visible');
});
$('header .menu').click(function(){
    $(this).toggleClass('open');
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