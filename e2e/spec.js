describe('Protractor Example App', function() {
    it('should have a title', function() {
      browser.get('https://about.google/');
  
      expect(browser.getTitle()).toEqual('Sobre nosotros | Google');
    });
  });