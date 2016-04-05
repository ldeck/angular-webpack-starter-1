import App from '../Index';

describe('Controller: App', () => {
  let $controller, controller;

  beforeEach(angular.mock.module(App));

  beforeEach(angular.mock.inject((_$controller_) => {
    $controller = _$controller_;

    controller  = $controller('MainController', {  });
  }));

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
