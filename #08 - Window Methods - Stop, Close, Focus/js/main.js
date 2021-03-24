/*global window*/

/*
    scrollBy(x, y);
    scrollTo(x, y);
*/

var myButton = window.document.getElementsByTagName('button'),

    myNewWindow;

//////////////////////////////// window.open(); ////////////////////////////////

myButton[0].onclick = function () {

    'use strict';

    myNewWindow = window.open('https://www.google.com', 'Google', 'width=300,height=300,top=250,left=250');
};

/////////////////////////////// window.close(); ////////////////////////////////

myButton[1].onclick = function () {

    'use strict';

    myNewWindow.close();
};

/////////////////////////////// window.focus(); ////////////////////////////////

myButton[2].onclick = function () {

    'use strict';

    myNewWindow.focus();
};
