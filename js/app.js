// Instantiate Angular
var TodoApp = angular.module('TodoApp',[]);

TodoApp.controller('TodoAppController', ['$scope', '$rootScope', 'todoListings', TodoAppController]);
TodoApp.controller('TodoController', ['$scope', 'todoListings', TodoController]);
//TodoApp.controller('listing', ['$scope', TodoController]);

function TodoAppController($scope, $rootscope, todoListings){
	$scope.appTitle = "Todo List";
	//$scope.newTask = undefined;
	$scope.addTask = function(form){
		console.log("Form", $scope.newTask);
		//$rootscope.$broadcast('newTaskAdded', $scope.newTask);
		todoListings.add($scope.newTask)
		$scope.newTask = undefined;
	}
}

function TodoController($scope, todoListings){
	$scope.todoList = todoListings.get();

	$scope.setTask = function(isDone, $index){
		//console.log("Task is ", isDone);
		var done = isDone == true ? false : true;
		todoListings.isDone = done;
	}
	
	$scope.deleteTask = function($index){
		
	}
}
