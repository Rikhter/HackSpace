describe('AppCtrl', function() {
  beforeEach(function() {
    browser.get('http://127.0.0.1:50236/main.html');
  });
  it('should get the first books info DIV', function() {
    // Returns the book-info DIV for the first book.
    element.all(by.repeater('book in library').row(0)).then(function(divs) {
      var bookInfo = divs[1];
      var bookName = bookInfo.findElement(by.binding('book.name'));
      expect(bookName.getInnerHtml()).toBe('Davey Jones Locker');
    });
  });
  
  it('should get the first books info DIV', function() {
    var firstBookName = element(by.repeater('book in library').
      row(0).column('{{book.name}}'));
    expect(firstBookName.getInnerHtml()).toBe('Davey Jones Locker');
  });
  
  
  
});