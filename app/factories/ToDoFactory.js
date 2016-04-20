toDoApp.factory('ToDoFactory', function(){
  var ToDo = function(todoText, completed) {
    this.text = todoText;
    this.completed = (typeof completed !== 'undefined' ? completed : false)
  };

  ToDo.prototype.complete = function () {
    this.completed = true;
  };

  return ToDo;
});
