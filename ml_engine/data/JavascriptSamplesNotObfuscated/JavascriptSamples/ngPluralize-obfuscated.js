var a16_0x5d69=['noop','exec','$watch','pluralCat','debug','ngPluralize:\x20no\x20rule\x20defined\x20for\x20\x27','text','$locale','$interpolate','count','$attr','when','attr','$eval'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(a16_0x5d69,0x149));var a16_0x47de=function(_0x2328b3,_0x1f03fc){_0x2328b3=_0x2328b3-0x0;var _0xd708fe=a16_0x5d69[_0x2328b3];return _0xd708fe;};'use strict';/**
 * @ngdoc directive
 * @name ngPluralize
 * @restrict EA
 *
 * @description
 * `ngPluralize` is a directive that displays messages according to en-US localization rules.
 * These rules are bundled with angular.js, but can be overridden
 * (see {@link guide/i18n AngularJS i18n} dev guide). You configure ngPluralize directive
 * by specifying the mappings between
 * [plural categories](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html)
 * and the strings to be displayed.
 *
 * ## Plural categories and explicit number rules
 * There are two
 * [plural categories](http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html)
 * in AngularJS's default en-US locale: "one" and "other".
 *
 * While a plural category may match many numbers (for example, in en-US locale, "other" can match
 * any number that is not 1), an explicit number rule can only match one number. For example, the
 * explicit number rule for "3" matches the number 3. There are examples of plural categories
 * and explicit number rules throughout the rest of this documentation.
 *
 * ## Configuring ngPluralize
 * You configure ngPluralize by providing 2 attributes: `count` and `when`.
 * You can also provide an optional attribute, `offset`.
 *
 * The value of the `count` attribute can be either a string or an {@link guide/expression
 * AngularJS expression}; these are evaluated on the current scope for its bound value.
 *
 * The `when` attribute specifies the mappings between plural categories and the actual
 * string to be displayed. The value of the attribute should be a JSON object.
 *
 * The following example shows how to configure ngPluralize:
 *
 * ```html
 * <ng-pluralize count="personCount"
                 when="{'0': 'Nobody is viewing.',
 *                      'one': '1 person is viewing.',
 *                      'other': '{} people are viewing.'}">
 * </ng-pluralize>
 *```
 *
 * In the example, `"0: Nobody is viewing."` is an explicit number rule. If you did not
 * specify this rule, 0 would be matched to the "other" category and "0 people are viewing"
 * would be shown instead of "Nobody is viewing". You can specify an explicit number rule for
 * other numbers, for example 12, so that instead of showing "12 people are viewing", you can
 * show "a dozen people are viewing".
 *
 * You can use a set of closed braces (`{}`) as a placeholder for the number that you want substituted
 * into pluralized strings. In the previous example, AngularJS will replace `{}` with
 * <span ng-non-bindable>`{{personCount}}`</span>. The closed braces `{}` is a placeholder
 * for <span ng-non-bindable>{{numberExpression}}</span>.
 *
 * If no rule is defined for a category, then an empty string is displayed and a warning is generated.
 * Note that some locales define more categories than `one` and `other`. For example, fr-fr defines `few` and `many`.
 *
 * ## Configuring ngPluralize with offset
 * The `offset` attribute allows further customization of pluralized text, which can result in
 * a better user experience. For example, instead of the message "4 people are viewing this document",
 * you might display "John, Kate and 2 others are viewing this document".
 * The offset attribute allows you to offset a number by any desired value.
 * Let's take a look at an example:
 *
 * ```html
 * <ng-pluralize count="personCount" offset=2
 *               when="{'0': 'Nobody is viewing.',
 *                      '1': '{{person1}} is viewing.',
 *                      '2': '{{person1}} and {{person2}} are viewing.',
 *                      'one': '{{person1}}, {{person2}} and one other person are viewing.',
 *                      'other': '{{person1}}, {{person2}} and {} other people are viewing.'}">
 * </ng-pluralize>
 * ```
 *
 * Notice that we are still using two plural categories(one, other), but we added
 * three explicit number rules 0, 1 and 2.
 * When one person, perhaps John, views the document, "John is viewing" will be shown.
 * When three people view the document, no explicit number rule is found, so
 * an offset of 2 is taken off 3, and AngularJS uses 1 to decide the plural category.
 * In this case, plural category 'one' is matched and "John, Mary and one other person are viewing"
 * is shown.
 *
 * Note that when you specify offsets, you must provide explicit number rules for
 * numbers from 0 up to and including the offset. If you use an offset of 3, for example,
 * you must provide explicit number rules for 0, 1, 2 and 3. You must also provide plural strings for
 * plural categories "one" and "other".
 *
 * @param {string|expression} count The variable to be bound to.
 * @param {string} when The mapping between plural category to its corresponding strings.
 * @param {number=} offset Offset to deduct from the total number.
 *
 * @example
    <example module="pluralizeExample" name="ng-pluralize">
      <file name="index.html">
        <script>
          angular.module('pluralizeExample', [])
            .controller('ExampleController', ['$scope', function($scope) {
              $scope.person1 = 'Igor';
              $scope.person2 = 'Misko';
              $scope.personCount = 1;
            }]);
        </script>
        <div ng-controller="ExampleController">
          <label>Person 1:<input type="text" ng-model="person1" value="Igor" /></label><br/>
          <label>Person 2:<input type="text" ng-model="person2" value="Misko" /></label><br/>
          <label>Number of People:<input type="text" ng-model="personCount" value="1" /></label><br/>

          <!--- Example with simple pluralization rules for en locale --->
          Without Offset:
          <ng-pluralize count="personCount"
                        when="{'0': 'Nobody is viewing.',
                               'one': '1 person is viewing.',
                               'other': '{} people are viewing.'}">
          </ng-pluralize><br>

          <!--- Example with offset --->
          With Offset(2):
          <ng-pluralize count="personCount" offset=2
                        when="{'0': 'Nobody is viewing.',
                               '1': '{{person1}} is viewing.',
                               '2': '{{person1}} and {{person2}} are viewing.',
                               'one': '{{person1}}, {{person2}} and one other person are viewing.',
                               'other': '{{person1}}, {{person2}} and {} other people are viewing.'}">
          </ng-pluralize>
        </div>
      </file>
      <file name="protractor.js" type="protractor">
        it('should show correct pluralized string', function() {
          var withoutOffset = element.all(by.css('ng-pluralize')).get(0);
          var withOffset = element.all(by.css('ng-pluralize')).get(1);
          var countInput = element(by.model('personCount'));

          expect(withoutOffset.getText()).toEqual('1 person is viewing.');
          expect(withOffset.getText()).toEqual('Igor is viewing.');

          countInput.clear();
          countInput.sendKeys('0');

          expect(withoutOffset.getText()).toEqual('Nobody is viewing.');
          expect(withOffset.getText()).toEqual('Nobody is viewing.');

          countInput.clear();
          countInput.sendKeys('2');

          expect(withoutOffset.getText()).toEqual('2 people are viewing.');
          expect(withOffset.getText()).toEqual('Igor and Misko are viewing.');

          countInput.clear();
          countInput.sendKeys('3');

          expect(withoutOffset.getText()).toEqual('3 people are viewing.');
          expect(withOffset.getText()).toEqual('Igor, Misko and one other person are viewing.');

          countInput.clear();
          countInput.sendKeys('4');

          expect(withoutOffset.getText()).toEqual('4 people are viewing.');
          expect(withOffset.getText()).toEqual('Igor, Misko and 2 other people are viewing.');
        });
        it('should show data-bound names', function() {
          var withOffset = element.all(by.css('ng-pluralize')).get(1);
          var personCount = element(by.model('personCount'));
          var person1 = element(by.model('person1'));
          var person2 = element(by.model('person2'));
          personCount.clear();
          personCount.sendKeys('4');
          person1.clear();
          person1.sendKeys('Di');
          person2.clear();
          person2.sendKeys('Vojta');
          expect(withOffset.getText()).toEqual('Di, Vojta and 2 other people are viewing.');
        });
      </file>
    </example>
 */var ngPluralizeDirective=[a16_0x47de('0x0'),a16_0x47de('0x1'),'$log',function(_0x5b4a93,_0x24c864,_0x4d2d62){var _0x38f6f1=/{}/g,_0x415fdd=/^when(Minus)?(.+)$/;return{'link':function(_0x2835af,_0x17952a,_0x4f990b){var _0x4f8d73=_0x4f990b[a16_0x47de('0x2')],_0x2d931c=_0x4f990b[a16_0x47de('0x3')][a16_0x47de('0x4')]&&_0x17952a[a16_0x47de('0x5')](_0x4f990b[a16_0x47de('0x3')]['when']),_0x4bc8db=_0x4f990b['offset']||0x0,_0x587089=_0x2835af[a16_0x47de('0x6')](_0x2d931c)||{},_0x4bfb41={},_0x573ef6=_0x24c864['startSymbol'](),_0x1193d9=_0x24c864['endSymbol'](),_0x4ae8cc=_0x573ef6+_0x4f8d73+'-'+_0x4bc8db+_0x1193d9,_0x2cbf08=angular[a16_0x47de('0x7')],_0x37c16b;forEach(_0x4f990b,function(_0x210477,_0x2c2a66){var _0x356e1b=_0x415fdd[a16_0x47de('0x8')](_0x2c2a66);if(_0x356e1b){var _0x30bbea=(_0x356e1b[0x1]?'-':'')+lowercase(_0x356e1b[0x2]);_0x587089[_0x30bbea]=_0x17952a[a16_0x47de('0x5')](_0x4f990b['$attr'][_0x2c2a66]);}});forEach(_0x587089,function(_0x26d586,_0x228590){_0x4bfb41[_0x228590]=_0x24c864(_0x26d586['replace'](_0x38f6f1,_0x4ae8cc));});_0x2835af[a16_0x47de('0x9')](_0x4f8d73,function ngPluralizeWatchAction(_0x217736){var _0x257d35=parseFloat(_0x217736);var _0xb38c39=isNumberNaN(_0x257d35);if(!_0xb38c39&&!(_0x257d35 in _0x587089)){_0x257d35=_0x5b4a93[a16_0x47de('0xa')](_0x257d35-_0x4bc8db);}if(_0x257d35!==_0x37c16b&&!(_0xb38c39&&isNumberNaN(_0x37c16b))){_0x2cbf08();var _0x1b0981=_0x4bfb41[_0x257d35];if(isUndefined(_0x1b0981)){if(_0x217736!=null){_0x4d2d62[a16_0x47de('0xb')](a16_0x47de('0xc')+_0x257d35+'\x27\x20in\x20'+_0x2d931c);}_0x2cbf08=noop;_0x214c43();}else{_0x2cbf08=_0x2835af['$watch'](_0x1b0981,_0x214c43);}_0x37c16b=_0x257d35;}});function _0x214c43(_0x5c0b2d){_0x17952a[a16_0x47de('0xd')](_0x5c0b2d||'');}}};}];