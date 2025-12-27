var _0x45a6=['length','$observe','true','data','$interpolate','ngAnimateChildren'];(function(_0x45658b,_0xa6ed42){var _0x51c273=function(_0x5a2c04){while(--_0x5a2c04){_0x45658b['push'](_0x45658b['shift']());}};_0x51c273(++_0xa6ed42);}(_0x45a6,0x70));var _0x5c40=function(_0x2d2ab8,_0x4d4f13){_0x2d2ab8=_0x2d2ab8-0x0;var _0x31f52a=_0x45a6[_0x2d2ab8];return _0x31f52a;};'use strict';/**
 * @ngdoc directive
 * @name ngAnimateChildren
 * @restrict AE
 * @element ANY
 *
 * @description
 *
 * ngAnimateChildren allows you to specify that children of this element should animate even if any
 * of the children's parents are currently animating. By default, when an element has an active `enter`, `leave`, or `move`
 * (structural) animation, child elements that also have an active structural animation are not animated.
 *
 * Note that even if `ngAnimateChildren` is set, no child animations will run when the parent element is removed from the DOM (`leave` animation).
 *
 *
 * @param {string} ngAnimateChildren If the value is empty, `true` or `on`,
 *     then child animations are allowed. If the value is `false`, child animations are not allowed.
 *
 * @example
 * <example module="ngAnimateChildren" name="ngAnimateChildren" deps="angular-animate.js" animations="true">
     <file name="index.html">
       <div ng-controller="MainController as main">
         <label>Show container? <input type="checkbox" ng-model="main.enterElement" /></label>
         <label>Animate children? <input type="checkbox" ng-model="main.animateChildren" /></label>
         <hr>
         <div ng-animate-children="{{main.animateChildren}}">
           <div ng-if="main.enterElement" class="container">
             List of items:
             <div ng-repeat="item in [0, 1, 2, 3]" class="item">Item {{item}}</div>
           </div>
         </div>
       </div>
     </file>
     <file name="animations.css">

      .container.ng-enter,
      .container.ng-leave {
        transition: all ease 1.5s;
      }

      .container.ng-enter,
      .container.ng-leave-active {
        opacity: 0;
      }

      .container.ng-leave,
      .container.ng-enter-active {
        opacity: 1;
      }

      .item {
        background: firebrick;
        color: #FFF;
        margin-bottom: 10px;
      }

      .item.ng-enter,
      .item.ng-leave {
        transition: transform 1.5s ease;
      }

      .item.ng-enter {
        transform: translateX(50px);
      }

      .item.ng-enter-active {
        transform: translateX(0);
      }
    </file>
    <file name="script.js">
      angular.module('ngAnimateChildren', ['ngAnimate'])
        .controller('MainController', function MainController() {
          this.animateChildren = false;
          this.enterElement = false;
        });
    </file>
  </example>
 */var $$AnimateChildrenDirective=[_0x5c40('0x0'),function(_0x2d7986){return{'link':function(_0xd9821b,_0x2bbbb9,_0x4b7687){var _0x220c7f=_0x4b7687[_0x5c40('0x1')];if(isString(_0x220c7f)&&_0x220c7f[_0x5c40('0x2')]===0x0){_0x2bbbb9['data'](NG_ANIMATE_CHILDREN_DATA,!![]);}else{_0x578327(_0x2d7986(_0x220c7f)(_0xd9821b));_0x4b7687[_0x5c40('0x3')](_0x5c40('0x1'),_0x578327);}function _0x578327(_0x383765){_0x383765=_0x383765==='on'||_0x383765===_0x5c40('0x4');_0x2bbbb9[_0x5c40('0x5')](NG_ANIMATE_CHILDREN_DATA,_0x383765);}}};}];