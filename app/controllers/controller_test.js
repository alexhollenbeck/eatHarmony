'use strict';

describe('myApp.controller module', function() {

  beforeEach(module('myApp.controller'));

  describe('controller controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});