import { Is4301Page } from './app.po';

describe('is4301 App', () => {
  let page: Is4301Page;

  beforeEach(() => {
    page = new Is4301Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
