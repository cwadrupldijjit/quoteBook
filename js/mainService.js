var app = angular.module('quoteBook');

app.service('MainService', function() {
	var quotes = [
		{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
		{ text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
		{ text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
		{ text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
		{ text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
		{ text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
		{ text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	];
	
	var originalData = [
		{ text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
		{ text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
		{ text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
		{ text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
		{ text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
		{ text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
		{ text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
	];
	
	this.getData = function() {
		return quotes;
	};
	
	this.addData = function(data) {
		var hasText = false, hasAuthor = false, isFound = false;
		
		for (var key in data) {
			if (key === "text") {
				hasText = true;
			} else if (key === "author") {
				hasAuthor = true;
			}
		}
		
		
		if (hasText && hasAuthor && data.text && data.author) {
			for (var i = 0; i < quotes.length; i++) {
				if (data.text === quotes[i].text)
					isFound = true;
			}
			
			if (!isFound)
				quotes.push(data);
		}
	};
	
	this.removeData = function(data) {
		var isFound = false, foundIndex = -1;
		
		for (var i = 0; i < quotes.length; i++) {
			if (data.text === quotes[i].text) {
				isFound = true;
				foundIndex = i;
				break;
			}
		}
		
		if (!isFound)
			quotes.splice(i, 1);
	};
	
	this.resetData = function() {
		this.quotes = originalData.slice();
	}
});