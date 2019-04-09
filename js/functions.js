"use strict";

/* HEADER */
window.onscroll = () => {
    const nav = document.querySelector('#container_menu');
    if(this.scrollY <= 200) nav.className = ''; else nav.className = 'scroll';
  };

  /* Opening meniu function*/

  function atsidarymas () {
      if (mySidenav.width !== '0' && mySidenavright.width !== '0') {
        return document.getElementById("mySidenav").style.width = "50%", document.getElementById("mySidenavright").style.width = "50%"
      }
  }
//   function openNav() {
//     document.getElementById("mySidenav").style.width = "50%";
//   }
//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }
//   function openNavRight() {
//     document.getElementById("mySidenavright").style.width = "50%";
//   }
//   function closeNavRight() {
//     document.getElementById("mySidenavright").style.width = "0";
//   }
/* HERO */
function myFunction(x) {
  x.classList.toggle("change");
}


/* CLIENT LOGOS */



/* ABOUT MYSELF */



/* STATISTICS and SERVICE OFFERS */
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



/* LATEST WORKS */



/* JOB HISTORY */



/* TESTIMONIALS */



/* CONTACT ME */



/* FOOTER */



/* BACKT TO TOP */