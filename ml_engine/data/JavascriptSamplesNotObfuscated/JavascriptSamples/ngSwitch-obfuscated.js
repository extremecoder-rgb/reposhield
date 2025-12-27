var a31_0x39c3=['end\x20ngSwitchWhen','enter','element','^ngSwitch','split','ngSwitchWhenSeparator','sort','filter','$animate','ngSwitch','$scope','cases','splice','$watch','length','clone','$destroy','transclude','push','$$createComment'];(function(_0x314184,_0x24237b){var _0x5f1efc=function(_0x2a4c0b){while(--_0x2a4c0b){_0x314184['push'](_0x314184['shift']());}};_0x5f1efc(++_0x24237b);}(a31_0x39c3,0x1d4));var a31_0x474f=function(_0x522e3e,_0x39225a){_0x522e3e=_0x522e3e-0x0;var _0x3a76f4=a31_0x39c3[_0x522e3e];return _0x3a76f4;};'use strict';/**
 * @ngdoc directive
 * @name ngSwitch
 * @restrict EA
 *
 * @description
 * The `ngSwitch` directive is used to conditionally swap DOM structure on your template based on a scope expression.
 * Elements within `ngSwitch` but without `ngSwitchWhen` or `ngSwitchDefault` directives will be preserved at the location
 * as specified in the template.
 *
 * The directive itself works similar to ngInclude, however, instead of downloading template code (or loading it
 * from the template cache), `ngSwitch` simply chooses one of the nested elements and makes it visible based on which element
 * matches the value obtained from the evaluated expression. In other words, you define a container element
 * (where you place the directive), place an expression on the **`on="..."` attribute**
 * (or the **`ng-switch="..."` attribute**), define any inner elements inside of the directive and place
 * a when attribute per element. The when attribute is used to inform ngSwitch which element to display when the on
 * expression is evaluated. If a matching expression is not found via a when attribute then an element with the default
 * attribute is displayed.
 *
 * <div class="alert alert-info">
 * Be aware that the attribute values to match against cannot be expressions. They are interpreted
 * as literal string values to match against.
 * For example, **`ng-switch-when="someVal"`** will match against the string `"someVal"` not against the
 * value of the expression `$scope.someVal`.
 * </div>

 * @animations
 * | Animation                        | Occurs                              |
 * |----------------------------------|-------------------------------------|
 * | {@link ng.$animate#enter enter}  | after the ngSwitch contents change and the matched child element is placed inside the container |
 * | {@link ng.$animate#leave leave}  | after the ngSwitch contents change and just before the former contents are removed from the DOM |
 *
 * @usage
 *
 * ```
 * <ANY ng-switch="expression">
 *   <ANY ng-switch-when="matchValue1">...</ANY>
 *   <ANY ng-switch-when="matchValue2">...</ANY>
 *   <ANY ng-switch-default>...</ANY>
 * </ANY>
 * ```
 *
 *
 * @scope
 * @priority 1200
 * @param {*} ngSwitch|on expression to match against <code>ng-switch-when</code>.
 * On child elements add:
 *
 * * `ngSwitchWhen`: the case statement to match against. If match then this
 *   case will be displayed. If the same match appears multiple times, all the
 *   elements will be displayed. It is possible to associate multiple values to
 *   the same `ngSwitchWhen` by defining the optional attribute
 *   `ngSwitchWhenSeparator`. The separator will be used to split the value of
 *   the `ngSwitchWhen` attribute into multiple tokens, and the element will show
 *   if any of the `ngSwitch` evaluates to any of these tokens.
 * * `ngSwitchDefault`: the default case when no other case match. If there
 *   are multiple default cases, all of them will be displayed when no other
 *   case match.
 *
 *
 * @example
  <example module="switchExample" deps="angular-animate.js" animations="true" name="ng-switch">
    <file name="index.html">
      <div ng-controller="ExampleController">
        <select ng-model="selection" ng-options="item for item in items">
        </select>
        <code>selection={{selection}}</code>
        <hr/>
        <div class="animate-switch-container"
          ng-switch on="selection">
            <div class="animate-switch" ng-switch-when="settings|options" ng-switch-when-separator="|">Settings Div</div>
            <div class="animate-switch" ng-switch-when="home">Home Span</div>
            <div class="animate-switch" ng-switch-default>default</div>
        </div>
      </div>
    </file>
    <file name="script.js">
      angular.module('switchExample', ['ngAnimate'])
        .controller('ExampleController', ['$scope', function($scope) {
          $scope.items = ['settings', 'home', 'options', 'other'];
          $scope.selection = $scope.items[0];
        }]);
    </file>
    <file name="animations.css">
      .animate-switch-container {
        position:relative;
        background:white;
        border:1px solid black;
        height:40px;
        overflow:hidden;
      }

      .animate-switch {
        padding:10px;
      }

      .animate-switch.ng-animate {
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;

        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
      }

      .animate-switch.ng-leave.ng-leave-active,
      .animate-switch.ng-enter {
        top:-50px;
      }
      .animate-switch.ng-leave,
      .animate-switch.ng-enter.ng-enter-active {
        top:0;
      }
    </file>
    <file name="protractor.js" type="protractor">
      var switchElem = element(by.css('[ng-switch]'));
      var select = element(by.model('selection'));

      it('should start in settings', function() {
        expect(switchElem.getText()).toMatch(/Settings Div/);
      });
      it('should change to home', function() {
        select.all(by.css('option')).get(1).click();
        expect(switchElem.getText()).toMatch(/Home Span/);
      });
      it('should change to settings via "options"', function() {
        select.all(by.css('option')).get(2).click();
        expect(switchElem.getText()).toMatch(/Settings Div/);
      });
      it('should select default', function() {
        select.all(by.css('option')).get(3).click();
        expect(switchElem.getText()).toMatch(/default/);
      });
    </file>
  </example>
 */var ngSwitchDirective=[a31_0x474f('0x0'),'$compile',function(_0x30ed79,_0x4441e4){return{'require':a31_0x474f('0x1'),'controller':[a31_0x474f('0x2'),function NgSwitchController(){this[a31_0x474f('0x3')]={};}],'link':function(_0x4257d8,_0x1cb4db,_0x19573c,_0x398e49){var _0xb24d99=_0x19573c[a31_0x474f('0x1')]||_0x19573c['on'],_0x17f39e=[],_0x16f1c2=[],_0x283d92=[],_0x980f1a=[];var _0x29a6b2=function(_0x5c2b29,_0x119cd7){return function(_0x14cc37){if(_0x14cc37!==![])_0x5c2b29[a31_0x474f('0x4')](_0x119cd7,0x1);};};_0x4257d8[a31_0x474f('0x5')](_0xb24d99,function ngSwitchWatchAction(_0x2a68b0){var _0x54d013,_0x150951;while(_0x283d92[a31_0x474f('0x6')]){_0x30ed79['cancel'](_0x283d92['pop']());}for(_0x54d013=0x0,_0x150951=_0x980f1a[a31_0x474f('0x6')];_0x54d013<_0x150951;++_0x54d013){var _0x5906ce=getBlockNodes(_0x16f1c2[_0x54d013][a31_0x474f('0x7')]);_0x980f1a[_0x54d013][a31_0x474f('0x8')]();var _0x3e3b86=_0x283d92[_0x54d013]=_0x30ed79['leave'](_0x5906ce);_0x3e3b86['done'](_0x29a6b2(_0x283d92,_0x54d013));}_0x16f1c2['length']=0x0;_0x980f1a[a31_0x474f('0x6')]=0x0;if(_0x17f39e=_0x398e49[a31_0x474f('0x3')]['!'+_0x2a68b0]||_0x398e49[a31_0x474f('0x3')]['?']){forEach(_0x17f39e,function(_0x5f1ccf){_0x5f1ccf[a31_0x474f('0x9')](function(_0x416c77,_0x2bf2f5){_0x980f1a[a31_0x474f('0xa')](_0x2bf2f5);var _0x58878f=_0x5f1ccf['element'];_0x416c77[_0x416c77[a31_0x474f('0x6')]++]=_0x4441e4[a31_0x474f('0xb')](a31_0x474f('0xc'));var _0x4b9d4b={'clone':_0x416c77};_0x16f1c2[a31_0x474f('0xa')](_0x4b9d4b);_0x30ed79[a31_0x474f('0xd')](_0x416c77,_0x58878f['parent'](),_0x58878f);});});}});}};}];var ngSwitchWhenDirective=ngDirective({'transclude':a31_0x474f('0xe'),'priority':0x4b0,'require':a31_0x474f('0xf'),'multiElement':!![],'link':function(_0x1e2942,_0x139e25,_0x2309ac,_0x484887,_0x5bb9c4){var _0xd709d9=_0x2309ac['ngSwitchWhen'][a31_0x474f('0x10')](_0x2309ac[a31_0x474f('0x11')])[a31_0x474f('0x12')]()[a31_0x474f('0x13')](function(_0x139e25,_0x5b18d4,_0x479137){return _0x479137[_0x5b18d4-0x1]!==_0x139e25;});forEach(_0xd709d9,function(_0x191dc6){_0x484887[a31_0x474f('0x3')]['!'+_0x191dc6]=_0x484887[a31_0x474f('0x3')]['!'+_0x191dc6]||[];_0x484887[a31_0x474f('0x3')]['!'+_0x191dc6]['push']({'transclude':_0x5bb9c4,'element':_0x139e25});});}});var ngSwitchDefaultDirective=ngDirective({'transclude':a31_0x474f('0xe'),'priority':0x4b0,'require':a31_0x474f('0xf'),'multiElement':!![],'link':function(_0x7405d2,_0x1cd1a9,_0x4551c7,_0x58f34b,_0x5d6dee){_0x58f34b[a31_0x474f('0x3')]['?']=_0x58f34b[a31_0x474f('0x3')]['?']||[];_0x58f34b[a31_0x474f('0x3')]['?'][a31_0x474f('0xa')]({'transclude':_0x5d6dee,'element':_0x1cd1a9});}});