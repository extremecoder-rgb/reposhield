var _0x3275=['attr','$attr','ngBindTemplate','$observe','textContent','$parse','ngBindHtml','valueOf','getTrustedHtml','$compile','$$addBindingInfo','ngBind','$watch','$interpolate','$$addBindingClass'];(function(_0x2699a9,_0x501e82){var _0x5b6c40=function(_0xa3de42){while(--_0xa3de42){_0x2699a9['push'](_0x2699a9['shift']());}};_0x5b6c40(++_0x501e82);}(_0x3275,0x81));var _0x5922=function(_0xcb94ea,_0x3e712a){_0xcb94ea=_0xcb94ea-0x0;var _0x54f02b=_0x3275[_0xcb94ea];return _0x54f02b;};'use strict';/**
 * @ngdoc directive
 * @name ngBind
 * @restrict AC
 *
 * @description
 * The `ngBind` attribute tells AngularJS to replace the text content of the specified HTML element
 * with the value of a given expression, and to update the text content when the value of that
 * expression changes.
 *
 * Typically, you don't use `ngBind` directly, but instead you use the double curly markup like
 * `{{ expression }}` which is similar but less verbose.
 *
 * It is preferable to use `ngBind` instead of `{{ expression }}` if a template is momentarily
 * displayed by the browser in its raw state before AngularJS compiles it. Since `ngBind` is an
 * element attribute, it makes the bindings invisible to the user while the page is loading.
 *
 * An alternative solution to this problem would be using the
 * {@link ng.directive:ngCloak ngCloak} directive.
 *
 *
 * @element ANY
 * @param {expression} ngBind {@link guide/expression Expression} to evaluate.
 *
 * @example
 * Enter a name in the Live Preview text box; the greeting below the text box changes instantly.
   <example module="bindExample" name="ng-bind">
     <file name="index.html">
       <script>
         angular.module('bindExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.name = 'Whirled';
           }]);
       </script>
       <div ng-controller="ExampleController">
         <label>Enter name: <input type="text" ng-model="name"></label><br>
         Hello <span ng-bind="name"></span>!
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-bind', function() {
         var nameInput = element(by.model('name'));

         expect(element(by.binding('name')).getText()).toBe('Whirled');
         nameInput.clear();
         nameInput.sendKeys('world');
         expect(element(by.binding('name')).getText()).toBe('world');
       });
     </file>
   </example>
 */var ngBindDirective=[_0x5922('0x0'),function(_0xa12199){return{'restrict':'AC','compile':function ngBindCompile(_0x12cd54){_0xa12199['$$addBindingClass'](_0x12cd54);return function ngBindLink(_0x4ca39c,_0x41f2d0,_0x3151d7){_0xa12199[_0x5922('0x1')](_0x41f2d0,_0x3151d7[_0x5922('0x2')]);_0x41f2d0=_0x41f2d0[0x0];_0x4ca39c[_0x5922('0x3')](_0x3151d7['ngBind'],function ngBindWatchAction(_0x1a2e2d){_0x41f2d0['textContent']=stringify(_0x1a2e2d);});};}};}];var ngBindTemplateDirective=[_0x5922('0x4'),_0x5922('0x0'),function(_0x575e09,_0x330dbf){return{'compile':function ngBindTemplateCompile(_0x3ea579){_0x330dbf[_0x5922('0x5')](_0x3ea579);return function ngBindTemplateLink(_0x51b647,_0x3dd8a9,_0x3b19a4){var _0x16473e=_0x575e09(_0x3dd8a9[_0x5922('0x6')](_0x3b19a4[_0x5922('0x7')][_0x5922('0x8')]));_0x330dbf[_0x5922('0x1')](_0x3dd8a9,_0x16473e['expressions']);_0x3dd8a9=_0x3dd8a9[0x0];_0x3b19a4[_0x5922('0x9')]('ngBindTemplate',function(_0x51a816){_0x3dd8a9[_0x5922('0xa')]=isUndefined(_0x51a816)?'':_0x51a816;});};}};}];var ngBindHtmlDirective=['$sce',_0x5922('0xb'),'$compile',function(_0x102b6b,_0x3b74f6,_0x36f1b3){return{'restrict':'A','compile':function ngBindHtmlCompile(_0x16bfc4,_0x4d7dd7){var _0x33e62a=_0x3b74f6(_0x4d7dd7[_0x5922('0xc')]);var _0x4660d8=_0x3b74f6(_0x4d7dd7[_0x5922('0xc')],function sceValueOf(_0xcab3a1){return _0x102b6b[_0x5922('0xd')](_0xcab3a1);});_0x36f1b3[_0x5922('0x5')](_0x16bfc4);return function ngBindHtmlLink(_0x14857b,_0x836f76,_0x585655){_0x36f1b3[_0x5922('0x1')](_0x836f76,_0x585655[_0x5922('0xc')]);_0x14857b['$watch'](_0x4660d8,function ngBindHtmlWatchAction(){var _0x4d6164=_0x33e62a(_0x14857b);_0x836f76['html'](_0x102b6b[_0x5922('0xe')](_0x4d6164)||'');});};}};}];