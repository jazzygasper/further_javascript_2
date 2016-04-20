describe('Todos tracker', function() {
  beforeEach(function() {
    browser.get('/app');
  })
  it('has a title', function() {
    // We don't need to put in the full url as we set baseUrl in our config
    expect(browser.getTitle()).toEqual('Todos App');
  });
  it('has todo', function() {
    var todo = $('#todo');
    expect(todo.getText()).toEqual('ToDo1');
  })
});
