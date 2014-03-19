describe('Directives: inputMatch', function() {

  var $scope,
    $compile,
    compiled,
    validTemplate = '<div ng-model="foo" match="fooConfirmation"></div>';


  beforeEach(module('directives.inputMatch'));


  beforeEach(inject(function(_$rootScope_, _$compile_) {
    $scope = _$rootScope_.$new();
    $compile = _$compile_;
  }));


  describe('configuration:', function() {

    it('does not throw when no ngModel controller is found', function() {
      var naTemplate = '<div match="fooConfirmation"></div>';
      compiled = $compile(naTemplate)($scope);
      $scope.$apply();
    });


    it('is limited to attribute invocation', function() {
      var spy = spyOn($scope, '$watch'),
        naTemplates = [
          '<div class="match"></div>',
          '<match></match>'
        ];

      for(var i = 0; i < naTemplates.length; i++) {
        compiled = $compile(naTemplates[i])($scope);
        $scope.$apply();
        expect(spy).not.toHaveBeenCalled();
      }
    });

  });


  describe('behavior:', function() {

    it('returns true if the form is pristine and no model value has been defined', function() {
      compiled = $compile(validTemplate)($scope);
      expect($scope.foo).toBeUndefined();
      $scope.$apply();
      expect(compiled.hasClass('ng-valid')).toBe(true);
    });


    it('returns true if $modelValue defined and the match expression is equal to the $modelValue', function() {
      $scope.foo = false;
      compiled = $compile(validTemplate)($scope);
      $scope.$apply();
      expect(compiled.hasClass('ng-invalid')).toBe(true);

      $scope.fooConfirmation = false;
      $scope.$apply();
      expect(compiled.hasClass('ng-valid')).toBe(true);
    });


    it('returns false if $modelValue defined and the match expression is not equal to the $modelValue', function() {
      $scope.foo = false;
      $scope.fooConfirmation = undefined;
      compiled = $compile(validTemplate)($scope);
      $scope.$apply();
      expect(compiled.hasClass('ng-valid')).toBe(false);
    });

  });

});
