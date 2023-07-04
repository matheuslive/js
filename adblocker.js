// ==UserScript==
// @name         AdBlock Userscript
// @version      0.0.1
// @author       karrdozo
// @match        http*://*
// @namespace    https://greasyfork.org/users/1115413
// @icon         https://www.google.com/s2/favicons?sz=64&domain=getadblock.com
// @license      MIT
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @require      https://code.jquery.com/jquery-3.6.3.min.js
// @require      https://raw.githubusercontent.com/matheuslive/js/main/filter/global.json
// @description  AdBlock, CSP and DOM element remover
// ==/UserScript==

/* eslint-env jquery */

const cspRule = localStorage.getItem("CSPBlocker");

if (cspRule && cspRule != "disable") {
	const meta = document.createElement("meta");
	meta.setAttribute("http-equiv", "Content-Security-Policy");
	meta.setAttribute("content", cspRule);
	try {
		document.head.append(meta);
	} catch {
		setTimeout(() => {
			document.head.append(meta);
		}, 0);
	}
}

GM_registerMenuCommand("No JavaScript", () => { localStorage.setItem("CSPBlocker", "script-src 'none'") });
GM_registerMenuCommand("No Third-Party", () => { localStorage.setItem("CSPBlocker", "default-src 'unsafe-inline' 'self'") });
GM_registerMenuCommand("Restrict js-elem", () => { localStorage.setItem("CSPBlocker", "script-src-elem 'self'") });
GM_registerMenuCommand("Edit CSP rules", () => {
	var currentRule = localStorage.getItem("CSPBlocker");
	if (currentRule == "disable") {currentRule = null}
	const newrule = prompt("Editing CSP rules", currentRule || "");
	if (newrule && newrule != "") {
		localStorage.setItem("CSPBlocker", newrule)
	}
});
GM_registerMenuCommand("Clear CSP rules", () => { localStorage.setItem("CSPBlocker", "disable") });
GM_registerMenuCommand("Reload Page", () => { location.reload() });
