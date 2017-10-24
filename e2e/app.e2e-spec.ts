import { ShopingAppPage } from './app.po';

describe('shoping-app App', () => {
  let page: ShopingAppPage;

  beforeEach(() => {
    page = new ShopingAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
