// ==UserScript==
// @name	     ChromeXt Eruda defaults
// @description  Init eruda settings if not exists
// @version      0.1.1
// @namespace	 karrdozo
// @match	     http*://*
// @license      MIT
// @run-at	     document-start
// @grant        none
// ==/UserScript==

//eruda.scale(0.85)

const erudaSettings = localStorage.getItem("eruda-dev-tools");
if (!erudaSettings) {
	localStorage.setItem("eruda-dev-tools", '{"transparency":1,"displaySize":50,"theme":"Dark"}')
	//eruda._filter.add("iframe")
}

//GM_registerMenuCommand("No JavaScript", () => { localStorage.setItem("CSPBlocker", "script-src 'none'") });
//GM_registerMenuCommand("No Third-Party", () => { localStorage.setItem("CSPBlocker", "default-src 'unsafe-inline' 'self'") });
//GM_registerMenuCommand("Edit CSP rules", () => {
//	const newrule = prompt("Editing CSP rules", localStorage.getItem("CSPBlocker") || "");
//	if (newrule && newrule != "") {
//		localStorage.setItem("CSPBlocker", newrule)
//	}
//});
//GM_registerMenuCommand("Clear CSP rules", () => { localStorage.removeItem("CSPBlocker") });
