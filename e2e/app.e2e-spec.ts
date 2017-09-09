import { LaPlataEnBiciPage } from './app.po';

describe('la-plata-en-bici App', function() {
  let page: LaPlataEnBiciPage;

  beforeEach(() => {
    page = new LaPlataEnBiciPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
