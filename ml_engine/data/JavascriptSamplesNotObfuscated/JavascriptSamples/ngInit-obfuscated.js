var a2_0x56b4=['$eval'];(function(_0x57a665,_0x16b6e4){var _0x92a2d6=function(_0x2e03f0){while(--_0x2e03f0){_0x57a665['push'](_0x57a665['shift']());}};_0x92a2d6(++_0x16b6e4);}(a2_0x56b4,0xb9));var a2_0x569f=function(_0x247f20,_0x4fd055){_0x247f20=_0x247f20-0x0;var _0x406090=a2_0x56b4[_0x247f20];return _0x406090;};'use strict';/**
 * @ngdoc directive
 * @name ngInit
 * @restrict AC
 * @priority 450
 * @element ANY
 *
 * @param {expression} ngInit {@link guide/expression Expression} to eval.
 *
 * @description
 * The `ngInit` directive allows you to evaluate an expression in the
 * current scope.
 *
 * <div class="alert alert-danger">
 * This directive can be abused to add unnecessary amounts of logic into your templates.
 * There are only a few appropriate uses of `ngInit`:
 * <ul>
 *   <li>aliasing special properties of {@link ng.directive:ngRepeat `ngRepeat`},
 *     as seen in the demo below.</li>
 *   <li>initializing data during development, or for examples, as seen throughout these docs.</li>
 *   <li>injecting data via server side scripting.</li>
 * </ul>
 *
 * Besides these few cases, you should use {@link guide/component Components} or
 * {@link guide/controller Controllers} rather than `ngInit` to initialize values on a scope.
 * </div>
 *
 * <div class="alert alert-warning">
 * **Note**: If you have assignment in `ngInit` along with a {@link ng.$filter `filter`}, make
 * sure you have parentheses to ensure correct operator precedence:
 * <pre class="prettyprint">
 * `<div ng-init="test1 = ($index | toString)"></div>`
 * </pre>
 * </div>
 *
 * @example
   <example module="initExample" name="ng-init">
     <file name="index.html">
   <script>
     angular.module('initExample', [])
       .controller('ExampleController', ['$scope', function($scope) {
         $scope.list = [['a', 'b'], ['c', 'd']];
       }]);
   </script>
   <div ng-controller="ExampleController">
     <div ng-repeat="innerList in list" ng-init="outerIndex = $index">
       <div ng-repeat="value in innerList" ng-init="innerIndex = $index">
          <span class="example-init">list[ {{outerIndex}} ][ {{innerIndex}} ] = {{value}};</span>
       </div>
     </div>
   </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should alias index positions', function() {
         var elements = element.all(by.css('.example-init'));
         expect(elements.get(0).getText()).toBe('list[ 0 ][ 0 ] = a;');
         expect(elements.get(1).getText()).toBe('list[ 0 ][ 1 ] = b;');
         expect(elements.get(2).getText()).toBe('list[ 1 ][ 0 ] = c;');
         expect(elements.get(3).getText()).toBe('list[ 1 ][ 1 ] = d;');
       });
     </file>
   </example>
 */var ngInitDirective=ngDirective({'priority':0x1c2,'compile':function(){return{'pre':function(_0x4fc64b,_0xf6b263,_0x852c2d){_0x4fc64b[a2_0x569f('0x0')](_0x852c2d['ngInit']);}};}});