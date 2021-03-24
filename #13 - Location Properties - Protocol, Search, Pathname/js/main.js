/*global window*/

/*
    Protocol:
    ========
    - HTTP ==> Hyper Text Transfer Protocol.
    - HTTPS ==> Hyper Text Transfer Protocol Secured.
    - FTP  ==> File Transfer Protocol.
    - File.
    - Mailto.
*/

/////////////////// #01 - location.protocol[get & set] /////////////////////////

window.console.log(window.location.protocol);

//window.location.protocol = 'mailto';


///////////////////// #02 - location.search[get & set] /////////////////////////

window.console.log(window.location.search);

//window.location.search = '';


///////////////////// #03 - location.pathname[get & set] ///////////////////////

window.console.log(window.location.pathname);

//window.location.pathname = '';


/////////////////////////////// #04 - Summary //////////////////////////////////

window.console.log(window.location.hostname + window.location.pathname + window.location.search); //Compelet Url
