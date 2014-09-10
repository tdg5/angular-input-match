'use strict';

var inputMatch = angular.module('directives.inputMatch', []);
inputMatch.directive('match', function () {

  function link(scope, elem, attrs, ctrl) {
    if(!ctrl) { return; }

    scope.$watch(
      function() {
        var modelValue = ctrl.$modelValue || ctrl.$$invalidModelValue;
        return (ctrl.$pristine && angular.isUndefined(modelValue)) || scope.match === modelValue;
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
    scope: { match: '=' }
  };
});
