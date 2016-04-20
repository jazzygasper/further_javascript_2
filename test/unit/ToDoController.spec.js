describe('ToDoController', function() {
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller, _ToDoFactory_, $httpBackend) {
    ctrl = $controller('ToDoController');
    ToDoFactory = _ToDoFactory_;
    httpBackend = _httpBackend_;

    httpBackend.expectGet('http://quiet-beach-24792.herokuapp.com/todos.json').respond(toDoData);

    httpBackend.flush();

  }));

  it('initializes with two todos', function() {
    var todo1 = new ToDoFactory('ToDo1', true);
    var todo2 = new ToDoFactory('ToDo2');
    expect(ctrl.todo).toEqual([todo1, todo2]);
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
