// Instantiate Angular
var TodoApp = angular.module('TodoApp',[]);

TodoApp.controller('TodoController', ['$scope', TodoController]);

function TodoController($scope){
	$scope.todoList = [
		{ isDone: true, task: "Learn Angular"},
		{ isDone: false, task: "Put it in Meteor"},
		{ isDone: false, task: "Cause a meteor shower"},
		{ isDone: false, task: "Prepare Spaceship"},
		{ isDone: false, task: "Fire it Up"},
		{ isDone: false, task: "Fly to the edge of the Galaxy"}
	];
}
