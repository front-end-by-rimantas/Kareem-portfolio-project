"use strict";

/* HEADER */
function stickToTop() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
}

function detectVisibleSection( scrollHeight ) {
    var elementu_auksciai = [];

    $('#header_menu > .part-left > a').each(function(){
        var einamoji_nuoroda = $(this).attr('href'),
            busena = '';
    
        if ( einamoji_nuoroda[0] !== '#' ) {
            busena = 'normalus URL';
        } else {
            if ( einamoji_nuoroda.length <= 1 ) {
                busena = 'per trumpas';
                elementu_auksciai.push(0);
            } else {
                busena = 'normaliai';
                elementu_auksciai.push( $(einamoji_nuoroda).position().top );
                // elementu_auksciai.push( $(einamoji_nuoroda)[0].offsetTop );
            }
        }
    });
    
    elementu_auksciai.forEach(element => {
        if ( element > $(window).scrollTop() ) {
            // pries tai buves yra tas kurio reikia
            break;
        }
    });

    return;
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
             !data[i].title ||
             typeof(data[i].title) !== 'string' ||
             data[i].title.length < 1 ) {
            continue;
        }
        // tikriname ar nevirsijome leistimu sugeneruoti elementu skaiciaus
        if ( good_ones >= 4 ) {
            break;
        }
        if ( data[i].number ){
            HTML += '<div class="card">\
                        <i class="fa fa-'+data[i].icon+'"></i>\
                        <div class="number">'+data[i].number+'</div>\
                        <div class="title">'+data[i].title+'</div>\
                    </div>';
            good_ones++;
        }
        if ( data[i].p ){
            HTML += '<div class="card">\
                        <i class="fa fa-'+data[i].icon+'"></i>\
                        <div class="title">'+data[i].title+'</div>\
                        <div class="p">'+data[i].p+'</div>\
                    </div>';
            good_ones++;
        }
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
function renderWorks( data ) {
    var HTML = '',
        filter_HTML = '',
        items_HTML = '',
        unique_filters = [],
        ar_unikalu = false;
    if ( !Array.isArray(data) || data.length === 0 ){
        return HTML;
    }

    for ( var i=0; i<data.length; i++ ) {
        if ( unique_filters.indexOf( data[i].categories ) === -1 ) {
            // capitalize category title
            filter_HTML += '<div>'+data[i].categories[0].toUpperCase() + data[i].categories.slice(1)+'</div>';
            unique_filters.push( data[i].categories );
        }
        // ar_unikalu = true;
        // for ( var u=0; u<unique_filters.length; u++ ) {
        //     if ( unique_filters[u] === data[i].categories ) {
        //         ar_unikalu = false;
        //         break;
        //     }
        // }
        // if ( ar_unikalu === true ) {
        //     filter_HTML += '<div class="">\
        //                         '+data[i].categories+'\
        //                     </div>';
        //     unique_filters.push( data[i].categories );
        // }
    }

    for ( var i=0; i<data.length; i++ ) {
        items_HTML += '<div class="item" style="background-image: url(img/works/'+data[i].img+');">\
                        <div class="background">\
                            <div class="texts">\
                                <h4>'+data[i].title+'</h4>\
                                <span>'+data[i].categories+'</span>\
                            </div>\
                        </div>\
                    </div>';
    }

    HTML += '<div class="gallery">\
                <div class="filter">\
                    <div class="">All</div>\
                    '+filter_HTML+'\
                </div>\
                <div class="item-list">\
                    '+items_HTML+'\
                </div>\
            </div>';

    return HTML;
}


/* JOB HISTORY */
/**
 * Rendering list of job history
 * @param {array} data - list of objects {title}
 * @returns {string} HTML of job history boxes
 */
function renderHistory( data ){
    var HTML = '',
        date_to = '',
        date_from = '';
    if ( !Array.isArray(data) || data.length === 0 ){
        return HTML;
    }
    for ( var i=0; i<data.length; i++) {
        if ( !data[i].title ||
            typeof(data[i].title) !== 'string' ||
            data[i].title.length < 1 ||
            data[i].title.length > 30 ||
            typeof(data[i].p) !== 'string' ||
            data[i].p.length < 1 ||
            data[i].p.length > 140 ||
            typeof(data[i].date_from) !== 'string' ||
            data[i].date_from.length !== 10 ) {
           continue;
        }
        date_from = dateConverter( data[i].date_from );
        date_to = dateConverter( data[i].date_to );
        if ( date_to === '' ) {
            date_to = 'Present';
        }
        HTML += '<div class="job-box">\
                    <div class="content">\
                        <div class="top-section">\
                            <div class="top-left">\
                                <h4>'+data[i].title+'</h4>\
                                <p>'+data[i].address+'</p>\
                            </div>\
                            <div class="btn-right">\
                                <a href="#" class="btn" style= "float: right">'+ date_from +' to '+ date_to +'</a>\
                            </div>\
                        </div>\
                        <div class="bottom-section">\
                            <p>'+data[i].p+'</p>\
                        </div>\
                    </div>\
                </div>';
    }
    return HTML;
}

/**
 * Function for date convertion from e.g. "2018-01-05" to "Jan'05"
 * @param {string} date 
 * @returns {string} Formated date value
 */
function dateConverter( date ) {
    var formated = '',
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        values = date.split("-");
    
    if ( typeof(date) !== 'string' ||
         date === '' ) {
        return formated;
    }
    
    values[1] = parseInt(values[1]) - 1;

    formated = months[ values[1] ] + '\'' + values[2];

    return formated;
}


/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */