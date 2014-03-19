inputMatchFiles = {
  angular: [
    'bower_components/angular/angular.js'
  ],
  build: [
    'build/*.min.js'
  ],
  src: [
    'src/directives/inputMatch.js',
  ],
  test: [
    "test/**/*Spec.js"
  ],
  testUtils: [
    'bower_components/angular-mocks/angular-mocks.js',
  ]
};

if (exports) {
  exports.files = inputMatchFiles;
}
