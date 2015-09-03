var app = angular.module('quoteBook');

app.controller('MainController', ['MainService', function(MainService) {
	var vm = this;
	
	vm.test = function(data) {
		console.log(data);
	}
	
	vm.quotes = MainService.getData();
	var addQuote = MainService.addData
	
	vm.createQuoteData = function() {
		addQuote({text: vm.newQuote, author: vm.newAuthor});
		vm.quotes = MainService.getData();
		vm.newQuote = vm.newAuthor = "";
	}
	
	vm.resetData = MainService.resetData;
}]);