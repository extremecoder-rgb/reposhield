var _0x1e45=['getTrustedMediaUrl','$observe','multiple','$watch','$set','ng-','checked','ngPattern','charAt','match','src','href','call','prop','[object\x20SVGAnimatedString]','xlinkHref','$attr','xlink:href'];(function(_0x59a3f8,_0x529416){var _0x3921bd=function(_0x10a541){while(--_0x10a541){_0x59a3f8['push'](_0x59a3f8['shift']());}};_0x3921bd(++_0x529416);}(_0x1e45,0x1c4));var _0x48e3=function(_0x40a7db,_0x5eef4f){_0x40a7db=_0x40a7db-0x0;var _0x578bdc=_0x1e45[_0x40a7db];return _0x578bdc;};'use strict';/**
 * @ngdoc directive
 * @name ngHref
 * @restrict A
 * @priority 99
 *
 * @description
 * Using AngularJS markup like `{{hash}}` in an href attribute will
 * make the link go to the wrong URL if the user clicks it before
 * AngularJS has a chance to replace the `{{hash}}` markup with its
 * value. Until AngularJS replaces the markup the link will be broken
 * and will most likely return a 404 error. The `ngHref` directive
 * solves this problem.
 *
 * The wrong way to write it:
 * ```html
 * <a href="http://www.gravatar.com/avatar/{{hash}}">link1</a>
 * ```
 *
 * The correct way to write it:
 * ```html
 * <a ng-href="http://www.gravatar.com/avatar/{{hash}}">link1</a>
 * ```
 *
 * @element A
 * @param {template} ngHref any string which can contain `{{}}` markup.
 *
 * @example
 * This example shows various combinations of `href`, `ng-href` and `ng-click` attributes
 * in links and their different behaviors:
    <example name="ng-href">
      <file name="index.html">
        <input ng-model="value" /><br />
        <a id="link-1" href ng-click="value = 1">link 1</a> (link, don't reload)<br />
        <a id="link-2" href="" ng-click="value = 2">link 2</a> (link, don't reload)<br />
        <a id="link-3" ng-href="/{{'123'}}">link 3</a> (link, reload!)<br />
        <a id="link-4" href="" name="xx" ng-click="value = 4">anchor</a> (link, don't reload)<br />
        <a id="link-5" name="xxx" ng-click="value = 5">anchor</a> (no link)<br />
        <a id="link-6" ng-href="{{value}}">link</a> (link, change location)
      </file>
      <file name="protractor.js" type="protractor">
        it('should execute ng-click but not reload when href without value', function() {
          element(by.id('link-1')).click();
          expect(element(by.model('value')).getAttribute('value')).toEqual('1');
          expect(element(by.id('link-1')).getAttribute('href')).toBe('');
        });

        it('should execute ng-click but not reload when href empty string', function() {
          element(by.id('link-2')).click();
          expect(element(by.model('value')).getAttribute('value')).toEqual('2');
          expect(element(by.id('link-2')).getAttribute('href')).toBe('');
        });

        it('should execute ng-click and change url when ng-href specified', function() {
          expect(element(by.id('link-3')).getAttribute('href')).toMatch(/\/123$/);

          element(by.id('link-3')).click();

          // At this point, we navigate away from an AngularJS page, so we need
          // to use browser.driver to get the base webdriver.

          browser.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
              return url.match(/\/123$/);
            });
          }, 5000, 'page should navigate to /123');
        });

        it('should execute ng-click but not reload when href empty string and name specified', function() {
          element(by.id('link-4')).click();
          expect(element(by.model('value')).getAttribute('value')).toEqual('4');
          expect(element(by.id('link-4')).getAttribute('href')).toBe('');
        });

        it('should execute ng-click but not reload when no href but name specified', function() {
          element(by.id('link-5')).click();
          expect(element(by.model('value')).getAttribute('value')).toEqual('5');
          expect(element(by.id('link-5')).getAttribute('href')).toBe(null);
        });

        it('should only change url when only ng-href', function() {
          element(by.model('value')).clear();
          element(by.model('value')).sendKeys('6');
          expect(element(by.id('link-6')).getAttribute('href')).toMatch(/\/6$/);

          element(by.id('link-6')).click();

          // At this point, we navigate away from an AngularJS page, so we need
          // to use browser.driver to get the base webdriver.
          browser.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
              return url.match(/\/6$/);
            });
          }, 5000, 'page should navigate to /6');
        });
      </file>
    </example>
 */
             /**
 * @ngdoc directive
 * @name ngSrc
 * @restrict A
 * @priority 99
 *
 * @description
 * Using AngularJS markup like `{{hash}}` in a `src` attribute doesn't
 * work right: The browser will fetch from the URL with the literal
 * text `{{hash}}` until AngularJS replaces the expression inside
 * `{{hash}}`. The `ngSrc` directive solves this problem.
 *
 * The buggy way to write it:
 * ```html
 * <img src="http://www.gravatar.com/avatar/{{hash}}" alt="Description"/>
 * ```
 *
 * The correct way to write it:
 * ```html
 * <img ng-src="http://www.gravatar.com/avatar/{{hash}}" alt="Description" />
 * ```
 *
 * @element IMG
 * @param {template} ngSrc any string which can contain `{{}}` markup.
 */
             /**
 * @ngdoc directive
 * @name ngSrcset
 * @restrict A
 * @priority 99
 *
 * @description
 * Using AngularJS markup like `{{hash}}` in a `srcset` attribute doesn't
 * work right: The browser will fetch from the URL with the literal
 * text `{{hash}}` until AngularJS replaces the expression inside
 * `{{hash}}`. The `ngSrcset` directive solves this problem.
 *
 * The buggy way to write it:
 * ```html
 * <img srcset="http://www.gravatar.com/avatar/{{hash}} 2x" alt="Description"/>
 * ```
 *
 * The correct way to write it:
 * ```html
 * <img ng-srcset="http://www.gravatar.com/avatar/{{hash}} 2x" alt="Description" />
 * ```
 *
 * @element IMG
 * @param {template} ngSrcset any string which can contain `{{}}` markup.
 */
             /**
 * @ngdoc directive
 * @name ngDisabled
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * This directive sets the `disabled` attribute on the element (typically a form control,
 * e.g. `input`, `button`, `select` etc.) if the
 * {@link guide/expression expression} inside `ngDisabled` evaluates to truthy.
 *
 * A special directive is necessary because we cannot use interpolation inside the `disabled`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * @example
    <example name="ng-disabled">
      <file name="index.html">
        <label>Click me to toggle: <input type="checkbox" ng-model="checked"></label><br/>
        <button ng-model="button" ng-disabled="checked">Button</button>
      </file>
      <file name="protractor.js" type="protractor">
        it('should toggle button', function() {
          expect(element(by.css('button')).getAttribute('disabled')).toBeFalsy();
          element(by.model('checked')).click();
          expect(element(by.css('button')).getAttribute('disabled')).toBeTruthy();
        });
      </file>
    </example>
 *
 * @param {expression} ngDisabled If the {@link guide/expression expression} is truthy,
 *     then the `disabled` attribute will be set on the element
 */
             /**
 * @ngdoc directive
 * @name ngChecked
 * @restrict A
 * @priority 100
 *
 * @description
 * Sets the `checked` attribute on the element, if the expression inside `ngChecked` is truthy.
 *
 * Note that this directive should not be used together with {@link ngModel `ngModel`},
 * as this can lead to unexpected behavior.
 *
 * A special directive is necessary because we cannot use interpolation inside the `checked`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * @example
    <example name="ng-checked">
      <file name="index.html">
        <label>Check me to check both: <input type="checkbox" ng-model="leader"></label><br/>
        <input id="checkFollower" type="checkbox" ng-checked="leader" aria-label="Follower input">
      </file>
      <file name="protractor.js" type="protractor">
        it('should check both checkBoxes', function() {
          expect(element(by.id('checkFollower')).getAttribute('checked')).toBeFalsy();
          element(by.model('leader')).click();
          expect(element(by.id('checkFollower')).getAttribute('checked')).toBeTruthy();
        });
      </file>
    </example>
 *
 * @element INPUT
 * @param {expression} ngChecked If the {@link guide/expression expression} is truthy,
 *     then the `checked` attribute will be set on the element
 */
             /**
 * @ngdoc directive
 * @name ngReadonly
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * Sets the `readonly` attribute on the element, if the expression inside `ngReadonly` is truthy.
 * Note that `readonly` applies only to `input` elements with specific types. [See the input docs on
 * MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-readonly) for more information.
 *
 * A special directive is necessary because we cannot use interpolation inside the `readonly`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * @example
    <example name="ng-readonly">
      <file name="index.html">
        <label>Check me to make text readonly: <input type="checkbox" ng-model="checked"></label><br/>
        <input type="text" ng-readonly="checked" value="I'm AngularJS" aria-label="Readonly field" />
      </file>
      <file name="protractor.js" type="protractor">
        it('should toggle readonly attr', function() {
          expect(element(by.css('[type="text"]')).getAttribute('readonly')).toBeFalsy();
          element(by.model('checked')).click();
          expect(element(by.css('[type="text"]')).getAttribute('readonly')).toBeTruthy();
        });
      </file>
    </example>
 *
 * @element INPUT
 * @param {expression} ngReadonly If the {@link guide/expression expression} is truthy,
 *     then special attribute "readonly" will be set on the element
 */
             /**
 * @ngdoc directive
 * @name ngSelected
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * Sets the `selected` attribute on the element, if the expression inside `ngSelected` is truthy.
 *
 * A special directive is necessary because we cannot use interpolation inside the `selected`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * <div class="alert alert-warning">
 *   **Note:** `ngSelected` does not interact with the `select` and `ngModel` directives, it only
 *   sets the `selected` attribute on the element. If you are using `ngModel` on the select, you
 *   should not use `ngSelected` on the options, as `ngModel` will set the select value and
 *   selected options.
 * </div>
 *
 * @example
    <example name="ng-selected">
      <file name="index.html">
        <label>Check me to select: <input type="checkbox" ng-model="selected"></label><br/>
        <select aria-label="ngSelected demo">
          <option>Hello!</option>
          <option id="greet" ng-selected="selected">Greetings!</option>
        </select>
      </file>
      <file name="protractor.js" type="protractor">
        it('should select Greetings!', function() {
          expect(element(by.id('greet')).getAttribute('selected')).toBeFalsy();
          element(by.model('selected')).click();
          expect(element(by.id('greet')).getAttribute('selected')).toBeTruthy();
        });
      </file>
    </example>
 *
 * @element OPTION
 * @param {expression} ngSelected If the {@link guide/expression expression} is truthy,
 *     then special attribute "selected" will be set on the element
 */
             /**
 * @ngdoc directive
 * @name ngOpen
 * @restrict A
 * @priority 100
 *
 * @description
 *
 * Sets the `open` attribute on the element, if the expression inside `ngOpen` is truthy.
 *
 * A special directive is necessary because we cannot use interpolation inside the `open`
 * attribute. See the {@link guide/interpolation interpolation guide} for more info.
 *
 * ## A note about browser compatibility
 *
 * Internet Explorer and Edge do not support the `details` element, it is
 * recommended to use {@link ng.ngShow} and {@link ng.ngHide} instead.
 *
 * @example
     <example name="ng-open">
       <file name="index.html">
         <label>Toggle details: <input type="checkbox" ng-model="open"></label><br/>
         <details id="details" ng-open="open">
            <summary>List</summary>
            <ul>
              <li>Apple</li>
              <li>Orange</li>
              <li>Durian</li>
            </ul>
         </details>
       </file>
       <file name="protractor.js" type="protractor">
         it('should toggle open', function() {
           expect(element(by.id('details')).getAttribute('open')).toBeFalsy();
           element(by.model('open')).click();
           expect(element(by.id('details')).getAttribute('open')).toBeTruthy();
         });
       </file>
     </example>
 *
 * @element DETAILS
 * @param {expression} ngOpen If the {@link guide/expression expression} is truthy,
 *     then special attribute "open" will be set on the element
 */var ngAttributeAliasDirectives={};forEach(BOOLEAN_ATTR,function(_0x1dedcb,_0x2ef678){if(_0x1dedcb===_0x48e3('0x0'))return;function _0x5d9eb8(_0x34b9c,_0x1de623,_0x460f21){_0x34b9c[_0x48e3('0x1')](_0x460f21[_0x7ae9d6],function ngBooleanAttrWatchAction(_0x2e49cc){_0x460f21[_0x48e3('0x2')](_0x2ef678,!!_0x2e49cc);});}var _0x7ae9d6=directiveNormalize(_0x48e3('0x3')+_0x2ef678);var _0x4a5fb0=_0x5d9eb8;if(_0x1dedcb===_0x48e3('0x4')){_0x4a5fb0=function(_0x1f7826,_0x286b83,_0x3d51df){if(_0x3d51df['ngModel']!==_0x3d51df[_0x7ae9d6]){_0x5d9eb8(_0x1f7826,_0x286b83,_0x3d51df);}};}ngAttributeAliasDirectives[_0x7ae9d6]=function(){return{'restrict':'A','priority':0x64,'link':_0x4a5fb0};};});forEach(ALIASED_ATTR,function(_0x2ac70f,_0xa240ee){ngAttributeAliasDirectives[_0xa240ee]=function(){return{'priority':0x64,'link':function(_0x451ea4,_0x355645,_0x401c98){if(_0xa240ee===_0x48e3('0x5')&&_0x401c98[_0x48e3('0x5')][_0x48e3('0x6')](0x0)==='/'){var _0x35f55b=_0x401c98[_0x48e3('0x5')][_0x48e3('0x7')](REGEX_STRING_REGEXP);if(_0x35f55b){_0x401c98[_0x48e3('0x2')](_0x48e3('0x5'),new RegExp(_0x35f55b[0x1],_0x35f55b[0x2]));return;}}_0x451ea4[_0x48e3('0x1')](_0x401c98[_0xa240ee],function ngAttrAliasWatchAction(_0x4eb180){_0x401c98[_0x48e3('0x2')](_0xa240ee,_0x4eb180);});}};};});forEach([_0x48e3('0x8'),'srcset','href'],function(_0x531ed3){var _0x342839=directiveNormalize(_0x48e3('0x3')+_0x531ed3);ngAttributeAliasDirectives[_0x342839]=['$sce',function(_0x11a390){return{'priority':0x63,'link':function(_0x100d2b,_0x520977,_0x5f055f){var _0x2b29eb=_0x531ed3,_0x1feca6=_0x531ed3;if(_0x531ed3===_0x48e3('0x9')&&toString[_0x48e3('0xa')](_0x520977[_0x48e3('0xb')](_0x48e3('0x9')))===_0x48e3('0xc')){_0x1feca6=_0x48e3('0xd');_0x5f055f[_0x48e3('0xe')][_0x1feca6]=_0x48e3('0xf');_0x2b29eb=null;}_0x5f055f[_0x48e3('0x2')](_0x342839,_0x11a390[_0x48e3('0x10')](_0x5f055f[_0x342839]));_0x5f055f[_0x48e3('0x11')](_0x342839,function(_0x212aaf){if(!_0x212aaf){if(_0x531ed3==='href'){_0x5f055f['$set'](_0x1feca6,null);}return;}_0x5f055f[_0x48e3('0x2')](_0x1feca6,_0x212aaf);if(msie&&_0x2b29eb)_0x520977[_0x48e3('0xb')](_0x2b29eb,_0x5f055f[_0x1feca6]);});}};}];});