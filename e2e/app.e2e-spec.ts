import { ArchivoPage } from './app.po';

describe('archivo App', () => {
  let page: ArchivoPage;

  beforeEach(() => {
    page = new ArchivoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
