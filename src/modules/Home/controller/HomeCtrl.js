/**
 * @module Controller for page home of public section layout.
 * @class HomeController
 */
export default class HomeController {
  /**
   * @constructor
   * @param {object} TitleService - Controlling our title.
   */
  constructor(TitleService) {
    "ngInject";

    this.title = TitleService.title();
    TitleService.setTitle({
      newTitle: 'Home'
    });

    this.url = 'https://github.com/ldeck/angular-webpack';
  }
}
