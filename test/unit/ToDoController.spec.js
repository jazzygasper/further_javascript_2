describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initializes with two todos', function() {
    var todo = [{text: 'ToDo1', completed: true}, {text: 'ToDo2', completed: false}]
    expect(ctrl.todo).toEqual(todo)
  });

  it('adds todos', function() {
    ctrl.addToDo('ToDo3');
    expect(ctrl.todo.length).toEqual(3);
  });

  it('removes todos', function() {
    ctrl.removeToDo();
    expect(ctrl.todo.length).toEqual(1);
  });
});
