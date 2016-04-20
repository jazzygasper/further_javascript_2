describe('Todos tracker', function() {
  beforeEach(function() {
    browser.get('/app');
  })
  it('has a title', function() {
    // We don't need to put in the full url as we set baseUrl in our config
    expect(browser.getTitle()).toEqual('Todos App');
  });

    it('initialises with a toDo', function() {
      var todoList = element.all(by.repeater('todo in controller.todo'));
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(0).getText()).toEqual('ToDo1 true')
    });
});
