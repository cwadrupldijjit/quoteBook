/* global angular */
var app = angular.module('quoteBook', ['ngMaterial']);

function supports_html5_storage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		return false;
	}
}

// interface Storage {
// 	getter any getItem(in DOMString key);
// 	setter creator void setItem(in DOMString key);
	
// }