toDoApp.controller('ToDoController', [function() {
  this.todo = [{text: 'ToDo1', completed: true}, {text: 'ToDo2', completed: false}];

  this.addToDo = function(todoText) {
    var newtodo = {text: todoText, completed: false};
    this.todo.push(newtodo);
  };

  this.removeToDo = function() {
    this.todo.pop();
  };
}]);
