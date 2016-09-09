var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.when("", "/home");
			$stateProvider.state("home", {
					url: "/home",
					views: {
						"chart_1": {
							templateUrl: "moduel_1.html"
						},
						"chart_map": {
							templateUrl: "moduel/moduel_map/moduel_map.html"
						}
					}
			})
	)
}

