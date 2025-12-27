var _0x3f62=['$viewChangeListeners','$eval','ngChange','ngModel'];(function(_0x5277cd,_0x3254cf){var _0x2a41f1=function(_0x14989a){while(--_0x14989a){_0x5277cd['push'](_0x5277cd['shift']());}};_0x2a41f1(++_0x3254cf);}(_0x3f62,0x157));var _0x5b2c=function(_0x242ecc,_0x528af0){_0x242ecc=_0x242ecc-0x0;var _0x1e1be8=_0x3f62[_0x242ecc];return _0x1e1be8;};'use strict';/**
 * @ngdoc directive
 * @name ngChange
 * @restrict A
 *
 * @description
 * Evaluate the given expression when the user changes the input.
 * The expression is evaluated immediately, unlike the JavaScript onchange event
 * which only triggers at the end of a change (usually, when the user leaves the
 * form element or presses the return key).
 *
 * The `ngChange` expression is only evaluated when a change in the input value causes
 * a new value to be committed to the model.
 *
 * It will not be evaluated:
 * * if the value returned from the `$parsers` transformation pipeline has not changed
 * * if the input has continued to be invalid since the model will stay `null`
 * * if the model is changed programmatically and not by a change to the input value
 *
 *
 * Note, this directive requires `ngModel` to be present.
 *
 * @element ANY
 * @param {expression} ngChange {@link guide/expression Expression} to evaluate upon change
 * in input value.
 *
 * @example
 * <example name="ngChange-directive" module="changeExample">
 *   <file name="index.html">
 *     <script>
 *       angular.module('changeExample', [])
 *         .controller('ExampleController', ['$scope', function($scope) {
 *           $scope.counter = 0;
 *           $scope.change = function() {
 *             $scope.counter++;
 *           };
 *         }]);
 *     </script>
 *     <div ng-controller="ExampleController">
 *       <input type="checkbox" ng-model="confirmed" ng-change="change()" id="ng-change-example1" />
 *       <input type="checkbox" ng-model="confirmed" id="ng-change-example2" />
 *       <label for="ng-change-example2">Confirmed</label><br />
 *       <tt>debug = {{confirmed}}</tt><br/>
 *       <tt>counter = {{counter}}</tt><br/>
 *     </div>
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *     var counter = element(by.binding('counter'));
 *     var debug = element(by.binding('confirmed'));
 *
 *     it('should evaluate the expression if changing from view', function() {
 *       expect(counter.getText()).toContain('0');
 *
 *       element(by.id('ng-change-example1')).click();
 *
 *       expect(counter.getText()).toContain('1');
 *       expect(debug.getText()).toContain('true');
 *     });
 *
 *     it('should not evaluate the expression if changing from model', function() {
 *       element(by.id('ng-change-example2')).click();

 *       expect(counter.getText()).toContain('0');
 *       expect(debug.getText()).toContain('true');
 *     });
 *   </file>
 * </example>
 */var ngChangeDirective=valueFn({'restrict':'A','require':_0x5b2c('0x0'),'link':function(_0x4dae58,_0x902dc7,_0x572eb4,_0x1f4f3d){_0x1f4f3d[_0x5b2c('0x1')]['push'](function(){_0x4dae58[_0x5b2c('0x2')](_0x572eb4[_0x5b2c('0x3')]);});}});