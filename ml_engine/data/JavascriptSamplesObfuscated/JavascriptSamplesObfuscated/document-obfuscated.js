var _0x2581=['$destroy','off','$get','$window','document','$document','$rootScope','hidden','visibilitychange'];(function(_0x4a4c9e,_0x21418f){var _0x3f8aab=function(_0x30014e){while(--_0x30014e){_0x4a4c9e['push'](_0x4a4c9e['shift']());}};_0x3f8aab(++_0x21418f);}(_0x2581,0x1df));var _0x5a1d=function(_0x3c4159,_0x224e76){_0x3c4159=_0x3c4159-0x0;var _0x39e262=_0x2581[_0x3c4159];return _0x39e262;};'use strict';/**
 * @ngdoc service
 * @name $document
 * @requires $window
 * @this
 *
 * @description
 * A {@link angular.element jQuery or jqLite} wrapper for the browser's `window.document` object.
 *
 * @example
   <example module="documentExample" name="document">
     <file name="index.html">
       <div ng-controller="ExampleController">
         <p>$document title: <b ng-bind="title"></b></p>
         <p>window.document title: <b ng-bind="windowTitle"></b></p>
       </div>
     </file>
     <file name="script.js">
       angular.module('documentExample', [])
         .controller('ExampleController', ['$scope', '$document', function($scope, $document) {
           $scope.title = $document[0].title;
           $scope.windowTitle = angular.element(window.document)[0].title;
         }]);
     </file>
   </example>
 */function $DocumentProvider(){this[_0x5a1d('0x0')]=[_0x5a1d('0x1'),function(_0x28a1c2){return jqLite(_0x28a1c2[_0x5a1d('0x2')]);}];}function $$IsDocumentHiddenProvider(){this[_0x5a1d('0x0')]=[_0x5a1d('0x3'),_0x5a1d('0x4'),function(_0x56930c,_0x2f3f87){var _0x52eb0c=_0x56930c[0x0];var _0x391092=_0x52eb0c&&_0x52eb0c[_0x5a1d('0x5')];_0x56930c['on'](_0x5a1d('0x6'),_0x4b3123);_0x2f3f87['$on'](_0x5a1d('0x7'),function(){_0x56930c[_0x5a1d('0x8')](_0x5a1d('0x6'),_0x4b3123);});function _0x4b3123(){_0x391092=_0x52eb0c[_0x5a1d('0x5')];}return function(){return _0x391092;};}];}