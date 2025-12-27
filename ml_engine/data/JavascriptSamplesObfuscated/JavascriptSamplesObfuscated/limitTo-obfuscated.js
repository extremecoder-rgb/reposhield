var _0x4419=['max','length','slice','call','abs','toString'];(function(_0xf0ded2,_0x56f47f){var _0x2ccb5d=function(_0x5ae652){while(--_0x5ae652){_0xf0ded2['push'](_0xf0ded2['shift']());}};_0x2ccb5d(++_0x56f47f);}(_0x4419,0x18a));var _0x26d8=function(_0x7716ad,_0x305e7d){_0x7716ad=_0x7716ad-0x0;var _0x2a2ec1=_0x4419[_0x7716ad];return _0x2a2ec1;};'use strict';/**
 * @ngdoc filter
 * @name limitTo
 * @kind function
 *
 * @description
 * Creates a new array or string containing only a specified number of elements. The elements are
 * taken from either the beginning or the end of the source array, string or number, as specified by
 * the value and sign (positive or negative) of `limit`. Other array-like objects are also supported
 * (e.g. array subclasses, NodeLists, jqLite/jQuery collections etc). If a number is used as input,
 * it is converted to a string.
 *
 * @param {Array|ArrayLike|string|number} input - Array/array-like, string or number to be limited.
 * @param {string|number} limit - The length of the returned array or string. If the `limit` number
 *     is positive, `limit` number of items from the beginning of the source array/string are copied.
 *     If the number is negative, `limit` number  of items from the end of the source array/string
 *     are copied. The `limit` will be trimmed if it exceeds `array.length`. If `limit` is undefined,
 *     the input will be returned unchanged.
 * @param {(string|number)=} begin - Index at which to begin limitation. As a negative index,
 *     `begin` indicates an offset from the end of `input`. Defaults to `0`.
 * @returns {Array|string} A new sub-array or substring of length `limit` or less if the input had
 *     less than `limit` elements.
 *
 * @example
   <example module="limitToExample" name="limit-to-filter">
     <file name="index.html">
       <script>
         angular.module('limitToExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.numbers = [1,2,3,4,5,6,7,8,9];
             $scope.letters = "abcdefghi";
             $scope.longNumber = 2345432342;
             $scope.numLimit = 3;
             $scope.letterLimit = 3;
             $scope.longNumberLimit = 3;
           }]);
       </script>
       <div ng-controller="ExampleController">
         <label>
            Limit {{numbers}} to:
            <input type="number" step="1" ng-model="numLimit">
         </label>
         <p>Output numbers: {{ numbers | limitTo:numLimit }}</p>
         <label>
            Limit {{letters}} to:
            <input type="number" step="1" ng-model="letterLimit">
         </label>
         <p>Output letters: {{ letters | limitTo:letterLimit }}</p>
         <label>
            Limit {{longNumber}} to:
            <input type="number" step="1" ng-model="longNumberLimit">
         </label>
         <p>Output long number: {{ longNumber | limitTo:longNumberLimit }}</p>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       var numLimitInput = element(by.model('numLimit'));
       var letterLimitInput = element(by.model('letterLimit'));
       var longNumberLimitInput = element(by.model('longNumberLimit'));
       var limitedNumbers = element(by.binding('numbers | limitTo:numLimit'));
       var limitedLetters = element(by.binding('letters | limitTo:letterLimit'));
       var limitedLongNumber = element(by.binding('longNumber | limitTo:longNumberLimit'));

       it('should limit the number array to first three items', function() {
         expect(numLimitInput.getAttribute('value')).toBe('3');
         expect(letterLimitInput.getAttribute('value')).toBe('3');
         expect(longNumberLimitInput.getAttribute('value')).toBe('3');
         expect(limitedNumbers.getText()).toEqual('Output numbers: [1,2,3]');
         expect(limitedLetters.getText()).toEqual('Output letters: abc');
         expect(limitedLongNumber.getText()).toEqual('Output long number: 234');
       });

       // There is a bug in safari and protractor that doesn't like the minus key
       // it('should update the output when -3 is entered', function() {
       //   numLimitInput.clear();
       //   numLimitInput.sendKeys('-3');
       //   letterLimitInput.clear();
       //   letterLimitInput.sendKeys('-3');
       //   longNumberLimitInput.clear();
       //   longNumberLimitInput.sendKeys('-3');
       //   expect(limitedNumbers.getText()).toEqual('Output numbers: [7,8,9]');
       //   expect(limitedLetters.getText()).toEqual('Output letters: ghi');
       //   expect(limitedLongNumber.getText()).toEqual('Output long number: 342');
       // });

       it('should not exceed the maximum size of input array', function() {
         numLimitInput.clear();
         numLimitInput.sendKeys('100');
         letterLimitInput.clear();
         letterLimitInput.sendKeys('100');
         longNumberLimitInput.clear();
         longNumberLimitInput.sendKeys('100');
         expect(limitedNumbers.getText()).toEqual('Output numbers: [1,2,3,4,5,6,7,8,9]');
         expect(limitedLetters.getText()).toEqual('Output letters: abcdefghi');
         expect(limitedLongNumber.getText()).toEqual('Output long number: 2345432342');
       });
     </file>
   </example>
*/function limitToFilter(){return function(_0x3f0198,_0x5913e0,_0x22d555){if(Math[_0x26d8('0x0')](Number(_0x5913e0))===Infinity){_0x5913e0=Number(_0x5913e0);}else{_0x5913e0=toInt(_0x5913e0);}if(isNumberNaN(_0x5913e0))return _0x3f0198;if(isNumber(_0x3f0198))_0x3f0198=_0x3f0198[_0x26d8('0x1')]();if(!isArrayLike(_0x3f0198))return _0x3f0198;_0x22d555=!_0x22d555||isNaN(_0x22d555)?0x0:toInt(_0x22d555);_0x22d555=_0x22d555<0x0?Math[_0x26d8('0x2')](0x0,_0x3f0198['length']+_0x22d555):_0x22d555;if(_0x5913e0>=0x0){return sliceFn(_0x3f0198,_0x22d555,_0x22d555+_0x5913e0);}else{if(_0x22d555===0x0){return sliceFn(_0x3f0198,_0x5913e0,_0x3f0198[_0x26d8('0x3')]);}else{return sliceFn(_0x3f0198,Math[_0x26d8('0x2')](0x0,_0x22d555+_0x5913e0),_0x22d555);}}};}function sliceFn(_0x19e7aa,_0x105a23,_0x4a559c){if(isString(_0x19e7aa))return _0x19e7aa[_0x26d8('0x4')](_0x105a23,_0x4a559c);return slice[_0x26d8('0x5')](_0x19e7aa,_0x105a23,_0x4a559c);}