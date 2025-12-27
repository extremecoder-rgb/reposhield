var _0x2f93=['interr','pluralCat','run','startSymbol','nochgmustache','angular-message-format.js\x20currently\x20does\x20not\x20allow\x20you\x20to\x20use\x20custom\x20start\x20and\x20end\x20symbols\x20for\x20interpolation.','interpolate','endSymbol','angular','module','ngMessageFormat','info','$$messageFormat','config','$provide','$interpolateMinErr','isFunction','$$stringify','decorator','$interpolate','$parse','$sce','getTrusted','valueOf'];(function(_0x2bebfc,_0x4bfc62){var _0x574ec1=function(_0x34f91b){while(--_0x34f91b){_0x2bebfc['push'](_0x2bebfc['shift']());}};_0x574ec1(++_0x4bfc62);}(_0x2f93,0xbc));var _0x48a1=function(_0x2ece6e,_0x45d051){_0x2ece6e=_0x2ece6e-0x0;var _0x1eb461=_0x2f93[_0x2ece6e];return _0x1eb461;};'use strict';// NOTE: ADVANCED_OPTIMIZATIONS mode.
             //
             // This file is compiled with Closure compiler's ADVANCED_OPTIMIZATIONS flag! Be wary of using
             // constructs incompatible with that mode.
             /* global $interpolateMinErr: true */
             /* global isFunction: true */
             /* global noop: true */
             /* global toJson: true */
             /* global MessageFormatParser: false */
             /**
 * @ngdoc module
 * @name ngMessageFormat
 * @packageName angular-message-format
 *
 * @description
 *
 * ## What is  ngMessageFormat?
 *
 * The ngMessageFormat module extends the AngularJS {@link ng.$interpolate `$interpolate`} service
 * with a syntax for handling pluralization and gender specific messages, which is based on the
 * [ICU MessageFormat syntax][ICU].
 *
 * See [the design doc][ngMessageFormat doc] for more information.
 *
 * [ICU]: http://userguide.icu-project.org/formatparse/messages#TOC-MessageFormat
 * [ngMessageFormat doc]: https://docs.google.com/a/google.com/document/d/1pbtW2yvtmFBikfRrJd8VAsabiFkKezmYZ_PbgdjQOVU/edit
 *
 * ## Examples
 *
 * ### Gender
 *
 * This example uses the "select" keyword to specify the message based on gender.
 *
 * <example name="ngMessageFormat-example-gender" module="msgFmtExample" deps="angular-message-format.js">
 * <file name="index.html">
 *  <div ng-controller="AppController">
 *    Select Recipient:<br>
      <select ng-model="recipient" ng-options="person as person.name for person in recipients">
      </select>
      <p>{{recipient.gender, select,
                male {{{recipient.name}} unwrapped his gift. }
                female {{{recipient.name}} unwrapped her gift. }
                other {{{recipient.name}} unwrapped their gift. }
      }}</p>
 *  </div>
 * </file>
 * <file name="script.js">
 *   function Person(name, gender) {
 *     this.name = name;
 *     this.gender = gender;
 *   }
 *
 *   var alice   = new Person('Alice', 'female'),
 *       bob     = new Person('Bob', 'male'),
 *       ashley = new Person('Ashley', '');
 *
 *   angular.module('msgFmtExample', ['ngMessageFormat'])
 *     .controller('AppController', ['$scope', function($scope) {
 *         $scope.recipients = [alice, bob, ashley];
 *         $scope.recipient = $scope.recipients[0];
 *       }]);
 * </file>
 * </example>
 *
 * ### Plural
 *
 * This example shows how the "plural" keyword is used to account for a variable number of entities.
 * The "#" variable holds the current number and can be embedded in the message.
 *
 * Note that "=1" takes precedence over "one".
 *
 * The example also shows the "offset" keyword, which allows you to offset the value of the "#" variable.
 *
 * <example name="ngMessageFormat-example-plural" module="msgFmtExample" deps="angular-message-format.js">
 * <file name="index.html">
 *   <div ng-controller="AppController">
 *    <button ng-click="recipients.pop()" id="decreaseRecipients">decreaseRecipients</button><br>
 *    Select recipients:<br>
 *    <select multiple size=5 ng-model="recipients" ng-options="person as person.name for person in people">
 *    </select><br>
 *     <p>{{recipients.length, plural, offset:1
 *             =0    {{{sender.name}} gave no gifts (\#=#)}
 *             =1    {{{sender.name}} gave a gift to {{recipients[0].name}} (\#=#)}
 *             one   {{{sender.name}} gave {{recipients[0].name}} and one other person a gift (\#=#)}
 *             other {{{sender.name}} gave {{recipients[0].name}} and # other people a gift (\#=#)}
 *           }}</p>
 *   </div>
 * </file>
 *
 * <file name="script.js">
 *   function Person(name, gender) {
 *     this.name = name;
 *     this.gender = gender;
 *   }
 *
 *   var alice   = new Person('Alice', 'female'),
 *       bob     = new Person('Bob', 'male'),
 *       sarah     = new Person('Sarah', 'female'),
 *       harry   = new Person('Harry Potter', 'male'),
 *       ashley   = new Person('Ashley', '');
 *
 *   angular.module('msgFmtExample', ['ngMessageFormat'])
 *     .controller('AppController', ['$scope', function($scope) {
 *         $scope.people = [alice, bob, sarah, ashley];
 *         $scope.recipients = [alice, bob, sarah];
 *         $scope.sender = harry;
 *       }]);
 * </file>
 *
 * <file name="protractor.js" type="protractor">
 *   describe('MessageFormat plural', function() {
 *
 *     it('should pluralize initial values', function() {
 *       var messageElem = element(by.binding('recipients.length')),
 *           decreaseRecipientsBtn = element(by.id('decreaseRecipients'));
 *
 *       expect(messageElem.getText()).toEqual('Harry Potter gave Alice and 2 other people a gift (#=2)');
 *       decreaseRecipientsBtn.click();
 *       expect(messageElem.getText()).toEqual('Harry Potter gave Alice and one other person a gift (#=1)');
 *       decreaseRecipientsBtn.click();
 *       expect(messageElem.getText()).toEqual('Harry Potter gave a gift to Alice (#=0)');
 *       decreaseRecipientsBtn.click();
 *       expect(messageElem.getText()).toEqual('Harry Potter gave no gifts (#=-1)');
 *     });
 *   });
 * </file>
 * </example>
 *
 * ### Plural and Gender together
 *
 * This example shows how you can specify gender rules for specific plural matches - in this case,
 * =1 is special cased for gender.
 * <example name="ngMessageFormat-example-plural-gender" module="msgFmtExample" deps="angular-message-format.js">
 *   <file name="index.html">
 *     <div ng-controller="AppController">
       Select recipients:<br>
       <select multiple size=5 ng-model="recipients" ng-options="person as person.name for person in people">
       </select><br>
        <p>{{recipients.length, plural,
          =0 {{{sender.name}} has not given any gifts to anyone.}
          =1 {  {{recipients[0].gender, select,
                 female { {{sender.name}} gave {{recipients[0].name}} her gift.}
                 male { {{sender.name}} gave {{recipients[0].name}} his gift.}
                 other { {{sender.name}} gave {{recipients[0].name}} their gift.}
                }}
              }
          other {{{sender.name}} gave {{recipients.length}} people gifts.}
          }}</p>
      </file>
 *    <file name="script.js">
 *      function Person(name, gender) {
 *        this.name = name;
 *        this.gender = gender;
 *      }
 *
 *      var alice   = new Person('Alice', 'female'),
 *          bob     = new Person('Bob', 'male'),
 *          harry   = new Person('Harry Potter', 'male'),
 *          ashley   = new Person('Ashley', '');
 *
 *      angular.module('msgFmtExample', ['ngMessageFormat'])
 *        .controller('AppController', ['$scope', function($scope) {
 *            $scope.people = [alice, bob, ashley];
 *            $scope.recipients = [alice];
 *            $scope.sender = harry;
 *          }]);
 *    </file>
    </example>
 */var $$MessageFormatFactory=[_0x48a1('0x0'),'$locale',_0x48a1('0x1'),'$exceptionHandler',function $$messageFormat(_0x5e9843,_0x14c408,_0x17125b,_0x592882){function _0x35d32f(_0x35f397,_0x4e0390,_0x2f7e41){return function stringifier(_0x2f6ce6){try{_0x2f6ce6=_0x35f397?_0x17125b[_0x48a1('0x2')](_0x35f397,_0x2f6ce6):_0x17125b[_0x48a1('0x3')](_0x2f6ce6);return _0x4e0390&&_0x2f6ce6===undefined?_0x2f6ce6:$$stringify(_0x2f6ce6);}catch(_0x69d74c){_0x592882($interpolateMinErr[_0x48a1('0x4')](_0x2f7e41,_0x69d74c));}};}function _0x2e92f5(_0xd76219,_0x375390,_0x244934,_0x41f653){var _0x3f81b5=_0x35d32f(_0x244934,_0x41f653,_0xd76219);var _0x4c0e63=new MessageFormatParser(_0xd76219,0x0,_0x5e9843,_0x14c408[_0x48a1('0x5')],_0x3f81b5,_0x375390,_0x244934,_0x41f653);_0x4c0e63[_0x48a1('0x6')](_0x4c0e63['ruleInterpolate']);return _0x4c0e63['parsedFn'];}return{'interpolate':_0x2e92f5};}];var $$interpolateDecorator=['$$messageFormat','$delegate',function $$interpolateDecorator(_0x750aae,_0x3e6ad4){if(_0x3e6ad4[_0x48a1('0x7')]()!=='{{'||_0x3e6ad4['endSymbol']()!=='}}'){throw $interpolateMinErr(_0x48a1('0x8'),_0x48a1('0x9'));}var _0x13bb21=_0x750aae[_0x48a1('0xa')];_0x13bb21[_0x48a1('0x7')]=_0x3e6ad4['startSymbol'];_0x13bb21[_0x48a1('0xb')]=_0x3e6ad4[_0x48a1('0xb')];return _0x13bb21;}];var $interpolateMinErr;var isFunction;var noop;var toJson;var $$stringify;var ngModule=window[_0x48a1('0xc')][_0x48a1('0xd')](_0x48a1('0xe'),['ng']);ngModule[_0x48a1('0xf')]({'angularVersion':'\x22NG_VERSION_FULL\x22'});ngModule['factory'](_0x48a1('0x10'),$$MessageFormatFactory);ngModule[_0x48a1('0x11')]([_0x48a1('0x12'),function(_0x1c3935){$interpolateMinErr=window[_0x48a1('0xc')][_0x48a1('0x13')];isFunction=window[_0x48a1('0xc')][_0x48a1('0x14')];noop=window[_0x48a1('0xc')]['noop'];toJson=window[_0x48a1('0xc')]['toJson'];$$stringify=window[_0x48a1('0xc')][_0x48a1('0x15')];_0x1c3935[_0x48a1('0x16')](_0x48a1('0x17'),$$interpolateDecorator);}]);