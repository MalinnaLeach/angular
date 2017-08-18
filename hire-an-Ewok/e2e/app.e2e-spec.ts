import { HireAnEwokPage } from './app.po';

describe('hire-an-ewok App', function() {
  let page: HireAnEwokPage;

  beforeEach(() => {
    page = new HireAnEwokPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
