var app = angular.module('quoteBook');

app.controller('MainController', ['MainService', "$mdSidenav", function(MainService, $mdSidenav) {
	var vm = this;
	
	vm.test = function(data) {
		console.log(data);
	};
	
	vm.quotes = MainService.getData();
	var addQuote = MainService.addData
	
	vm.createQuoteData = function() {
		addQuote({text: vm.newQuote, author: vm.newAuthor});
		vm.quotes = MainService.getData();
		vm.newQuote = vm.newAuthor = "";
		$mdSidenav("right").toggle();
	}
	
	vm.removeData = MainService.removeData;
	
	vm.resetData = MainService.resetData;
	
	vm.openAddQuote = function() {
		$mdSidenav("right").toggle();
	}
	
	vm.checkLocalStorage = MainService.getLocalStorage;
}]);