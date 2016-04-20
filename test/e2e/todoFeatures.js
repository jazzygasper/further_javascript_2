describe('Todos tracker', function() {
  beforeEach(function() {
    browser.get('/app');
  });
  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Todos App');
  });

    it('initialises with a toDo', function() {
      var todoList = element.all(by.repeater('todo in controller.todo'));
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(0).getText()).toMatch('ToDo1 true');
    });

    it('adds new todo', function() {
      $('#input').sendKeys('ToDo3');
      $('#Submit').click();
      var todoList = element.all(by.repeater('todo in controller.todo'));
      expect(todoList.last().getText()).toMatch('ToDo3 false');
    });
    it('deletes last todo', function() {
      $('#Delete').click();
      var todoList = element.all(by.repeater('todo in controller.todo'));
      expect(todoList.count()).toEqual(1);
    });

    it('complete todo', function(){
      // var todoList = element.all(by.repeater('todo in controller.todo'));
      $('#input').sendKeys('ToDo3');
      $('#Submit').click();
      var last = $$('#todo li').last();
      last.element(by.css('.Complete')).click();
      expect(last.getText()).toMatch('ToDo3 true');
    });
});
