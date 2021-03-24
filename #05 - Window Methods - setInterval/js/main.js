/*global window*/

/*
    setInterval(function, Milliseconds, Param1, Param2, .....)

    clearInterval(Id Or Number Of setInterval)
*/

///////////////////// setInterval & clearInterval //////////////////////////////

var myDiv = window.document.getElementById('show'),

    myCountDown;

function countDown() {

    'use strict';

    if (myDiv.textContent <= 0) {

        myDiv.textContent = 'Done...';

        window.clearInterval(myCountDown);

    } else {

        myDiv.textContent = myDiv.textContent - 1;
    }

    /////////////////////////////// Change Colour //////////////////////////////

    if (myDiv.textContent >= 9) {

        myDiv.style.backgroundColor = 'red';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '50px';

    } else if (myDiv.textContent >= 8) {

        myDiv.style.backgroundColor = 'blue';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '100px';

    } else if (myDiv.textContent >= 7) {

        myDiv.style.backgroundColor = 'green';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '150px';

    } else if (myDiv.textContent >= 6) {

        myDiv.style.backgroundColor = 'orange';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '200px';

    } else if (myDiv.textContent >= 5) {

        myDiv.style.backgroundColor = 'yellow';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '250px';

    } else if (myDiv.textContent >= 4) {

        myDiv.style.backgroundColor = 'red';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '300px';

    } else if (myDiv.textContent >= 3) {

        myDiv.style.backgroundColor = 'blue';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '350px';

    } else if (myDiv.textContent >= 2) {

        myDiv.style.backgroundColor = 'green';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '400px';

    } else if (myDiv.textContent >= 1) {

        myDiv.style.backgroundColor = 'orange';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '450px';

    } else if (myDiv.textContent >= 0) {

        myDiv.style.backgroundColor = 'yellow';

        myDiv.style.color = '#fff';

        myDiv.style.marginLeft = '500px';

    } else {

        myDiv.style.backgroundColor = '#fff';

        myDiv.style.color = '#000';

        // myDiv.style.marginLeft = '0';
    }
}

////////////////////////////// Start Count /////////////////////////////////////

myCountDown = window.setInterval(countDown, 200);
