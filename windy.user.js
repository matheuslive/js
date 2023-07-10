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

console.log('Starting script..')

if (W.rootScope.community === 'https://community.windy.com') {
	console.log('its windy!!')
	W.Switch.getEl("satellite").click();
}

console.log('end script..')