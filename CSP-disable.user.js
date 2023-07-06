// ==UserScript==
// @name		Content-Security-Policy Disabler
// @namespace	karrdozo
// @match		http*://*/*
// @run-at		document-start
// @grant 		none
// ==/UserScript==


new MutationObserver((mutations) => {
	mutations.forEach(item => {
		if (item.type === 'childList') {
			item.addedNodes.forEach(node => {
				if (node.content = "script-src 'none'") {
					node.remove();
				}
			});
		}
	});
}).observe(document.head, { childList: true });

