/**
 * angular-input-match
 * ngModel validation for matching model attributes
 * @version v0.0.1-dev-2014-10-28
 * @link https://github.com/interval-braining/angular-input-match
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){
  module.exports = 'directives.inputMatch';
}

(function (window, angular, undefined) {
"use strict";
// Source: src/angular_input_match.js
var inputMatch = angular.module('directives.inputMatch', []);
inputMatch.directive('inputMatch', function () {

  function link(scope, elem, attrs, ctrl) {
    if(!ctrl) { return; }

    scope.$watch(
      function() {
        return (ctrl.$pristine && angular.isUndefined(ctrl.$modelValue)) || scope.inputMatch === ctrl.$modelValue;
      },
      function(currentValue) {
        ctrl.$setValidity('match', currentValue);
      }
    );
  }

  return {
    link: link,
    require: '?ngModel',
    restrict: 'A',
    scope: { inputMatch: '=' }
  };
});
})(window, window.angular);