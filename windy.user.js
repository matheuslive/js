// ==UserScript==
// @name	     Windyty UserScript
// @description  Windyty
// @version      0.0.1
// @namespace	 karrdozo
// @match	     http://localhost/*
// @license      MIT
// @run-at	     document-idle
// @grant        none
// ==/UserScript==


if (W.rootScope.community === 'https://community.windy.com') {
	W.Switch.getEl("satellite").click();
}


