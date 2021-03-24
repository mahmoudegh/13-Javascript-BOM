/*global window*/

/*
    scrollBy(x, y);
    scrollTo(x, y);
*/

///////////////////////////// scrollBy(x, y); //////////////////////////////////

/*window.document.getElementById('scroll').onclick = function () {

    'use strict';

    window.scrollBy(-200, -150);

    window.console.log('Window Scrolled Left ' + window.scrollX);

    window.console.log('Window Scrolled Top ' + window.scrollY);
};*/


///////////////////////////// scrollTo(x, y); //////////////////////////////////

window.document.getElementById('scroll').onclick = function () {

    'use strict';

    window.scrollTo(500, 250);

    window.console.log('Window Scrolled Left ' + window.scrollX);

    window.console.log('Window Scrolled Top ' + window.scrollY);
};
