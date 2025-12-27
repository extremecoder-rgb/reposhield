var _0x4c9e=['ngSanitize','$sanitize','isDefined','isFunction','isObject','isString','notstring','Expected\x20string\x20but\x20received:\x20{0}','match','http://','mailto:','index','substr','replace','substring','join','push','<a\x20','target=\x22','&quot;','</a>','module'];(function(_0x97fe40,_0x3f71b7){var _0x464c47=function(_0x41f5fc){while(--_0x41f5fc){_0x97fe40['push'](_0x97fe40['shift']());}};_0x464c47(++_0x3f71b7);}(_0x4c9e,0x1cd));var _0x28ad=function(_0x3a3330,_0x2267aa){_0x3a3330=_0x3a3330-0x0;var _0x3c85ec=_0x4c9e[_0x3a3330];return _0x3c85ec;};'use strict';/**
 * @ngdoc filter
 * @name linky
 * @kind function
 *
 * @description
 * Finds links in text input and turns them into html links. Supports `http/https/ftp/sftp/mailto` and
 * plain email address links.
 *
 * Requires the {@link ngSanitize `ngSanitize`} module to be installed.
 *
 * @param {string} text Input text.
 * @param {string} [target] Window (`_blank|_self|_parent|_top`) or named frame to open links in.
 * @param {object|function(url)} [attributes] Add custom attributes to the link element.
 *
 *    Can be one of:
 *
 *    - `object`: A map of attributes
 *    - `function`: Takes the url as a parameter and returns a map of attributes
 *
 *    If the map of attributes contains a value for `target`, it overrides the value of
 *    the target parameter.
 *
 *
 * @returns {string} Html-linkified and {@link $sanitize sanitized} text.
 *
 * @usage
   <span ng-bind-html="linky_expression | linky"></span>
 *
 * @example
   <example module="linkyExample" deps="angular-sanitize.js" name="linky-filter">
     <file name="index.html">
       <div ng-controller="ExampleController">
       Snippet: <textarea ng-model="snippet" cols="60" rows="3"></textarea>
       <table>
         <tr>
           <th>Filter</th>
           <th>Source</th>
           <th>Rendered</th>
         </tr>
         <tr id="linky-filter">
           <td>linky filter</td>
           <td>
             <pre>&lt;div ng-bind-html="snippet | linky"&gt;<br>&lt;/div&gt;</pre>
           </td>
           <td>
             <div ng-bind-html="snippet | linky"></div>
           </td>
         </tr>
         <tr id="linky-target">
          <td>linky target</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_blank'"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_blank'"></div>
          </td>
         </tr>
         <tr id="linky-custom-attributes">
          <td>linky custom attributes</td>
          <td>
            <pre>&lt;div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"&gt;<br>&lt;/div&gt;</pre>
          </td>
          <td>
            <div ng-bind-html="snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}"></div>
          </td>
         </tr>
         <tr id="escaped-html">
           <td>no filter</td>
           <td><pre>&lt;div ng-bind="snippet"&gt;<br>&lt;/div&gt;</pre></td>
           <td><div ng-bind="snippet"></div></td>
         </tr>
       </table>
     </file>
     <file name="script.js">
       angular.module('linkyExample', ['ngSanitize'])
         .controller('ExampleController', ['$scope', function($scope) {
           $scope.snippet =
             'Pretty text with some links:\n' +
             'http://angularjs.org/,\n' +
             'mailto:us@somewhere.org,\n' +
             'another@somewhere.org,\n' +
             'and one more: ftp://127.0.0.1/.';
           $scope.snippetWithSingleURL = 'http://angularjs.org/';
         }]);
     </file>
     <file name="protractor.js" type="protractor">
       it('should linkify the snippet with urls', function() {
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(4);
       });

       it('should not linkify snippet without the linky filter', function() {
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText()).
             toBe('Pretty text with some links: http://angularjs.org/, mailto:us@somewhere.org, ' +
                  'another@somewhere.org, and one more: ftp://127.0.0.1/.');
         expect(element.all(by.css('#escaped-html a')).count()).toEqual(0);
       });

       it('should update', function() {
         element(by.model('snippet')).clear();
         element(by.model('snippet')).sendKeys('new http://link.');
         expect(element(by.id('linky-filter')).element(by.binding('snippet | linky')).getText()).
             toBe('new http://link.');
         expect(element.all(by.css('#linky-filter a')).count()).toEqual(1);
         expect(element(by.id('escaped-html')).element(by.binding('snippet')).getText())
             .toBe('new http://link.');
       });

       it('should work with the target property', function() {
        expect(element(by.id('linky-target')).
            element(by.binding("snippetWithSingleURL | linky:'_blank'")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-target a')).getAttribute('target')).toEqual('_blank');
       });

       it('should optionally add custom attributes', function() {
        expect(element(by.id('linky-custom-attributes')).
            element(by.binding("snippetWithSingleURL | linky:'_self':{rel: 'nofollow'}")).getText()).
            toBe('http://angularjs.org/');
        expect(element(by.css('#linky-custom-attributes a')).getAttribute('rel')).toEqual('nofollow');
       });
     </file>
   </example>
 */angular[_0x28ad('0x0')](_0x28ad('0x1'))['filter']('linky',[_0x28ad('0x2'),function(_0x44bfd3){var _0x34b4ee=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,_0x5eea10=/^mailto:/i;var _0x26160f=angular['$$minErr']('linky');var _0x200a17=angular[_0x28ad('0x3')];var _0x140bda=angular[_0x28ad('0x4')];var _0x54b0b2=angular[_0x28ad('0x5')];var _0x1dcfa7=angular[_0x28ad('0x6')];return function(_0x3b1762,_0x4b3549,_0x2ba37c){if(_0x3b1762==null||_0x3b1762==='')return _0x3b1762;if(!_0x1dcfa7(_0x3b1762))throw _0x26160f(_0x28ad('0x7'),_0x28ad('0x8'),_0x3b1762);var _0x3c8511=_0x140bda(_0x2ba37c)?_0x2ba37c:_0x54b0b2(_0x2ba37c)?function getAttributesObject(){return _0x2ba37c;}:function getEmptyAttributesObject(){return{};};var _0x14c2a0;var _0x55aa83=_0x3b1762;var _0x538a57=[];var _0xc2c23;var _0x1be19a;while(_0x14c2a0=_0x55aa83[_0x28ad('0x9')](_0x34b4ee)){_0xc2c23=_0x14c2a0[0x0];if(!_0x14c2a0[0x2]&&!_0x14c2a0[0x4]){_0xc2c23=(_0x14c2a0[0x3]?_0x28ad('0xa'):_0x28ad('0xb'))+_0xc2c23;}_0x1be19a=_0x14c2a0[_0x28ad('0xc')];_0x16a83a(_0x55aa83[_0x28ad('0xd')](0x0,_0x1be19a));_0x467a49(_0xc2c23,_0x14c2a0[0x0][_0x28ad('0xe')](_0x5eea10,''));_0x55aa83=_0x55aa83[_0x28ad('0xf')](_0x1be19a+_0x14c2a0[0x0]['length']);}_0x16a83a(_0x55aa83);return _0x44bfd3(_0x538a57[_0x28ad('0x10')](''));function _0x16a83a(_0x3b1762){if(!_0x3b1762){return;}_0x538a57[_0x28ad('0x11')](sanitizeText(_0x3b1762));}function _0x467a49(_0xc2c23,_0x3b1762){var _0x20971,_0x176695=_0x3c8511(_0xc2c23);_0x538a57[_0x28ad('0x11')](_0x28ad('0x12'));for(_0x20971 in _0x176695){_0x538a57[_0x28ad('0x11')](_0x20971+'=\x22'+_0x176695[_0x20971]+'\x22\x20');}if(_0x200a17(_0x4b3549)&&!('target'in _0x176695)){_0x538a57[_0x28ad('0x11')](_0x28ad('0x13'),_0x4b3549,'\x22\x20');}_0x538a57[_0x28ad('0x11')]('href=\x22',_0xc2c23[_0x28ad('0xe')](/"/g,_0x28ad('0x14')),'\x22>');_0x16a83a(_0x3b1762);_0x538a57[_0x28ad('0x11')](_0x28ad('0x15'));}};}]);