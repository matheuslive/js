// ==UserScript==
// @name		Content-Security-Policy Disabler
// @namespace	karrdozo
// @match		http*://*/*
// @run-at		document-start
// @grant 		none
// ==/UserScript==

ChromeXt.cspRules = "";

new MutationObserver((mutations) => {
	mutations.forEach(item => {
		item.addedNodes.forEach(node => {
			if (node.content = "script-src 'none'") {
				node.remove();
			}
		});
	});
}).observe(document.head, { childList: true });

