toDoApp.controller('ToDoController', ['$http', 'ToDoService', 'ToDoFactory', function($http, ToDoService, ToDoFactory) {
  var self = this;

  ToDoService.getAll().then(function(todos) {
    self.todos = todos;
  });

  this.addToDo = function(todoText) {
    this.todo.push(new ToDoFactory(todoText));
  };

  this.removeToDo = function() {
    this.todo.pop();
  };
}]);
