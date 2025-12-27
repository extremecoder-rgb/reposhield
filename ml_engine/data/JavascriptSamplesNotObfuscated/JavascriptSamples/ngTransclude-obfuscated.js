var a33_0x4ed8=['empty','Illegal\x20use\x20of\x20ngTransclude\x20directive\x20in\x20the\x20template!\x20','No\x20parent\x20directive\x20that\x20requires\x20a\x20transclusion\x20found.\x20','Element:\x20{0}','isSlotFilled','append','length','nodeType','nodeValue','trim','ngTransclude','$compile','EAC','contents'];(function(_0x2327ba,_0x5b0854){var _0x5f1428=function(_0xe1eb8a){while(--_0xe1eb8a){_0x2327ba['push'](_0x2327ba['shift']());}};_0x5f1428(++_0x5b0854);}(a33_0x4ed8,0x184));var a33_0x39f8=function(_0x3535f4,_0xb3b935){_0x3535f4=_0x3535f4-0x0;var _0x17bd59=a33_0x4ed8[_0x3535f4];return _0x17bd59;};'use strict';/**
 * @ngdoc directive
 * @name ngTransclude
 * @restrict EAC
 *
 * @description
 * Directive that marks the insertion point for the transcluded DOM of the nearest parent directive that uses transclusion.
 *
 * You can specify that you want to insert a named transclusion slot, instead of the default slot, by providing the slot name
 * as the value of the `ng-transclude` or `ng-transclude-slot` attribute.
 *
 * If the transcluded content is not empty (i.e. contains one or more DOM nodes, including whitespace text nodes), any existing
 * content of this element will be removed before the transcluded content is inserted.
 * If the transcluded content is empty (or only whitespace), the existing content is left intact. This lets you provide fallback
 * content in the case that no transcluded content is provided.
 *
 * @element ANY
 *
 * @param {string} ngTransclude|ngTranscludeSlot the name of the slot to insert at this point. If this is not provided, is empty
 *                                               or its value is the same as the name of the attribute then the default slot is used.
 *
 * @example
 * ### Basic transclusion
 * This example demonstrates basic transclusion of content into a component directive.
 * <example name="simpleTranscludeExample" module="transcludeExample">
 *   <file name="index.html">
 *     <script>
 *       angular.module('transcludeExample', [])
 *        .directive('pane', function(){
 *           return {
 *             restrict: 'E',
 *             transclude: true,
 *             scope: { title:'@' },
 *             template: '<div style="border: 1px solid black;">' +
 *                         '<div style="background-color: gray">{{title}}</div>' +
 *                         '<ng-transclude></ng-transclude>' +
 *                       '</div>'
 *           };
 *       })
 *       .controller('ExampleController', ['$scope', function($scope) {
 *         $scope.title = 'Lorem Ipsum';
 *         $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
 *       }]);
 *     </script>
 *     <div ng-controller="ExampleController">
 *       <input ng-model="title" aria-label="title"> <br/>
 *       <textarea ng-model="text" aria-label="text"></textarea> <br/>
 *       <pane title="{{title}}"><span>{{text}}</span></pane>
 *     </div>
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *      it('should have transcluded', function() {
 *        var titleElement = element(by.model('title'));
 *        titleElement.clear();
 *        titleElement.sendKeys('TITLE');
 *        var textElement = element(by.model('text'));
 *        textElement.clear();
 *        textElement.sendKeys('TEXT');
 *        expect(element(by.binding('title')).getText()).toEqual('TITLE');
 *        expect(element(by.binding('text')).getText()).toEqual('TEXT');
 *      });
 *   </file>
 * </example>
 *
 * @example
 * ### Transclude fallback content
 * This example shows how to use `NgTransclude` with fallback content, that
 * is displayed if no transcluded content is provided.
 *
 * <example module="transcludeFallbackContentExample" name="ng-transclude">
 * <file name="index.html">
 * <script>
 * angular.module('transcludeFallbackContentExample', [])
 * .directive('myButton', function(){
 *             return {
 *               restrict: 'E',
 *               transclude: true,
 *               scope: true,
 *               template: '<button style="cursor: pointer;">' +
 *                           '<ng-transclude>' +
 *                             '<b style="color: red;">Button1</b>' +
 *                           '</ng-transclude>' +
 *                         '</button>'
 *             };
 *         });
 * </script>
 * <!-- fallback button content -->
 * <my-button id="fallback"></my-button>
 * <!-- modified button content -->
 * <my-button id="modified">
 *   <i style="color: green;">Button2</i>
 * </my-button>
 * </file>
 * <file name="protractor.js" type="protractor">
 * it('should have different transclude element content', function() {
 *          expect(element(by.id('fallback')).getText()).toBe('Button1');
 *          expect(element(by.id('modified')).getText()).toBe('Button2');
 *        });
 * </file>
 * </example>
 *
 * @example
 * ### Multi-slot transclusion
 * This example demonstrates using multi-slot transclusion in a component directive.
 * <example name="multiSlotTranscludeExample" module="multiSlotTranscludeExample">
 *   <file name="index.html">
 *    <style>
 *      .title, .footer {
 *        background-color: gray
 *      }
 *    </style>
 *    <div ng-controller="ExampleController">
 *      <input ng-model="title" aria-label="title"> <br/>
 *      <textarea ng-model="text" aria-label="text"></textarea> <br/>
 *      <pane>
 *        <pane-title><a ng-href="{{link}}">{{title}}</a></pane-title>
 *        <pane-body><p>{{text}}</p></pane-body>
 *      </pane>
 *    </div>
 *   </file>
 *   <file name="app.js">
 *    angular.module('multiSlotTranscludeExample', [])
 *     .directive('pane', function() {
 *        return {
 *          restrict: 'E',
 *          transclude: {
 *            'title': '?paneTitle',
 *            'body': 'paneBody',
 *            'footer': '?paneFooter'
 *          },
 *          template: '<div style="border: 1px solid black;">' +
 *                      '<div class="title" ng-transclude="title">Fallback Title</div>' +
 *                      '<div ng-transclude="body"></div>' +
 *                      '<div class="footer" ng-transclude="footer">Fallback Footer</div>' +
 *                    '</div>'
 *        };
 *    })
 *    .controller('ExampleController', ['$scope', function($scope) {
 *      $scope.title = 'Lorem Ipsum';
 *      $scope.link = 'https://google.com';
 *      $scope.text = 'Neque porro quisquam est qui dolorem ipsum quia dolor...';
 *    }]);
 *   </file>
 *   <file name="protractor.js" type="protractor">
 *      it('should have transcluded the title and the body', function() {
 *        var titleElement = element(by.model('title'));
 *        titleElement.clear();
 *        titleElement.sendKeys('TITLE');
 *        var textElement = element(by.model('text'));
 *        textElement.clear();
 *        textElement.sendKeys('TEXT');
 *        expect(element(by.css('.title')).getText()).toEqual('TITLE');
 *        expect(element(by.binding('text')).getText()).toEqual('TEXT');
 *        expect(element(by.css('.footer')).getText()).toEqual('Fallback Footer');
 *      });
 *   </file>
 * </example>
 */var ngTranscludeMinErr=minErr(a33_0x39f8('0x0'));var ngTranscludeDirective=[a33_0x39f8('0x1'),function(_0x2ee618){return{'restrict':a33_0x39f8('0x2'),'compile':function ngTranscludeCompile(_0x46cbd4){var _0x4dd5cc=_0x2ee618(_0x46cbd4[a33_0x39f8('0x3')]());_0x46cbd4[a33_0x39f8('0x4')]();return function ngTranscludePostLink(_0x179e75,_0x301e3a,_0x5c3239,_0x4e88af,_0x32d766){if(!_0x32d766){throw ngTranscludeMinErr('orphan',a33_0x39f8('0x5')+a33_0x39f8('0x6')+a33_0x39f8('0x7'),startingTag(_0x301e3a));}if(_0x5c3239[a33_0x39f8('0x0')]===_0x5c3239['$attr']['ngTransclude']){_0x5c3239['ngTransclude']='';}var _0x3a8b37=_0x5c3239[a33_0x39f8('0x0')]||_0x5c3239['ngTranscludeSlot'];_0x32d766(_0x4f9d93,null,_0x3a8b37);if(_0x3a8b37&&!_0x32d766[a33_0x39f8('0x8')](_0x3a8b37)){_0x260d2f();}function _0x4f9d93(_0x24a137,_0x14c55b){if(_0x24a137['length']&&_0x296c14(_0x24a137)){_0x301e3a[a33_0x39f8('0x9')](_0x24a137);}else{_0x260d2f();_0x14c55b['$destroy']();}}function _0x260d2f(){_0x4dd5cc(_0x179e75,function(_0x2231fc){_0x301e3a[a33_0x39f8('0x9')](_0x2231fc);});}function _0x296c14(_0x361853){for(var _0x46fdd7=0x0,_0x33a1aa=_0x361853[a33_0x39f8('0xa')];_0x46fdd7<_0x33a1aa;_0x46fdd7++){var _0x546837=_0x361853[_0x46fdd7];if(_0x546837[a33_0x39f8('0xb')]!==NODE_TYPE_TEXT||_0x546837[a33_0x39f8('0xc')][a33_0x39f8('0xd')]()){return!![];}}}};}};}];