ble// ==UserScript==
// @name	Content-Security-Policy Blocker
// @namespace	karrdozo
// @match	https://*
// @run-at	document-start
// @grant GM_registerMenuCommand
// ==/UserScript==

var cspRule = localStorage.getItem("CSPBlocker");
var cspDisable = localStorage.getItem("CSPDisable");

if (!cspRule && !cspDisable) {
	localStorage.setItem("CSPBlocker", "script-src-elem 'self'")
	cspRule = localStorage.getItem("CSPBlocker");
}

if (cspRule && !cspDisable) {
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
	const newrule = prompt("Editing CSP rules", localStorage.getItem("CSPBlocker") || "");
	if (newrule && newrule != "") {
		localStorage.setItem("CSPBlocker", newrule)
	}
});

if (cspDisable) {
	GM_registerMenuCommand("CSP Enable", () => { localStorage.removeItem("CSPDisable") });
} else {
	GM_registerMenuCommand("CSP Disable", () => { localStorage.setItem("CSPDisable") });
}

GM_registerMenuCommand("Clear CSP rules", () => { localStorage.removeItem("CSPBlocker") });

