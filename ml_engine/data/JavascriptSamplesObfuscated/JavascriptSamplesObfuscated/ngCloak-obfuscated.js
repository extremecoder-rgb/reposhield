var _0x2719=['ngCloak','ng-cloak','$set'];(function(_0x390684,_0x2f13cb){var _0x1d023d=function(_0x2a1abb){while(--_0x2a1abb){_0x390684['push'](_0x390684['shift']());}};_0x1d023d(++_0x2f13cb);}(_0x2719,0xef));var _0x17c8=function(_0x14a540,_0x3825d0){_0x14a540=_0x14a540-0x0;var _0x6d757c=_0x2719[_0x14a540];return _0x6d757c;};'use strict';/**
 * @ngdoc directive
 * @name ngCloak
 * @restrict AC
 *
 * @description
 * The `ngCloak` directive is used to prevent the AngularJS html template from being briefly
 * displayed by the browser in its raw (uncompiled) form while your application is loading. Use this
 * directive to avoid the undesirable flicker effect caused by the html template display.
 *
 * The directive can be applied to the `<body>` element, but the preferred usage is to apply
 * multiple `ngCloak` directives to small portions of the page to permit progressive rendering
 * of the browser view.
 *
 * `ngCloak` works in cooperation with the following css rule embedded within `angular.js` and
 * `angular.min.js`.
 * For CSP mode please add `angular-csp.css` to your html file (see {@link ng.directive:ngCsp ngCsp}).
 *
 * ```css
 * [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
 *   display: none !important;
 * }
 * ```
 *
 * When this css rule is loaded by the browser, all html elements (including their children) that
 * are tagged with the `ngCloak` directive are hidden. When AngularJS encounters this directive
 * during the compilation of the template it deletes the `ngCloak` element attribute, making
 * the compiled element visible.
 *
 * For the best result, the `angular.js` script must be loaded in the head section of the html
 * document; alternatively, the css rule above must be included in the external stylesheet of the
 * application.
 *
 * @element ANY
 *
 * @example
   <example name="ng-cloak">
     <file name="index.html">
        <div id="template1" ng-cloak>{{ 'hello' }}</div>
        <div id="template2" class="ng-cloak">{{ 'world' }}</div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should remove the template directive and css class', function() {
         expect($('#template1').getAttribute('ng-cloak')).
           toBeNull();
         expect($('#template2').getAttribute('ng-cloak')).
           toBeNull();
       });
     </file>
   </example>
 *
 */var ngCloakDirective=ngDirective({'compile':function(_0x257b50,_0x13c0ad){_0x13c0ad[_0x17c8('0x0')](_0x17c8('0x1'),undefined);_0x257b50['removeClass'](_0x17c8('0x2'));}});