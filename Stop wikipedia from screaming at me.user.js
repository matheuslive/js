// ==UserScript==
// @name         Stop wikipedia from screaming at me
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stops wikipedia from yelling at you about donating by setting the "hide_fundraising" cookie.
// @author       You
// @match        https://*.wikipedia.org/*
// @match        http://*.wikipedia.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=wikipedia.org
// @grant        none
// @license MIT 
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    // Set a Cookie
    function setCookie(cName, cValue, expDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
    setCookie("centralnotice_hide_fundraising", encodeURIComponent(JSON.stringify({"v":1,"created":Math.round((new Date()).getTime() / 1000),"reason":"donate close"})), 40 );
    // {"v":1,"created":1672385956,"reason":"donate close"}

    document.querySelector("#content > div.banner-container").remove()

})();
