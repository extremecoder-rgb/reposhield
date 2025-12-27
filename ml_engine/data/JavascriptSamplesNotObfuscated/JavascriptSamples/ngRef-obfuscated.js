var a19_0xe4c7=['assign','nonassign','Expression\x20in\x20ngRef=\x22{0}\x22\x20is\x20non-assignable!','hasOwnProperty','ngRefRead','$element','data','Controller','noctrl','The\x20controller\x20for\x20ngRefRead=\x22{0}\x22\x20could\x20not\x20be\x20found\x20on\x20ngRef=\x22{1}\x22','$destroy','$parse','ngRef'];(function(_0x50154c,_0x534294){var _0x19f369=function(_0x4fa250){while(--_0x4fa250){_0x50154c['push'](_0x50154c['shift']());}};_0x19f369(++_0x534294);}(a19_0xe4c7,0x129));var a19_0x403f=function(_0x362ea0,_0x1882e8){_0x362ea0=_0x362ea0-0x0;var _0x42eab9=a19_0xe4c7[_0x362ea0];return _0x42eab9;};'use strict';/**
 * @ngdoc directive
 * @name ngRef
 * @restrict A
 *
 * @description
 * The `ngRef` attribute tells AngularJS to assign the controller of a component (or a directive)
 * to the given property in the current scope. It is also possible to add the jqlite-wrapped DOM
 * element to the scope.
 *
 * If the element with `ngRef` is destroyed `null` is assigned to the property.
 *
 * Note that if you want to assign from a child into the parent scope, you must initialize the
 * target property on the parent scope, otherwise `ngRef` will assign on the child scope.
 * This commonly happens when assigning elements or components wrapped in {@link ngIf} or
 * {@link ngRepeat}. See the second example below.
 *
 *
 * @element ANY
 * @param {string} ngRef property name - A valid AngularJS expression identifier to which the
 *                       controller or jqlite-wrapped DOM element will be bound.
 * @param {string=} ngRefRead read value - The name of a directive (or component) on this element,
 *                            or the special string `$element`. If a name is provided, `ngRef` will
 *                            assign the matching controller. If `$element` is provided, the element
 *                            itself is assigned (even if a controller is available).
 *
 *
 * @example
 * ### Simple toggle
 * This example shows how the controller of the component toggle
 * is reused in the template through the scope to use its logic.
 * <example name="ng-ref-component" module="myApp">
 *   <file name="index.html">
 *     <my-toggle ng-ref="myToggle"></my-toggle>
 *     <button ng-click="myToggle.toggle()">Toggle</button>
 *     <div ng-show="myToggle.isOpen()">
 *       You are using a component in the same template to show it.
 *     </div>
 *   </file>
 *   <file name="index.js">
 *     angular.module('myApp', [])
 *     .component('myToggle', {
 *       controller: function ToggleController() {
 *         var opened = false;
 *         this.isOpen = function() { return opened; };
 *         this.toggle = function() { opened = !opened; };
 *       }
 *     });
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *      it('should publish the toggle into the scope', function() {
 *        var toggle = element(by.buttonText('Toggle'));
 *        expect(toggle.evaluate('myToggle.isOpen()')).toEqual(false);
 *        toggle.click();
 *        expect(toggle.evaluate('myToggle.isOpen()')).toEqual(true);
 *      });
 *   </file>
 * </example>
 *
 * @example
 * ### ngRef inside scopes
 * This example shows how `ngRef` works with child scopes. The `ngRepeat`-ed `myWrapper` components
 * are assigned to the scope of `myRoot`, because the `toggles` property has been initialized.
 * The repeated `myToggle` components are published to the child scopes created by `ngRepeat`.
 * `ngIf` behaves similarly - the assignment of `myToggle` happens in the `ngIf` child scope,
 * because the target property has not been initialized on the `myRoot` component controller.
 *
 * <example name="ng-ref-scopes" module="myApp">
 *   <file name="index.html">
 *     <my-root></my-root>
 *   </file>
 *   <file name="index.js">
 *     angular.module('myApp', [])
 *     .component('myRoot', {
 *       templateUrl: 'root.html',
 *       controller: function() {
 *         this.wrappers = []; // initialize the array so that the wrappers are assigned into the parent scope
 *       }
 *     })
 *     .component('myToggle', {
 *       template: '<strong>myToggle</strong><button ng-click="$ctrl.toggle()" ng-transclude></button>',
 *       transclude: true,
 *       controller: function ToggleController() {
 *         var opened = false;
 *         this.isOpen = function() { return opened; };
 *         this.toggle = function() { opened = !opened; };
 *       }
 *     })
 *     .component('myWrapper', {
 *       transclude: true,
 *       template: '<strong>myWrapper</strong>' +
 *         '<div>ngRepeatToggle.isOpen(): {{$ctrl.ngRepeatToggle.isOpen() | json}}</div>' +
 *         '<my-toggle ng-ref="$ctrl.ngRepeatToggle"><ng-transclude></ng-transclude></my-toggle>'
 *     });
 *   </file>
 *   <file name="root.html">
 *     <strong>myRoot</strong>
 *     <my-toggle ng-ref="$ctrl.outerToggle">Outer Toggle</my-toggle>
 *     <div>outerToggle.isOpen(): {{$ctrl.outerToggle.isOpen() | json}}</div>
 *     <div><em>wrappers assigned to root</em><br>
 *     <div ng-repeat="wrapper in $ctrl.wrappers">
 *       wrapper.ngRepeatToggle.isOpen(): {{wrapper.ngRepeatToggle.isOpen() | json}}
 *     </div>
 *
 *     <ul>
 *       <li ng-repeat="(index, value) in [1,2,3]">
 *         <strong>ngRepeat</strong>
 *         <div>outerToggle.isOpen(): {{$ctrl.outerToggle.isOpen() | json}}</div>
 *         <my-wrapper ng-ref="$ctrl.wrappers[index]">ngRepeat Toggle {{$index + 1}}</my-wrapper>
 *       </li>
 *     </ul>
 *
 *     <div>ngIfToggle.isOpen(): {{ngIfToggle.isOpen()}} // This is always undefined because it's
 *       assigned to the child scope created by ngIf.
 *     </div>
 *     <div ng-if="true">
          <strong>ngIf</strong>
 *        <my-toggle ng-ref="ngIfToggle">ngIf Toggle</my-toggle>
 *        <div>ngIfToggle.isOpen(): {{ngIfToggle.isOpen() | json}}</div>
 *        <div>outerToggle.isOpen(): {{$ctrl.outerToggle.isOpen() | json}}</div>
 *     </div>
 *   </file>
 *   <file name="styles.css">
 *     ul {
 *       list-style: none;
 *       padding-left: 0;
 *     }
 *
 *     li[ng-repeat] {
 *       background: lightgreen;
 *       padding: 8px;
 *       margin: 8px;
 *     }
 *
 *     [ng-if] {
 *       background: lightgrey;
 *       padding: 8px;
 *     }
 *
 *     my-root {
 *       background: lightgoldenrodyellow;
 *       padding: 8px;
 *       display: block;
 *     }
 *
 *     my-wrapper {
 *       background: lightsalmon;
 *       padding: 8px;
 *       display: block;
 *     }
 *
 *     my-toggle {
 *       background: lightblue;
 *       padding: 8px;
 *       display: block;
 *     }
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *      var OuterToggle = function() {
 *        this.toggle = function() {
 *          element(by.buttonText('Outer Toggle')).click();
 *        };
 *        this.isOpen = function() {
 *          return element.all(by.binding('outerToggle.isOpen()')).first().getText();
 *        };
 *      };
 *      var NgRepeatToggle = function(i) {
 *        var parent = element.all(by.repeater('(index, value) in [1,2,3]')).get(i - 1);
 *        this.toggle = function() {
 *          element(by.buttonText('ngRepeat Toggle ' + i)).click();
 *        };
 *        this.isOpen = function() {
 *          return parent.element(by.binding('ngRepeatToggle.isOpen() | json')).getText();
 *        };
 *        this.isOuterOpen = function() {
 *          return parent.element(by.binding('outerToggle.isOpen() | json')).getText();
 *        };
 *      };
 *      var NgRepeatToggles = function() {
 *        var toggles = [1,2,3].map(function(i) { return new NgRepeatToggle(i); });
 *        this.forEach = function(fn) {
 *          toggles.forEach(fn);
 *        };
 *        this.isOuterOpen = function(i) {
 *          return toggles[i - 1].isOuterOpen();
 *        };
 *      };
 *      var NgIfToggle = function() {
 *        var parent = element(by.css('[ng-if]'));
 *        this.toggle = function() {
 *          element(by.buttonText('ngIf Toggle')).click();
 *        };
 *        this.isOpen = function() {
 *          return by.binding('ngIfToggle.isOpen() | json').getText();
 *        };
 *        this.isOuterOpen = function() {
 *          return parent.element(by.binding('outerToggle.isOpen() | json')).getText();
 *        };
 *      };
 *
 *      it('should toggle the outer toggle', function() {
 *        var outerToggle = new OuterToggle();
 *        expect(outerToggle.isOpen()).toEqual('outerToggle.isOpen(): false');
 *        outerToggle.toggle();
 *        expect(outerToggle.isOpen()).toEqual('outerToggle.isOpen(): true');
 *      });
 *
 *      it('should toggle all outer toggles', function() {
 *        var outerToggle = new OuterToggle();
 *        var repeatToggles = new NgRepeatToggles();
 *        var ifToggle = new NgIfToggle();
 *        expect(outerToggle.isOpen()).toEqual('outerToggle.isOpen(): false');
 *        expect(repeatToggles.isOuterOpen(1)).toEqual('outerToggle.isOpen(): false');
 *        expect(repeatToggles.isOuterOpen(2)).toEqual('outerToggle.isOpen(): false');
 *        expect(repeatToggles.isOuterOpen(3)).toEqual('outerToggle.isOpen(): false');
 *        expect(ifToggle.isOuterOpen()).toEqual('outerToggle.isOpen(): false');
 *        outerToggle.toggle();
 *        expect(outerToggle.isOpen()).toEqual('outerToggle.isOpen(): true');
 *        expect(repeatToggles.isOuterOpen(1)).toEqual('outerToggle.isOpen(): true');
 *        expect(repeatToggles.isOuterOpen(2)).toEqual('outerToggle.isOpen(): true');
 *        expect(repeatToggles.isOuterOpen(3)).toEqual('outerToggle.isOpen(): true');
 *        expect(ifToggle.isOuterOpen()).toEqual('outerToggle.isOpen(): true');
 *      });
 *
 *      it('should toggle each repeat iteration separately', function() {
 *        var repeatToggles = new NgRepeatToggles();
 *
 *        repeatToggles.forEach(function(repeatToggle) {
 *          expect(repeatToggle.isOpen()).toEqual('ngRepeatToggle.isOpen(): false');
 *          expect(repeatToggle.isOuterOpen()).toEqual('outerToggle.isOpen(): false');
 *          repeatToggle.toggle();
 *          expect(repeatToggle.isOpen()).toEqual('ngRepeatToggle.isOpen(): true');
 *          expect(repeatToggle.isOuterOpen()).toEqual('outerToggle.isOpen(): false');
 *        });
 *      });
 *   </file>
 * </example>
 *
 */var ngRefMinErr=minErr('ngRef');var ngRefDirective=[a19_0x403f('0x0'),function(_0x4d9362){return{'priority':-0x1,'restrict':'A','compile':function(_0x479bba,_0x450f72){var _0x40da60=directiveNormalize(nodeName_(_0x479bba));var _0x3e0ff2=_0x4d9362(_0x450f72[a19_0x403f('0x1')]);var _0x548d67=_0x3e0ff2[a19_0x403f('0x2')]||function(){throw ngRefMinErr(a19_0x403f('0x3'),a19_0x403f('0x4'),_0x450f72[a19_0x403f('0x1')]);};return function(_0x54c119,_0x2792b4,_0x26524c){var _0x1d61fd;if(_0x26524c[a19_0x403f('0x5')](a19_0x403f('0x6'))){if(_0x26524c['ngRefRead']===a19_0x403f('0x7')){_0x1d61fd=_0x2792b4;}else{_0x1d61fd=_0x2792b4[a19_0x403f('0x8')]('$'+_0x26524c[a19_0x403f('0x6')]+a19_0x403f('0x9'));if(!_0x1d61fd){throw ngRefMinErr(a19_0x403f('0xa'),a19_0x403f('0xb'),_0x26524c[a19_0x403f('0x6')],_0x450f72[a19_0x403f('0x1')]);}}}else{_0x1d61fd=_0x2792b4['data']('$'+_0x40da60+a19_0x403f('0x9'));}_0x1d61fd=_0x1d61fd||_0x2792b4;_0x548d67(_0x54c119,_0x1d61fd);_0x2792b4['on'](a19_0x403f('0xc'),function(){if(_0x3e0ff2(_0x54c119)===_0x1d61fd){_0x548d67(_0x54c119,null);}});};}};}];