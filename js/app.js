// Instantiate Angular
var TodoApp = angular.module('TodoApp',[]);

TodoApp.controller('TodoController', ['$scope', TodoController]);
TodoApp.controller('TodoAppController', ['$scope', '$rootScope', TodoAppController]);

function TodoAppController($scope, $rootscope){
	$scope.appTitle = "Todo List";
	$scope.addTask = function(form){
		console.log("Form", $scope.newTask);
		$rootscope.$broadcast('newTaskAdded', $scope.newTask);
	}
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

	$scope.setTask = function(isDone, $index){
		//console.log("Task is ", isDone);
		var done = isDone == true ? false : true;
		$scope.todoList[$index].isDone = done;
	}
	
	$scope.$on('newTaskAdded', function(eventEmitted, newTask){
		console.log("New task added", newTask);
		var task = Object.create({
			task: newTask,
			isDone: false
		});
		$scope.todoList.push(task);
	});
}
