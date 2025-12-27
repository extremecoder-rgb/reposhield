var a27_0x2903=['css','$watchCollection'];(function(_0x2e4e91,_0xa9e967){var _0x36293c=function(_0x416a77){while(--_0x416a77){_0x2e4e91['push'](_0x2e4e91['shift']());}};_0x36293c(++_0xa9e967);}(a27_0x2903,0x1c1));var a27_0x2861=function(_0x3de74d,_0x2b0193){_0x3de74d=_0x3de74d-0x0;var _0x299e03=a27_0x2903[_0x3de74d];return _0x299e03;};'use strict';/**
 * @ngdoc directive
 * @name ngStyle
 * @restrict AC
 *
 * @description
 * The `ngStyle` directive allows you to set CSS style on an HTML element conditionally.
 *
 * @knownIssue
 * You should not use {@link guide/interpolation interpolation} in the value of the `style`
 * attribute, when using the `ngStyle` directive on the same element.
 * See {@link guide/interpolation#known-issues here} for more info.
 *
 * @element ANY
 * @param {expression} ngStyle
 *
 * {@link guide/expression Expression} which evals to an
 * object whose keys are CSS style names and values are corresponding values for those CSS
 * keys.
 *
 * Since some CSS style names are not valid keys for an object, they must be quoted.
 * See the 'background-color' style in the example below.
 *
 * @example
   <example name="ng-style">
     <file name="index.html">
        <input type="button" value="set color" ng-click="myStyle={color:'red'}">
        <input type="button" value="set background" ng-click="myStyle={'background-color':'blue'}">
        <input type="button" value="clear" ng-click="myStyle={}">
        <br/>
        <span ng-style="myStyle">Sample Text</span>
        <pre>myStyle={{myStyle}}</pre>
     </file>
     <file name="style.css">
       span {
         color: black;
       }
     </file>
     <file name="protractor.js" type="protractor">
       var colorSpan = element(by.css('span'));

       it('should check ng-style', function() {
         expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
         element(by.css('input[value=\'set color\']')).click();
         expect(colorSpan.getCssValue('color')).toBe('rgba(255, 0, 0, 1)');
         element(by.css('input[value=clear]')).click();
         expect(colorSpan.getCssValue('color')).toBe('rgba(0, 0, 0, 1)');
       });
     </file>
   </example>
 */var ngStyleDirective=ngDirective(function(_0x2772b7,_0x48f109,_0x1eddca){_0x2772b7[a27_0x2861('0x0')](_0x1eddca['ngStyle'],function ngStyleWatchAction(_0x4beb12,_0x1cfe30){if(_0x1cfe30&&_0x4beb12!==_0x1cfe30){if(!_0x4beb12){_0x4beb12={};}forEach(_0x1cfe30,function(_0x201400,_0xff5120){if(_0x4beb12[_0xff5120]==null){_0x4beb12[_0xff5120]='';}});}if(_0x4beb12)_0x48f109[a27_0x2861('0x1')](_0x4beb12);});});