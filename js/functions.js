"use strict";

/* HEADER */
function stickToTop() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

/* HERO */



/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */

/**
 * Rendering list of statistics or services cards
 * @param {array} data - list of objects, contains {icon, number, title}
 * @returns {string} HTML of cards
 */
function renderCards( data ) {
    var HTML = '',
        good_ones = 0;
    
    if ( !Array.isArray(data) || data.length === 0 ) {
        return HTML;
    }

    for ( var i=0; i<data.length; i++ ) {
        // tikriname ar yra reikiamos reiksmes objekte
        if ( !data[i].icon ||
             typeof(data[i].icon) !== 'string' ||
             data[i].icon.length < 1 ||
             !data[i].number ||
             (''+data[i].number).length > 9 ||
             !data[i].title ||
             typeof(data[i].title) !== 'string' ||
             data[i].title.length < 1 ) {
            continue;
        }
        // tikriname ar nevirsijome leistimu sugeneruoti elementu skaiciaus
        if ( good_ones >= 4 ) {
            break;
        }
        HTML += '<div class="card">\
                    <i class="fa fa-'+data[i].icon+'"></i>\
                    <div class="number">'+data[i].number+'</div>\
                    <div class="title">'+data[i].title+'</div>\
                </div>';
        good_ones++;
    }
    return HTML;
}

/* SKILLS */
/**
 * Rendering list of progress bars
 * @param {array} data - list of objects, contains {title, value}
 * @returns {string} HTML of progress bars
 */
function renderSkills( data ) {
    var HTML = '';
    
    if ( !Array.isArray(data) || data.length === 0 ) {
        return HTML;
    }

    for ( var i=0; i<data.length; i++ ) {
        if ( !data[i].title ||
             typeof(data[i].title) !== 'string' ||
             data[i].title.length < 1 ||
             data[i].title.length > 30 ||
             !data[i].value ||
             typeof(data[i].value) !== 'number' ||
             data[i].value < 0 ||
             data[i].value > 100 ) {
            continue;
        }
        HTML += '<div class="progress-bar">\
                    <div class="title">'+data[i].title+'</div>\
                    <div class="bar">\
                        <div class="value" style="width: '+data[i].value+'%;">\
                            <div class="loading-part">\
                                <div class="vertical-line"></div>\
                                <div class="text-value">'+data[i].value+'%</div>\
                            </div>\
                        </div>\
                    </div>\
                </div>';
    }

    return HTML;
}


/* LATEST WORKS */



/* JOB HISTORY */



/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */