// Instantiate Angular
var TodoApp = angular.module('TodoApp',[]);

TodoApp.controller('TodoController', ['$scope', TodoController]);
TodoApp.controller('TodoAppController', ['$scope', TodoAppController]);

function TodoAppController($scope){
	$scope.appTitle = "Todo List "
}

function TodoController($scope){
	$scope.todoList = [
		{ isDone: true, task: "Learn Angular"},
		{ isDone: true, task: "Put it in Meteor"},
		{ isDone: false, task: "Cause a meteor shower"},
		{ isDone: false, task: "Prepare Spaceship"},
		{ isDone: false, task: "Fire it Up"},
		{ isDone: false, task: "Fly to the edge of the Galaxy"}
	];
}
