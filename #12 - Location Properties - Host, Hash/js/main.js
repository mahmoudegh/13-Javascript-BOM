/*global window*/

window.console.log(window.location.href);

window.console.log(window.location.host);

window.location.host = 'https://www.google.com';

window.console.log(window.location.hash);

window.location.hash = '#mahmoud';

if (window.location.hash.indexOf('mahmoud') > -1) {

    window.console.log('Congratulation You Have Coming From Chat Link');
} else {

    window.console.log('Sorry You Have Not Coming From Chat Link');
}
