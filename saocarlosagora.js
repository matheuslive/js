// ==UserScript==
// @name     _Override saocarlosemrede styles
// @include  https://saocarlosemrede.com.br/noticias/*
// @grant    GM_addStyle
// @run-at   document-start
// ==/UserScript==

GM_addStyle ( `
	.td-main-page-wrap {
  		padding-top: 48px;
	}
` );
