/*global window*/

/*
    window.open(Url, Name Or Attribute, Specification, History Replace)
*/

window.document.getElementById('open').onclick = function () {

    'use strict';

    window.open('https://www.google.com', '_blank', 'width=400,height=400,left=400,top=400,menubar=no,status=no', 'true');
};
