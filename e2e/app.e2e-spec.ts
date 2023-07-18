import { ABPMasterTemplatePage } from './app.po';

describe('ABPMaster App', function() {
  let page: ABPMasterTemplatePage;

  beforeEach(() => {
    page = new ABPMasterTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
