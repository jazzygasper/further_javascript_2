describe('ToDoFactory', function() {
  beforeEach(module('toDoApp'));

  var toDo;

  beforeEach(inject(function(ToDoFactory) {
      toDo = new ToDoFactory('New ToDo');
  }));

  it('is incomplete by default', function() {
    expect(toDo.completed).toEqual(false);
  });

  it('changes completed to true', function() {
    toDo.complete();
    expect(toDo.completed).toEqual(true);
  });
});
