TodoApp.service('todoListings', todoListings);

function todoListings() {
	var todoList = [
		{ isDone: true, task: "Learn Angular"},
		{ isDone: true, task: "Put it in Meteor"},
		{ isDone: false, task: "Cause a meteor shower"},
		{ isDone: false, task: "Prepare Spaceship"},
		{ isDone: false, task: "Fire it Up"},
		{ isDone: false, task: "Fly to the edge of the Galaxy"}
	];

	return{
		get: function(){
			return todoList;
		},
		add: function(newTask){
			var task = Object.create({
				task: newTask,
				isDone: false
			});
			todoList.push(task);
		},
		delete: function(){

		},
		update: function(){
		},
		isDone: function(){
			var done = isDone == true ? false : true;
			todoList[$index].isDone = done;
		}
	}
}
