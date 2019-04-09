"use strict";

/* HEADER */



/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
function renderCards( data ) {
    var HTML = '';
    for ( var i=0; i<data.length; i++ ) {
        console.log( data[i].icon );
        console.log( data[i].title );
        console.log( data[i].number );
        HTML += '<div class="card">\
                    <i class="fa '+data[i].icon+'"></i>\
                    <div class="number">'+data[i].number+'</div>\
                    <div class="title">'+data[i].title+'</div>\
                </div>';
    }
    return HTML;
}


/* SKILLS */



/* LATEST WORKS */



/* JOB HISTORY */



/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */