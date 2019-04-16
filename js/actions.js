"use strict";

/* HEADER */
window.onscroll = function() {stickToTop()};


$('#header .menu').click(function(){
    console.log('pirmas mano kartas :)');
    console.log('su jumis... :D');
    
});

/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
document.getElementById('statistics_cards').innerHTML = renderCards( statistics );


/* SKILLS */
document.getElementById('skills_progress_bars').innerHTML = renderSkills( skills );
document.getElementById('offers').innerHTML = renderCards( offers );

/* LATEST WORKS */
document.getElementById('latest_works').innerHTML = renderWorks( works );


/* JOB HISTORY */
document.getElementById('history').innerHTML = renderHistory( jobs );


/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */