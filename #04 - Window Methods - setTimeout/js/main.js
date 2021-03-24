/*global window*/

/*
    setTimeout(function, Milliseconds, Param1, Param2, .....)
*/

var myButton = window.document.getElementById('click');

/////////////////////////////// setTimeout /////////////////////////////////////

function sayHello() {

    'use strict';

    window.console.log('Hello After 3 Seconds.');
}

var myTime = window.setTimeout(sayHello, 3000);

////////////////////////////// clearTimeout ////////////////////////////////////

myButton.onclick = function () {

    'use strict';

    window.clearTimeout(1);
};
