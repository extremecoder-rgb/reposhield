var _0x15f2=['$new','template','enter','done','$includeContentLoaded','$emit','$includeContentError','$compile','empty','childNodes','append','html','$templateRequest','$anchorScroll','$animate','noop','ngInclude','src','onload','remove','$destroy','leave','$watch','$eval','$$destroyed'];(function(_0x36795d,_0x3641dc){var _0x2072b7=function(_0x309ca3){while(--_0x309ca3){_0x36795d['push'](_0x36795d['shift']());}};_0x2072b7(++_0x3641dc);}(_0x15f2,0x16a));var _0x4372=function(_0x161a35,_0xf2d5bb){_0x161a35=_0x161a35-0x0;var _0x3dad97=_0x15f2[_0x161a35];return _0x3dad97;};'use strict';/**
 * @ngdoc directive
 * @name ngInclude
 * @restrict ECA
 * @scope
 * @priority -400
 *
 * @description
 * Fetches, compiles and includes an external HTML fragment.
 *
 * By default, the template URL is restricted to the same domain and protocol as the
 * application document. This is done by calling {@link $sce#getTrustedResourceUrl
 * $sce.getTrustedResourceUrl} on it. To load templates from other domains or protocols
 * you may either {@link ng.$sceDelegateProvider#resourceUrlWhitelist whitelist them} or
 * {@link $sce#trustAsResourceUrl wrap them} as trusted values. Refer to AngularJS's {@link
 * ng.$sce Strict Contextual Escaping}.
 *
 * In addition, the browser's
 * [Same Origin Policy](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_XMLHttpRequest)
 * and [Cross-Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/)
 * policy may further restrict whether the template is successfully loaded.
 * For example, `ngInclude` won't work for cross-domain requests on all browsers and for `file://`
 * access on some browsers.
 *
 * @animations
 * | Animation                        | Occurs                              |
 * |----------------------------------|-------------------------------------|
 * | {@link ng.$animate#enter enter}  | when the expression changes, on the new include |
 * | {@link ng.$animate#leave leave}  | when the expression changes, on the old include |
 *
 * The enter and leave animation occur concurrently.
 *
 * @param {string} ngInclude|src AngularJS expression evaluating to URL. If the source is a string constant,
 *                 make sure you wrap it in **single** quotes, e.g. `src="'myPartialTemplate.html'"`.
 * @param {string=} onload Expression to evaluate when a new partial is loaded.
 *                  <div class="alert alert-warning">
 *                  **Note:** When using onload on SVG elements in IE11, the browser will try to call
 *                  a function with the name on the window element, which will usually throw a
 *                  "function is undefined" error. To fix this, you can instead use `data-onload` or a
 *                  different form that {@link guide/directive#normalization matches} `onload`.
 *                  </div>
   *
 * @param {string=} autoscroll Whether `ngInclude` should call {@link ng.$anchorScroll
 *                  $anchorScroll} to scroll the viewport after the content is loaded.
 *
 *                  - If the attribute is not set, disable scrolling.
 *                  - If the attribute is set without value, enable scrolling.
 *                  - Otherwise enable scrolling only if the expression evaluates to truthy value.
 *
 * @example
  <example module="includeExample" deps="angular-animate.js" animations="true" name="ng-include">
    <file name="index.html">
     <div ng-controller="ExampleController">
       <select ng-model="template" ng-options="t.name for t in templates">
        <option value="">(blank)</option>
       </select>
       url of the template: <code>{{template.url}}</code>
       <hr/>
       <div class="slide-animate-container">
         <div class="slide-animate" ng-include="template.url"></div>
       </div>
     </div>
    </file>
    <file name="script.js">
      angular.module('includeExample', ['ngAnimate'])
        .controller('ExampleController', ['$scope', function($scope) {
          $scope.templates =
            [{ name: 'template1.html', url: 'template1.html'},
             { name: 'template2.html', url: 'template2.html'}];
          $scope.template = $scope.templates[0];
        }]);
     </file>
    <file name="template1.html">
      Content of template1.html
    </file>
    <file name="template2.html">
      Content of template2.html
    </file>
    <file name="animations.css">
      .slide-animate-container {
        position:relative;
        background:white;
        border:1px solid black;
        height:40px;
        overflow:hidden;
      }

      .slide-animate {
        padding:10px;
      }

      .slide-animate.ng-enter, .slide-animate.ng-leave {
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;

        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        display:block;
        padding:10px;
      }

      .slide-animate.ng-enter {
        top:-50px;
      }
      .slide-animate.ng-enter.ng-enter-active {
        top:0;
      }

      .slide-animate.ng-leave {
        top:0;
      }
      .slide-animate.ng-leave.ng-leave-active {
        top:50px;
      }
    </file>
    <file name="protractor.js" type="protractor">
      var templateSelect = element(by.model('template'));
      var includeElem = element(by.css('[ng-include]'));

      it('should load template1.html', function() {
        expect(includeElem.getText()).toMatch(/Content of template1.html/);
      });

      it('should load template2.html', function() {
        if (browser.params.browser === 'firefox') {
          // Firefox can't handle using selects
          // See https://github.com/angular/protractor/issues/480
          return;
        }
        templateSelect.click();
        templateSelect.all(by.css('option')).get(2).click();
        expect(includeElem.getText()).toMatch(/Content of template2.html/);
      });

      it('should change to blank', function() {
        if (browser.params.browser === 'firefox') {
          // Firefox can't handle using selects
          return;
        }
        templateSelect.click();
        templateSelect.all(by.css('option')).get(0).click();
        expect(includeElem.isPresent()).toBe(false);
      });
    </file>
  </example>
 */
             /**
 * @ngdoc event
 * @name ngInclude#$includeContentRequested
 * @eventType emit on the scope ngInclude was declared in
 * @description
 * Emitted every time the ngInclude content is requested.
 *
 * @param {Object} angularEvent Synthetic event object.
 * @param {String} src URL of content to load.
 */
             /**
 * @ngdoc event
 * @name ngInclude#$includeContentLoaded
 * @eventType emit on the current ngInclude scope
 * @description
 * Emitted every time the ngInclude content is reloaded.
 *
 * @param {Object} angularEvent Synthetic event object.
 * @param {String} src URL of content to load.
 */
             /**
 * @ngdoc event
 * @name ngInclude#$includeContentError
 * @eventType emit on the scope ngInclude was declared in
 * @description
 * Emitted when a template HTTP request yields an erroneous response (status < 200 || status > 299)
 *
 * @param {Object} angularEvent Synthetic event object.
 * @param {String} src URL of content to load.
 */var ngIncludeDirective=[_0x4372('0x0'),_0x4372('0x1'),_0x4372('0x2'),function(_0x3d6a31,_0x1fa1a0,_0x418ab5){return{'restrict':'ECA','priority':0x190,'terminal':!![],'transclude':'element','controller':angular[_0x4372('0x3')],'compile':function(_0x1d222e,_0x2e4732){var _0x5b301e=_0x2e4732[_0x4372('0x4')]||_0x2e4732[_0x4372('0x5')],_0x3ff68c=_0x2e4732[_0x4372('0x6')]||'',_0x42df07=_0x2e4732['autoscroll'];return function(_0x21585c,_0x4de1db,_0x2d2155,_0x8112c5,_0x3750cc){var _0x4d0473=0x0,_0x5a4658,_0x43cb17,_0x1d8cea;var _0x4fcffd=function(){if(_0x43cb17){_0x43cb17[_0x4372('0x7')]();_0x43cb17=null;}if(_0x5a4658){_0x5a4658[_0x4372('0x8')]();_0x5a4658=null;}if(_0x1d8cea){_0x418ab5[_0x4372('0x9')](_0x1d8cea)['done'](function(_0xa12086){if(_0xa12086!==![])_0x43cb17=null;});_0x43cb17=_0x1d8cea;_0x1d8cea=null;}};_0x21585c[_0x4372('0xa')](_0x5b301e,function ngIncludeWatchAction(_0x2ecce2){var _0x135c2c=function(_0x1e5083){if(_0x1e5083!==![]&&isDefined(_0x42df07)&&(!_0x42df07||_0x21585c[_0x4372('0xb')](_0x42df07))){_0x1fa1a0();}};var _0x50fa35=++_0x4d0473;if(_0x2ecce2){_0x3d6a31(_0x2ecce2,!![])['then'](function(_0x1e27d4){if(_0x21585c[_0x4372('0xc')])return;if(_0x50fa35!==_0x4d0473)return;var _0x3c5f9b=_0x21585c[_0x4372('0xd')]();_0x8112c5[_0x4372('0xe')]=_0x1e27d4;var _0x5bc018=_0x3750cc(_0x3c5f9b,function(_0x5bc018){_0x4fcffd();_0x418ab5[_0x4372('0xf')](_0x5bc018,null,_0x4de1db)[_0x4372('0x10')](_0x135c2c);});_0x5a4658=_0x3c5f9b;_0x1d8cea=_0x5bc018;_0x5a4658['$emit'](_0x4372('0x11'),_0x2ecce2);_0x21585c[_0x4372('0xb')](_0x3ff68c);},function(){if(_0x21585c[_0x4372('0xc')])return;if(_0x50fa35===_0x4d0473){_0x4fcffd();_0x21585c[_0x4372('0x12')](_0x4372('0x13'),_0x2ecce2);}});_0x21585c[_0x4372('0x12')]('$includeContentRequested',_0x2ecce2);}else{_0x4fcffd();_0x8112c5['template']=null;}});};}};}];var ngIncludeFillContentDirective=[_0x4372('0x14'),function(_0x25da29){return{'restrict':'ECA','priority':-0x190,'require':_0x4372('0x4'),'link':function(_0x67acc0,_0x4608fb,_0x387e60,_0xffc8b9){if(toString['call'](_0x4608fb[0x0])['match'](/SVG/)){_0x4608fb[_0x4372('0x15')]();_0x25da29(jqLiteBuildFragment(_0xffc8b9['template'],window['document'])[_0x4372('0x16')])(_0x67acc0,function namespaceAdaptedClone(_0x1e5079){_0x4608fb[_0x4372('0x17')](_0x1e5079);},{'futureParentElement':_0x4608fb});return;}_0x4608fb[_0x4372('0x18')](_0xffc8b9[_0x4372('0xe')]);_0x25da29(_0x4608fb['contents']())(_0x67acc0);}};}];