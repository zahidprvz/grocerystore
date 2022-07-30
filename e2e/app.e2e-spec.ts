import { AngularGroceryPage } from './app.po';

describe('angular-grocery App', function() {
  let page: AngularGroceryPage;

  beforeEach(() => {
    page = new AngularGroceryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
