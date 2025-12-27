var a5_0x3836=['split','push','$parsers','join','$isEmpty','ngModel','ngList','ngTrim','false'];(function(_0x1b47ee,_0x1b1dd0){var _0x59ebbd=function(_0x569524){while(--_0x569524){_0x1b47ee['push'](_0x1b47ee['shift']());}};_0x59ebbd(++_0x1b1dd0);}(a5_0x3836,0x1d9));var a5_0x1bb7=function(_0x5c2f06,_0x120b3c){_0x5c2f06=_0x5c2f06-0x0;var _0x5c47a6=a5_0x3836[_0x5c2f06];return _0x5c47a6;};'use strict';/**
 * @ngdoc directive
 * @name ngList
 * @restrict A
 * @priority 100
 *
 * @param {string=} ngList optional delimiter that should be used to split the value.
 *
 * @description
 * Text input that converts between a delimited string and an array of strings. The default
 * delimiter is a comma followed by a space - equivalent to `ng-list=", "`. You can specify a custom
 * delimiter as the value of the `ngList` attribute - for example, `ng-list=" | "`.
 *
 * The behaviour of the directive is affected by the use of the `ngTrim` attribute.
 * * If `ngTrim` is set to `"false"` then whitespace around both the separator and each
 *   list item is respected. This implies that the user of the directive is responsible for
 *   dealing with whitespace but also allows you to use whitespace as a delimiter, such as a
 *   tab or newline character.
 * * Otherwise whitespace around the delimiter is ignored when splitting (although it is respected
 *   when joining the list items back together) and whitespace around each list item is stripped
 *   before it is added to the model.
 *
 * @example
 * ### Validation
 *
 * <example name="ngList-directive" module="listExample">
 *   <file name="app.js">
 *      angular.module('listExample', [])
 *        .controller('ExampleController', ['$scope', function($scope) {
 *          $scope.names = ['morpheus', 'neo', 'trinity'];
 *        }]);
 *   </file>
 *   <file name="index.html">
 *    <form name="myForm" ng-controller="ExampleController">
 *      <label>List: <input name="namesInput" ng-model="names" ng-list required></label>
 *      <span role="alert">
 *        <span class="error" ng-show="myForm.namesInput.$error.required">
 *        Required!</span>
 *      </span>
 *      <br>
 *      <tt>names = {{names}}</tt><br/>
 *      <tt>myForm.namesInput.$valid = {{myForm.namesInput.$valid}}</tt><br/>
 *      <tt>myForm.namesInput.$error = {{myForm.namesInput.$error}}</tt><br/>
 *      <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
 *      <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
 *     </form>
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *     var listInput = element(by.model('names'));
 *     var names = element(by.exactBinding('names'));
 *     var valid = element(by.binding('myForm.namesInput.$valid'));
 *     var error = element(by.css('span.error'));
 *
 *     it('should initialize to model', function() {
 *       expect(names.getText()).toContain('["morpheus","neo","trinity"]');
 *       expect(valid.getText()).toContain('true');
 *       expect(error.getCssValue('display')).toBe('none');
 *     });
 *
 *     it('should be invalid if empty', function() {
 *       listInput.clear();
 *       listInput.sendKeys('');
 *
 *       expect(names.getText()).toContain('');
 *       expect(valid.getText()).toContain('false');
 *       expect(error.getCssValue('display')).not.toBe('none');
 *     });
 *   </file>
 * </example>
 *
 * @example
 * ### Splitting on newline
 *
 * <example name="ngList-directive-newlines">
 *   <file name="index.html">
 *    <textarea ng-model="list" ng-list="&#10;" ng-trim="false"></textarea>
 *    <pre>{{ list | json }}</pre>
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *     it("should split the text by newlines", function() {
 *       var listInput = element(by.model('list'));
 *       var output = element(by.binding('list | json'));
 *       listInput.sendKeys('abc\ndef\nghi');
 *       expect(output.getText()).toContain('[\n  "abc",\n  "def",\n  "ghi"\n]');
 *     });
 *   </file>
 * </example>
 *
 */var ngListDirective=function(){return{'restrict':'A','priority':0x64,'require':a5_0x1bb7('0x0'),'link':function(_0x5e6bfb,_0x4142f3,_0x42a6a2,_0x118dfe){var _0x30c774=_0x42a6a2[a5_0x1bb7('0x1')]||',\x20';var _0x3d679a=_0x42a6a2[a5_0x1bb7('0x2')]!==a5_0x1bb7('0x3');var _0x5f5302=_0x3d679a?trim(_0x30c774):_0x30c774;var _0xb18960=function(_0x214517){if(isUndefined(_0x214517))return;var _0x1ed05a=[];if(_0x214517){forEach(_0x214517[a5_0x1bb7('0x4')](_0x5f5302),function(_0x57953f){if(_0x57953f)_0x1ed05a[a5_0x1bb7('0x5')](_0x3d679a?trim(_0x57953f):_0x57953f);});}return _0x1ed05a;};_0x118dfe[a5_0x1bb7('0x6')][a5_0x1bb7('0x5')](_0xb18960);_0x118dfe['$formatters'][a5_0x1bb7('0x5')](function(_0x3c1913){if(isArray(_0x3c1913)){return _0x3c1913[a5_0x1bb7('0x7')](_0x30c774);}return undefined;});_0x118dfe[a5_0x1bb7('0x8')]=function(_0x1f8b35){return!_0x1f8b35||!_0x1f8b35['length'];};}};};