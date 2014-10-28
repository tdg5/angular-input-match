'use strict';

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
