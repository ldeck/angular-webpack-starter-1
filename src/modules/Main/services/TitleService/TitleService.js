/* Copyright (C) Simply.info
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Pavel Zinovev <zombiqwerty@yandex.ru>, March 2016
 */

import angular from 'angular';

/**
 * @constructor
 */
const Service = () => {
  "ngInject";

  class TitleUtil {
    static title(params = {}) {
      const defaultTitle = params.default  || 'Your Angular Webpack Starter Kit';
      const newTitle     = params.newTitle || '';
      const divider      = params.divider  || ' –– ';
      return newTitle + (newTitle ? divider : '') + defaultTitle;
    }
    static setTitle(params = {}) {
      document.title = TitleUtil.title(params);
    }
  }

  return {
    setTitle: TitleUtil.setTitle,
    title: TitleUtil.title
  };
};

export default angular.module('Starter.App.TitleService', []).factory('TitleService', Service).name;
