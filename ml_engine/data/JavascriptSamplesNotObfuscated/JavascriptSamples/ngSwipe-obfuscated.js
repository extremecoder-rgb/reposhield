var a29_0x2b31=['mouse','bind','$apply','triggerHandler','ngSwipeLeft','swipeleft','ngSwipeRight','swiperight','directive','$parse','$swipe','abs','touch','isDefined','ngSwipeDisableMouse','push'];(function(_0x2e559d,_0x5a68a2){var _0x16cac6=function(_0x4acfe1){while(--_0x4acfe1){_0x2e559d['push'](_0x2e559d['shift']());}};_0x16cac6(++_0x5a68a2);}(a29_0x2b31,0x98));var a29_0x553d=function(_0x590645,_0x2f9521){_0x590645=_0x590645-0x0;var _0x306821=a29_0x2b31[_0x590645];return _0x306821;};'use strict';/* global ngTouch: false */
             /**
 * @ngdoc directive
 * @name ngSwipeLeft
 *
 * @deprecated
 * sinceVersion="1.7.0"
 *
 * See the {@link ngTouch module} documentation for more information.
 *
 * @description
 * Specify custom behavior when an element is swiped to the left on a touchscreen device.
 * A leftward swipe is a quick, right-to-left slide of the finger.
 * Though ngSwipeLeft is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * To disable the mouse click and drag functionality, add `ng-swipe-disable-mouse` to
 * the `ng-swipe-left` or `ng-swipe-right` DOM Element.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeLeft {@link guide/expression Expression} to evaluate
 * upon left swipe. (Event object is available as `$event`)
 *
 * @example
    <example module="ngSwipeLeftExample" deps="angular-touch.js" name="ng-swipe-left">
      <file name="index.html">
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </file>
      <file name="script.js">
        angular.module('ngSwipeLeftExample', ['ngTouch']);
      </file>
    </example>
 */
             /**
 * @ngdoc directive
 * @name ngSwipeRight
 *
 * @deprecated
 * sinceVersion="1.7.0"
 *
 * See the {@link ngTouch module} documentation for more information.
 *
 * @description
 * Specify custom behavior when an element is swiped to the right on a touchscreen device.
 * A rightward swipe is a quick, left-to-right slide of the finger.
 * Though ngSwipeRight is designed for touch-based devices, it will work with a mouse click and drag
 * too.
 *
 * Requires the {@link ngTouch `ngTouch`} module to be installed.
 *
 * @element ANY
 * @param {expression} ngSwipeRight {@link guide/expression Expression} to evaluate
 * upon right swipe. (Event object is available as `$event`)
 *
 * @example
    <example module="ngSwipeRightExample" deps="angular-touch.js" name="ng-swipe-right">
      <file name="index.html">
        <div ng-show="!showActions" ng-swipe-left="showActions = true">
          Some list content, like an email in the inbox
        </div>
        <div ng-show="showActions" ng-swipe-right="showActions = false">
          <button ng-click="reply()">Reply</button>
          <button ng-click="delete()">Delete</button>
        </div>
      </file>
      <file name="script.js">
        angular.module('ngSwipeRightExample', ['ngTouch']);
      </file>
    </example>
 */function makeSwipeDirective(_0x2afa47,_0x34b2be,_0x99ec56){ngTouch[a29_0x553d('0x0')](_0x2afa47,[a29_0x553d('0x1'),a29_0x553d('0x2'),function(_0x4c1108,_0x12013a){var _0x50ca4f=0x4b;var _0x4a988b=0.3;var _0xc65d10=0x1e;return function(_0x21d06c,_0x5d194e,_0x2753ce){var _0xcde17d=_0x4c1108(_0x2753ce[_0x2afa47]);var _0x115a38,_0x193256;function _0x1608e8(_0x1550f6){if(!_0x115a38)return![];var _0x18e41f=Math[a29_0x553d('0x3')](_0x1550f6['y']-_0x115a38['y']);var _0x349d3c=(_0x1550f6['x']-_0x115a38['x'])*_0x34b2be;return _0x193256&&_0x18e41f<_0x50ca4f&&_0x349d3c>0x0&&_0x349d3c>_0xc65d10&&_0x18e41f/_0x349d3c<_0x4a988b;}var _0x39c328=[a29_0x553d('0x4')];if(!angular[a29_0x553d('0x5')](_0x2753ce[a29_0x553d('0x6')])){_0x39c328[a29_0x553d('0x7')](a29_0x553d('0x8'));}_0x12013a[a29_0x553d('0x9')](_0x5d194e,{'start':function(_0x2dcd53,_0x5c5c23){_0x115a38=_0x2dcd53;_0x193256=!![];},'cancel':function(_0x27d761){_0x193256=![];},'end':function(_0x1a6773,_0x52dae0){if(_0x1608e8(_0x1a6773)){_0x21d06c[a29_0x553d('0xa')](function(){_0x5d194e[a29_0x553d('0xb')](_0x99ec56);_0xcde17d(_0x21d06c,{'$event':_0x52dae0});});}}},_0x39c328);};}]);}makeSwipeDirective(a29_0x553d('0xc'),-0x1,a29_0x553d('0xd'));makeSwipeDirective(a29_0x553d('0xe'),0x1,a29_0x553d('0xf'));