toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  this.todo = [new ToDoFactory('ToDo1', true), new ToDoFactory('ToDo2')];

  this.addToDo = function(todoText) {
    this.todo.push(new ToDoFactory(todoText));
  };

  this.removeToDo = function() {
    this.todo.pop();
  };
}]);
