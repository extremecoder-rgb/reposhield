var _0x397c=['svg','transcludeOnThisElement','templateOnThisElement','$new','nextSibling','nodeType','nodeValue','parentNode','removeChild','splice','$$slots','value','substr','toUpperCase','input','getAttribute','type','hidden','autocomplete','off','className','animVal','exec','index','sort','hasAttribute','uterdir','Unterminated\x20attribute,\x20found\x20\x27{0}\x27\x20but\x20no\x20matching\x20\x27{1}\x27\x20found.','apply','newScopeDirective','newIsolateScopeDirective','templateDirective','nonTlbTranscludeDirective','hasElementTranscludeDirective','$$start','$$tlb','transclusion','element','contents','createDocumentFragment','appendChild','Required\x20transclusion\x20slot\x20`{0}`\x20was\x20not\x20filled.','childNodes','empty','$$newScope','templateNamespace','tplrt','Template\x20for\x20directive\x20\x27{0}\x27\x20must\x20have\x20exactly\x20one\x20root\x20element.\x20{1}','$$originalDirective','pre','terminal','directiveName','$$isolateScope','$$isolateBindings','removeWatches','$on','$$bindings','instance','$onChanges','bindingInfo','initialChanges','$onInit','$watch','$doCheck','$destroy','$onDestroy','$postLink','parent','Element:\x20{1}','inheritedData','Controller\x20\x27{0}\x27,\x20required\x20by\x20directive\x20\x27{1}\x27,\x20can\x27t\x20be\x20found!','get','indexOf','multiElement','style','$set','class','shift','then','unshift','$$destroyed','catch','\x20(module:\x20','multidir','expressions','math','srcdoc','HTML','src','ngSrc','video','source','track','image','URL','form','action','base','href','ngHref','valueOf','ng-prop-srcset','multiple','select','selmulti','Interpolations\x20for\x20HTML\x20DOM\x20event\x20attributes\x20are\x20disallowed','$$inter','$$scope','$updateClass','context','replaceChild','cleanData','querySelectorAll','missingattr','Attribute\x20\x27{0}\x27\x20of\x20\x27{1}\x27\x20is\x20non-optional\x20and\x20must\x20be\x20set!','attrName','optional','$observe','literal','assign','nonassign','Expression\x20\x27{0}\x27\x20in\x20attribute\x20\x27{1}\x27\x20used\x20with\x20directive\x20\x27{2}\x27\x20is\x20non-assignable!','$watchCollection','previousValue','isFirstChange','Directive','ngSrc,ngSrcset,src,srcset','trim','match','iscp','controller\x20bindings\x20definition','scope','bindToController','isolateScope','controller','noctrl','Cannot\x20bind\x20to\x20controller\x20without\x20directive\x20\x27{0}\x27s\x20controller.','baddir','Directive/Component\x20name\x20\x27{0}\x27\x20is\x20invalid.\x20The\x20name\x20should\x20not\x20contain\x20leading\x20or\x20trailing\x20whitespaces','require','substring','badrestrict','Restrict\x20property\x20\x27{0}\x27\x20of\x20directive\x20\x27{1}\x27\x20is\x20invalid','directive','name','directiveFactory','hasOwnProperty','factory','$exceptionHandler','invoke','link','compile','priority','restrict','$$moduleName','push','component','template','templateUrl','controllerAs','$ctrl','transclude','bindings','charAt','$injector','aHrefSanitizationWhitelist','imgSrcSanitizationWhitelist','debugInfoEnabled','strictComponentBindingsEnabled','onChangesTtl','length','cssClassDirectivesEnabled','addPropertySecurityContext','toLowerCase','ctxoverride','iframe|srcdoc','*|outerHTML','CSS','*|style','area|href','area|ping','a|ping','blockquote|cite','body|background','del|cite','input|src','MEDIA_URL','audio|src','source|src','source|srcset','track|src','video|src','video|poster','RESOURCE_URL','*|formAction','applet|code','applet|codebase','base|href','frame|src','form|action','html|manifest','iframe|src','link|href','media|src','object|codebase','object|data','script|src','$get','$interpolate','$templateRequest','$controller','$rootScope','$sce','$animate','document','createElement','div','infchng','{0}\x20$onChanges()\x20iterations\x20reached.\x20Aborting!\x0a','$apply','srcset','Can\x27t\x20pass\x20trusted\x20values\x20to\x20`{0}`:\x20\x22{1}\x22','toString','test','split','floor','getTrustedMediaUrl','keys','$attr','prototype','addClass','$$element','prop','img','$set(\x27srcset\x27,\x20value)','removeAttr','attr','$$observers','$evalAsync','innerHTML','<span\x20','firstChild','attributes','endSymbol','replace','$$addBindingInfo','$binding','concat','$$addBindingClass','ng-binding','$$addScopeInfo','$isolateScopeNoTemplate','$isolateScope','data','$$addScopeClass','ng-isolate-scope','ng-scope','$$createComment','createComment','multilink','This\x20element\x20has\x20already\x20been\x20linked.','$parent','parentBoundTranscludeFn','transcludeControllers','futureParentElement','$$boundTransclude','html','<div></div>','append','call','Controller'];(function(_0x2e7511,_0x253c61){var _0x495a02=function(_0x1b9f02){while(--_0x1b9f02){_0x2e7511['push'](_0x2e7511['shift']());}};_0x495a02(++_0x253c61);}(_0x397c,0x7d));var _0x10d8=function(_0x4adfdb,_0x5286cd){_0x4adfdb=_0x4adfdb-0x0;var _0xa144b8=_0x397c[_0x4adfdb];return _0xa144b8;};'use strict';/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables like document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
             /* ! VARIABLE/FUNCTION NAMING CONVENTIONS THAT APPLY TO THIS FILE!
 *
 * DOM-related variables:
 *
 * - "node" - DOM Node
 * - "element" - DOM Element or Node
 * - "$node" or "$element" - jqLite-wrapped node or element
 *
 *
 * Compiler related stuff:
 *
 * - "linkFn" - linking fn of a single directive
 * - "nodeLinkFn" - function that aggregates all linking fns for a particular node
 * - "childLinkFn" -  function that aggregates all linking fns for child nodes of a particular node
 * - "compositeLinkFn" - function that aggregates all linking fns for a compilation root (nodeList)
 */
             /**
 * @ngdoc service
 * @name $compile
 * @kind function
 *
 * @description
 * Compiles an HTML string or DOM into a template and produces a template function, which
 * can then be used to link {@link ng.$rootScope.Scope `scope`} and the template together.
 *
 * The compilation is a process of walking the DOM tree and matching DOM elements to
 * {@link ng.$compileProvider#directive directives}.
 *
 * <div class="alert alert-warning">
 * **Note:** This document is an in-depth reference of all directive options.
 * For a gentle introduction to directives with examples of common use cases,
 * see the {@link guide/directive directive guide}.
 * </div>
 *
 * ## Comprehensive Directive API
 *
 * There are many different options for a directive.
 *
 * The difference resides in the return value of the factory function.
 * You can either return a {@link $compile#directive-definition-object Directive Definition Object (see below)}
 * that defines the directive properties, or just the `postLink` function (all other properties will have
 * the default values).
 *
 * <div class="alert alert-success">
 * **Best Practice:** It's recommended to use the "directive definition object" form.
 * </div>
 *
 * Here's an example directive declared with a Directive Definition Object:
 *
 * ```js
 *   var myModule = angular.module(...);
 *
 *   myModule.directive('directiveName', function factory(injectables) {
 *     var directiveDefinitionObject = {
 *       {@link $compile#-priority- priority}: 0,
 *       {@link $compile#-template- template}: '<div></div>', // or // function(tElement, tAttrs) { ... },
 *       // or
 *       // {@link $compile#-templateurl- templateUrl}: 'directive.html', // or // function(tElement, tAttrs) { ... },
 *       {@link $compile#-transclude- transclude}: false,
 *       {@link $compile#-restrict- restrict}: 'A',
 *       {@link $compile#-templatenamespace- templateNamespace}: 'html',
 *       {@link $compile#-scope- scope}: false,
 *       {@link $compile#-controller- controller}: function($scope, $element, $attrs, $transclude, otherInjectables) { ... },
 *       {@link $compile#-controlleras- controllerAs}: 'stringIdentifier',
 *       {@link $compile#-bindtocontroller- bindToController}: false,
 *       {@link $compile#-require- require}: 'siblingDirectiveName', // or // ['^parentDirectiveName', '?optionalDirectiveName', '?^optionalParent'],
 *       {@link $compile#-multielement- multiElement}: false,
 *       {@link $compile#-compile- compile}: function compile(tElement, tAttrs, transclude) {
 *         return {
 *            {@link $compile#pre-linking-function pre}: function preLink(scope, iElement, iAttrs, controller) { ... },
 *            {@link $compile#post-linking-function post}: function postLink(scope, iElement, iAttrs, controller) { ... }
 *         }
 *         // or
 *         // return function postLink( ... ) { ... }
 *       },
 *       // or
 *       // {@link $compile#-link- link}: {
 *       //  {@link $compile#pre-linking-function pre}: function preLink(scope, iElement, iAttrs, controller) { ... },
 *       //  {@link $compile#post-linking-function post}: function postLink(scope, iElement, iAttrs, controller) { ... }
 *       // }
 *       // or
 *       // {@link $compile#-link- link}: function postLink( ... ) { ... }
 *     };
 *     return directiveDefinitionObject;
 *   });
 * ```
 *
 * <div class="alert alert-warning">
 * **Note:** Any unspecified options will use the default value. You can see the default values below.
 * </div>
 *
 * Therefore the above can be simplified as:
 *
 * ```js
 *   var myModule = angular.module(...);
 *
 *   myModule.directive('directiveName', function factory(injectables) {
 *     var directiveDefinitionObject = {
 *       link: function postLink(scope, iElement, iAttrs) { ... }
 *     };
 *     return directiveDefinitionObject;
 *     // or
 *     // return function postLink(scope, iElement, iAttrs) { ... }
 *   });
 * ```
 *
 * ### Life-cycle hooks
 * Directive controllers can provide the following methods that are called by AngularJS at points in the life-cycle of the
 * directive:
 * * `$onInit()` - Called on each controller after all the controllers on an element have been constructed and
 *   had their bindings initialized (and before the pre &amp; post linking functions for the directives on
 *   this element). This is a good place to put initialization code for your controller.
 * * `$onChanges(changesObj)` - Called whenever one-way (`<`) or interpolation (`@`) bindings are updated. The
 *   `changesObj` is a hash whose keys are the names of the bound properties that have changed, and the values are an
 *   object of the form `{ currentValue, previousValue, isFirstChange() }`. Use this hook to trigger updates within a
 *   component such as cloning the bound value to prevent accidental mutation of the outer value. Note that this will
 *   also be called when your bindings are initialized.
 * * `$doCheck()` - Called on each turn of the digest cycle. Provides an opportunity to detect and act on
 *   changes. Any actions that you wish to take in response to the changes that you detect must be
 *   invoked from this hook; implementing this has no effect on when `$onChanges` is called. For example, this hook
 *   could be useful if you wish to perform a deep equality check, or to check a Date object, changes to which would not
 *   be detected by AngularJS's change detector and thus not trigger `$onChanges`. This hook is invoked with no arguments;
 *   if detecting changes, you must store the previous value(s) for comparison to the current values.
 * * `$onDestroy()` - Called on a controller when its containing scope is destroyed. Use this hook for releasing
 *   external resources, watches and event handlers. Note that components have their `$onDestroy()` hooks called in
 *   the same order as the `$scope.$broadcast` events are triggered, which is top down. This means that parent
 *   components will have their `$onDestroy()` hook called before child components.
 * * `$postLink()` - Called after this controller's element and its children have been linked. Similar to the post-link
 *   function this hook can be used to set up DOM event handlers and do direct DOM manipulation.
 *   Note that child elements that contain `templateUrl` directives will not have been compiled and linked since
 *   they are waiting for their template to load asynchronously and their own compilation and linking has been
 *   suspended until that occurs.
 *
 * #### Comparison with life-cycle hooks in the new Angular
 * The new Angular also uses life-cycle hooks for its components. While the AngularJS life-cycle hooks are similar there are
 * some differences that you should be aware of, especially when it comes to moving your code from AngularJS to Angular:
 *
 * * AngularJS hooks are prefixed with `$`, such as `$onInit`. Angular hooks are prefixed with `ng`, such as `ngOnInit`.
 * * AngularJS hooks can be defined on the controller prototype or added to the controller inside its constructor.
 *   In Angular you can only define hooks on the prototype of the Component class.
 * * Due to the differences in change-detection, you may get many more calls to `$doCheck` in AngularJS than you would to
 *   `ngDoCheck` in Angular.
 * * Changes to the model inside `$doCheck` will trigger new turns of the digest loop, which will cause the changes to be
 *   propagated throughout the application.
 *   Angular does not allow the `ngDoCheck` hook to trigger a change outside of the component. It will either throw an
 *   error or do nothing depending upon the state of `enableProdMode()`.
 *
 * #### Life-cycle hook examples
 *
 * This example shows how you can check for mutations to a Date object even though the identity of the object
 * has not changed.
 *
 * <example name="doCheckDateExample" module="do-check-module">
 *   <file name="app.js">
 *     angular.module('do-check-module', [])
 *       .component('app', {
 *         template:
 *           'Month: <input ng-model="$ctrl.month" ng-change="$ctrl.updateDate()">' +
 *           'Date: {{ $ctrl.date }}' +
 *           '<test date="$ctrl.date"></test>',
 *         controller: function() {
 *           this.date = new Date();
 *           this.month = this.date.getMonth();
 *           this.updateDate = function() {
 *             this.date.setMonth(this.month);
 *           };
 *         }
 *       })
 *       .component('test', {
 *         bindings: { date: '<' },
 *         template:
 *           '<pre>{{ $ctrl.log | json }}</pre>',
 *         controller: function() {
 *           var previousValue;
 *           this.log = [];
 *           this.$doCheck = function() {
 *             var currentValue = this.date && this.date.valueOf();
 *             if (previousValue !== currentValue) {
 *               this.log.push('doCheck: date mutated: ' + this.date);
 *               previousValue = currentValue;
 *             }
 *           };
 *         }
 *       });
 *   </file>
 *   <file name="index.html">
 *     <app></app>
 *   </file>
 * </example>
 *
 * This example show how you might use `$doCheck` to trigger changes in your component's inputs even if the
 * actual identity of the component doesn't change. (Be aware that cloning and deep equality checks on large
 * arrays or objects can have a negative impact on your application performance)
 *
 * <example name="doCheckArrayExample" module="do-check-module">
 *   <file name="index.html">
 *     <div ng-init="items = []">
 *       <button ng-click="items.push(items.length)">Add Item</button>
 *       <button ng-click="items = []">Reset Items</button>
 *       <pre>{{ items }}</pre>
 *       <test items="items"></test>
 *     </div>
 *   </file>
 *   <file name="app.js">
 *      angular.module('do-check-module', [])
 *        .component('test', {
 *          bindings: { items: '<' },
 *          template:
 *            '<pre>{{ $ctrl.log | json }}</pre>',
 *          controller: function() {
 *            this.log = [];
 *
 *            this.$doCheck = function() {
 *              if (this.items_ref !== this.items) {
 *                this.log.push('doCheck: items changed');
 *                this.items_ref = this.items;
 *              }
 *              if (!angular.equals(this.items_clone, this.items)) {
 *                this.log.push('doCheck: items mutated');
 *                this.items_clone = angular.copy(this.items);
 *              }
 *            };
 *          }
 *        });
 *   </file>
 * </example>
 *
 *
 * ### Directive Definition Object
 *
 * The directive definition object provides instructions to the {@link ng.$compile
 * compiler}. The attributes are:
 *
 * #### `multiElement`
 * When this property is set to true (default is `false`), the HTML compiler will collect DOM nodes between
 * nodes with the attributes `directive-name-start` and `directive-name-end`, and group them
 * together as the directive elements. It is recommended that this feature be used on directives
 * which are not strictly behavioral (such as {@link ngClick}), and which
 * do not manipulate or replace child nodes (such as {@link ngInclude}).
 *
 * #### `priority`
 * When there are multiple directives defined on a single DOM element, sometimes it
 * is necessary to specify the order in which the directives are applied. The `priority` is used
 * to sort the directives before their `compile` functions get called. Priority is defined as a
 * number. Directives with greater numerical `priority` are compiled first. Pre-link functions
 * are also run in priority order, but post-link functions are run in reverse order. The order
 * of directives with the same priority is undefined. The default priority is `0`.
 *
 * #### `terminal`
 * If set to true then the current `priority` will be the last set of directives
 * which will execute (any directives at the current priority will still execute
 * as the order of execution on same `priority` is undefined). Note that expressions
 * and other directives used in the directive's template will also be excluded from execution.
 *
 * #### `scope`
 * The scope property can be `false`, `true`, or an object:
 *
 * * **`false` (default):** No scope will be created for the directive. The directive will use its
 * parent's scope.
 *
 * * **`true`:** A new child scope that prototypically inherits from its parent will be created for
 * the directive's element. If multiple directives on the same element request a new scope,
 * only one new scope is created.
 *
 * * **`{...}` (an object hash):** A new "isolate" scope is created for the directive's template.
 * The 'isolate' scope differs from normal scope in that it does not prototypically
 * inherit from its parent scope. This is useful when creating reusable components, which should not
 * accidentally read or modify data in the parent scope. Note that an isolate scope
 * directive without a `template` or `templateUrl` will not apply the isolate scope
 * to its children elements.
 *
 * The 'isolate' scope object hash defines a set of local scope properties derived from attributes on the
 * directive's element. These local properties are useful for aliasing values for templates. The keys in
 * the object hash map to the name of the property on the isolate scope; the values define how the property
 * is bound to the parent scope, via matching attributes on the directive's element:
 *
 * * `@` or `@attr` - bind a local scope property to the value of DOM attribute. The result is
 *   always a string since DOM attributes are strings. If no `attr` name is specified then the
 *   attribute name is assumed to be the same as the local name. Given `<my-component
 *   my-attr="hello {{name}}">` and the isolate scope definition `scope: { localName:'@myAttr' }`,
 *   the directive's scope property `localName` will reflect the interpolated value of `hello
 *   {{name}}`. As the `name` attribute changes so will the `localName` property on the directive's
 *   scope. The `name` is read from the parent scope (not the directive's scope).
 *
 * * `=` or `=attr` - set up a bidirectional binding between a local scope property and an expression
 *   passed via the attribute `attr`. The expression is evaluated in the context of the parent scope.
 *   If no `attr` name is specified then the attribute name is assumed to be the same as the local
 *   name. Given `<my-component my-attr="parentModel">` and the isolate scope definition `scope: {
 *   localModel: '=myAttr' }`, the property `localModel` on the directive's scope will reflect the
 *   value of `parentModel` on the parent scope. Changes to `parentModel` will be reflected in
 *   `localModel` and vice versa. If the binding expression is non-assignable, or if the attribute
 *   isn't  optional and doesn't exist, an exception
 *   ({@link error/$compile/nonassign `$compile:nonassign`}) will be thrown upon discovering changes
 *   to the local value, since it will be impossible to sync them back to the parent scope.
 *
 *   By default, the {@link ng.$rootScope.Scope#$watch `$watch`}
 *   method is used for tracking changes, and the equality check is based on object identity.
 *   However, if an object literal or an array literal is passed as the binding expression, the
 *   equality check is done by value (using the {@link angular.equals} function). It's also possible
 *   to watch the evaluated value shallowly with {@link ng.$rootScope.Scope#$watchCollection
 *   `$watchCollection`}: use `=*` or `=*attr`
 *
  * * `<` or `<attr` - set up a one-way (one-directional) binding between a local scope property and an
 *   expression passed via the attribute `attr`. The expression is evaluated in the context of the
 *   parent scope. If no `attr` name is specified then the attribute name is assumed to be the same as the
 *   local name.
 *
 *   For example, given `<my-component my-attr="parentModel">` and directive definition of
 *   `scope: { localModel:'<myAttr' }`, then the isolated scope property `localModel` will reflect the
 *   value of `parentModel` on the parent scope. Any changes to `parentModel` will be reflected
 *   in `localModel`, but changes in `localModel` will not reflect in `parentModel`. There are however
 *   two caveats:
 *     1. one-way binding does not copy the value from the parent to the isolate scope, it simply
 *     sets the same value. That means if your bound value is an object, changes to its properties
 *     in the isolated scope will be reflected in the parent scope (because both reference the same object).
 *     2. one-way binding watches changes to the **identity** of the parent value. That means the
 *     {@link ng.$rootScope.Scope#$watch `$watch`} on the parent value only fires if the reference
 *     to the value has changed. In most cases, this should not be of concern, but can be important
 *     to know if you one-way bind to an object, and then replace that object in the isolated scope.
 *     If you now change a property of the object in your parent scope, the change will not be
 *     propagated to the isolated scope, because the identity of the object on the parent scope
 *     has not changed. Instead you must assign a new object.
 *
 *   One-way binding is useful if you do not plan to propagate changes to your isolated scope bindings
 *   back to the parent. However, it does not make this completely impossible.
 *
 *   By default, the {@link ng.$rootScope.Scope#$watch `$watch`}
 *   method is used for tracking changes, and the equality check is based on object identity.
 *   It's also possible to watch the evaluated value shallowly with
 *   {@link ng.$rootScope.Scope#$watchCollection `$watchCollection`}: use `<*` or `<*attr`
 *
 * * `&` or `&attr` - provides a way to execute an expression in the context of the parent scope. If
 *   no `attr` name is specified then the attribute name is assumed to be the same as the local name.
 *   Given `<my-component my-attr="count = count + value">` and the isolate scope definition `scope: {
 *   localFn:'&myAttr' }`, the isolate scope property `localFn` will point to a function wrapper for
 *   the `count = count + value` expression. Often it's desirable to pass data from the isolated scope
 *   via an expression to the parent scope. This can be done by passing a map of local variable names
 *   and values into the expression wrapper fn. For example, if the expression is `increment(amount)`
 *   then we can specify the amount value by calling the `localFn` as `localFn({amount: 22})`.
 *
 * All 4 kinds of bindings (`@`, `=`, `<`, and `&`) can be made optional by adding `?` to the expression.
 * The marker must come after the mode and before the attribute name.
 * See the {@link error/$compile/iscp Invalid Isolate Scope Definition error} for definition examples.
 * This is useful to refine the interface directives provide.
 * One subtle difference between optional and non-optional happens **when the binding attribute is not
 * set**:
 * - the binding is optional: the property will not be defined
 * - the binding is not optional: the property is defined
 *
 * ```js
 *app.directive('testDir', function() {
    return {
      scope: {
        notoptional: '=',
        optional: '=?',
      },
      bindToController: true,
      controller: function() {
        this.$onInit = function() {
          console.log(this.hasOwnProperty('notoptional')) // true
          console.log(this.hasOwnProperty('optional')) // false
        }
      }
    }
  })
 *```
 *
 *
 * ##### Combining directives with different scope defintions
 *
 * In general it's possible to apply more than one directive to one element, but there might be limitations
 * depending on the type of scope required by the directives. The following points will help explain these limitations.
 * For simplicity only two directives are taken into account, but it is also applicable for several directives:
 *
 * * **no scope** + **no scope** => Two directives which don't require their own scope will use their parent's scope
 * * **child scope** + **no scope** =>  Both directives will share one single child scope
 * * **child scope** + **child scope** =>  Both directives will share one single child scope
 * * **isolated scope** + **no scope** =>  The isolated directive will use it's own created isolated scope. The other directive will use
 * its parent's scope
 * * **isolated scope** + **child scope** =>  **Won't work!** Only one scope can be related to one element. Therefore these directives cannot
 * be applied to the same element.
 * * **isolated scope** + **isolated scope**  =>  **Won't work!** Only one scope can be related to one element. Therefore these directives
 * cannot be applied to the same element.
 *
 *
 * #### `bindToController`
 * This property is used to bind scope properties directly to the controller. It can be either
 * `true` or an object hash with the same format as the `scope` property.
 *
 * When an isolate scope is used for a directive (see above), `bindToController: true` will
 * allow a component to have its properties bound to the controller, rather than to scope.
 *
 * After the controller is instantiated, the initial values of the isolate scope bindings will be bound to the controller
 * properties. You can access these bindings once they have been initialized by providing a controller method called
 * `$onInit`, which is called after all the controllers on an element have been constructed and had their bindings
 * initialized.
 *
 * It is also possible to set `bindToController` to an object hash with the same format as the `scope` property.
 * This will set up the scope bindings to the controller directly. Note that `scope` can still be used
 * to define which kind of scope is created. By default, no scope is created. Use `scope: {}` to create an isolate
 * scope (useful for component directives).
 *
 * If both `bindToController` and `scope` are defined and have object hashes, `bindToController` overrides `scope`.
 *
 *
 * #### `controller`
 * Controller constructor function. The controller is instantiated before the
 * pre-linking phase and can be accessed by other directives (see
 * `require` attribute). This allows the directives to communicate with each other and augment
 * each other's behavior. The controller is injectable (and supports bracket notation) with the following locals:
 *
 * * `$scope` - Current scope associated with the element
 * * `$element` - Current element
 * * `$attrs` - Current attributes object for the element
 * * `$transclude` - A transclude linking function pre-bound to the correct transclusion scope:
 *   `function([scope], cloneLinkingFn, futureParentElement, slotName)`:
 *    * `scope`: (optional) override the scope.
 *    * `cloneLinkingFn`: (optional) argument to create clones of the original transcluded content.
 *    * `futureParentElement` (optional):
 *        * defines the parent to which the `cloneLinkingFn` will add the cloned elements.
 *        * default: `$element.parent()` resp. `$element` for `transclude:'element'` resp. `transclude:true`.
 *        * only needed for transcludes that are allowed to contain non html elements (e.g. SVG elements)
 *          and when the `cloneLinkingFn` is passed,
 *          as those elements need to created and cloned in a special way when they are defined outside their
 *          usual containers (e.g. like `<svg>`).
 *        * See also the `directive.templateNamespace` property.
 *    * `slotName`: (optional) the name of the slot to transclude. If falsy (e.g. `null`, `undefined` or `''`)
 *      then the default transclusion is provided.
 *    The `$transclude` function also has a method on it, `$transclude.isSlotFilled(slotName)`, which returns
 *    `true` if the specified slot contains content (i.e. one or more DOM nodes).
 *
 * #### `require`
 * Require another directive and inject its controller as the fourth argument to the linking function. The
 * `require` property can be a string, an array or an object:
 * * a **string** containing the name of the directive to pass to the linking function
 * * an **array** containing the names of directives to pass to the linking function. The argument passed to the
 * linking function will be an array of controllers in the same order as the names in the `require` property
 * * an **object** whose property values are the names of the directives to pass to the linking function. The argument
 * passed to the linking function will also be an object with matching keys, whose values will hold the corresponding
 * controllers.
 *
 * If the `require` property is an object and `bindToController` is truthy, then the required controllers are
 * bound to the controller using the keys of the `require` property. This binding occurs after all the controllers
 * have been constructed but before `$onInit` is called.
 * If the name of the required controller is the same as the local name (the key), the name can be
 * omitted. For example, `{parentDir: '^^'}` is equivalent to `{parentDir: '^^parentDir'}`.
 * See the {@link $compileProvider#component} helper for an example of how this can be used.
 * If no such required directive(s) can be found, or if the directive does not have a controller, then an error is
 * raised (unless no link function is specified and the required controllers are not being bound to the directive
 * controller, in which case error checking is skipped). The name can be prefixed with:
 *
 * * (no prefix) - Locate the required controller on the current element. Throw an error if not found.
 * * `?` - Attempt to locate the required controller or pass `null` to the `link` fn if not found.
 * * `^` - Locate the required controller by searching the element and its parents. Throw an error if not found.
 * * `^^` - Locate the required controller by searching the element's parents. Throw an error if not found.
 * * `?^` - Attempt to locate the required controller by searching the element and its parents or pass
 *   `null` to the `link` fn if not found.
 * * `?^^` - Attempt to locate the required controller by searching the element's parents, or pass
 *   `null` to the `link` fn if not found.
 *
 *
 * #### `controllerAs`
 * Identifier name for a reference to the controller in the directive's scope.
 * This allows the controller to be referenced from the directive template. This is especially
 * useful when a directive is used as component, i.e. with an `isolate` scope. It's also possible
 * to use it in a directive without an `isolate` / `new` scope, but you need to be aware that the
 * `controllerAs` reference might overwrite a property that already exists on the parent scope.
 *
 *
 * #### `restrict`
 * String of subset of `EACM` which restricts the directive to a specific directive
 * declaration style. If omitted, the defaults (elements and attributes) are used.
 *
 * * `E` - Element name (default): `<my-directive></my-directive>`
 * * `A` - Attribute (default): `<div my-directive="exp"></div>`
 * * `C` - Class: `<div class="my-directive: exp;"></div>`
 * * `M` - Comment: `<!-- directive: my-directive exp -->`
 *
 *
 * #### `templateNamespace`
 * String representing the document type used by the markup in the template.
 * AngularJS needs this information as those elements need to be created and cloned
 * in a special way when they are defined outside their usual containers like `<svg>` and `<math>`.
 *
 * * `html` - All root nodes in the template are HTML. Root nodes may also be
 *   top-level elements such as `<svg>` or `<math>`.
 * * `svg` - The root nodes in the template are SVG elements (excluding `<math>`).
 * * `math` - The root nodes in the template are MathML elements (excluding `<svg>`).
 *
 * If no `templateNamespace` is specified, then the namespace is considered to be `html`.
 *
 * #### `template`
 * HTML markup that may:
 * * Replace the contents of the directive's element (default).
 * * Replace the directive's element itself (if `replace` is true - DEPRECATED).
 * * Wrap the contents of the directive's element (if `transclude` is true).
 *
 * Value may be:
 *
 * * A string. For example `<div red-on-hover>{{delete_str}}</div>`.
 * * A function which takes two arguments `tElement` and `tAttrs` (described in the `compile`
 *   function api below) and returns a string value.
 *
 *
 * #### `templateUrl`
 * This is similar to `template` but the template is loaded from the specified URL, asynchronously.
 *
 * Because template loading is asynchronous the compiler will suspend compilation of directives on that element
 * for later when the template has been resolved.  In the meantime it will continue to compile and link
 * sibling and parent elements as though this element had not contained any directives.
 *
 * The compiler does not suspend the entire compilation to wait for templates to be loaded because this
 * would result in the whole app "stalling" until all templates are loaded asynchronously - even in the
 * case when only one deeply nested directive has `templateUrl`.
 *
 * Template loading is asynchronous even if the template has been preloaded into the {@link $templateCache}
 *
 * You can specify `templateUrl` as a string representing the URL or as a function which takes two
 * arguments `tElement` and `tAttrs` (described in the `compile` function api below) and returns
 * a string value representing the url.  In either case, the template URL is passed through {@link
 * $sce#getTrustedResourceUrl $sce.getTrustedResourceUrl}.
 *
 *
 * #### `replace`
 * <div class="alert alert-danger">
 * **Note:** `replace` is deprecated in AngularJS and has been removed in the new Angular (v2+).
 * </div>
 *
 * Specifies what the template should replace. Defaults to `false`.
 *
 * * `true` - the template will replace the directive's element.
 * * `false` - the template will replace the contents of the directive's element.
 *
 * The replacement process migrates all of the attributes / classes from the old element to the new
 * one. See the {@link guide/directive#template-expanding-directive
 * Directives Guide} for an example.
 *
 * There are very few scenarios where element replacement is required for the application function,
 * the main one being reusable custom components that are used within SVG contexts
 * (because SVG doesn't work with custom elements in the DOM tree).
 *
 * #### `transclude`
 * Extract the contents of the element where the directive appears and make it available to the directive.
 * The contents are compiled and provided to the directive as a **transclusion function**. See the
 * {@link $compile#transclusion Transclusion} section below.
 *
 *
 * #### `compile`
 *
 * ```js
 *   function compile(tElement, tAttrs, transclude) { ... }
 * ```
 *
 * The compile function deals with transforming the template DOM. Since most directives do not do
 * template transformation, it is not used often. The compile function takes the following arguments:
 *
 *   * `tElement` - template element - The element where the directive has been declared. It is
 *     safe to do template transformation on the element and child elements only.
 *
 *   * `tAttrs` - template attributes - Normalized list of attributes declared on this element shared
 *     between all directive compile functions.
 *
 *   * `transclude` -  [*DEPRECATED*!] A transclude linking function: `function(scope, cloneLinkingFn)`
 *
 * <div class="alert alert-warning">
 * **Note:** The template instance and the link instance may be different objects if the template has
 * been cloned. For this reason it is **not** safe to do anything other than DOM transformations that
 * apply to all cloned DOM nodes within the compile function. Specifically, DOM listener registration
 * should be done in a linking function rather than in a compile function.
 * </div>

 * <div class="alert alert-warning">
 * **Note:** The compile function cannot handle directives that recursively use themselves in their
 * own templates or compile functions. Compiling these directives results in an infinite loop and
 * stack overflow errors.
 *
 * This can be avoided by manually using $compile in the postLink function to imperatively compile
 * a directive's template instead of relying on automatic template compilation via `template` or
 * `templateUrl` declaration or manual compilation inside the compile function.
 * </div>
 *
 * <div class="alert alert-danger">
 * **Note:** The `transclude` function that is passed to the compile function is deprecated, as it
 *   e.g. does not know about the right outer scope. Please use the transclude function that is passed
 *   to the link function instead.
 * </div>

 * A compile function can have a return value which can be either a function or an object.
 *
 * * returning a (post-link) function - is equivalent to registering the linking function via the
 *   `link` property of the config object when the compile function is empty.
 *
 * * returning an object with function(s) registered via `pre` and `post` properties - allows you to
 *   control when a linking function should be called during the linking phase. See info about
 *   pre-linking and post-linking functions below.
 *
 *
 * #### `link`
 * This property is used only if the `compile` property is not defined.
 *
 * ```js
 *   function link(scope, iElement, iAttrs, controller, transcludeFn) { ... }
 * ```
 *
 * The link function is responsible for registering DOM listeners as well as updating the DOM. It is
 * executed after the template has been cloned. This is where most of the directive logic will be
 * put.
 *
 *   * `scope` - {@link ng.$rootScope.Scope Scope} - The scope to be used by the
 *     directive for registering {@link ng.$rootScope.Scope#$watch watches}.
 *
 *   * `iElement` - instance element - The element where the directive is to be used. It is safe to
 *     manipulate the children of the element only in `postLink` function since the children have
 *     already been linked.
 *
 *   * `iAttrs` - instance attributes - Normalized list of attributes declared on this element shared
 *     between all directive linking functions.
 *
 *   * `controller` - the directive's required controller instance(s) - Instances are shared
 *     among all directives, which allows the directives to use the controllers as a communication
 *     channel. The exact value depends on the directive's `require` property:
 *       * no controller(s) required: the directive's own controller, or `undefined` if it doesn't have one
 *       * `string`: the controller instance
 *       * `array`: array of controller instances
 *
 *     If a required controller cannot be found, and it is optional, the instance is `null`,
 *     otherwise the {@link error:$compile:ctreq Missing Required Controller} error is thrown.
 *
 *     Note that you can also require the directive's own controller - it will be made available like
 *     any other controller.
 *
 *   * `transcludeFn` - A transclude linking function pre-bound to the correct transclusion scope.
 *     This is the same as the `$transclude` parameter of directive controllers,
 *     see {@link ng.$compile#-controller- the controller section for details}.
 *     `function([scope], cloneLinkingFn, futureParentElement)`.
 *
 * #### Pre-linking function
 *
 * Executed before the child elements are linked. Not safe to do DOM transformation since the
 * compiler linking function will fail to locate the correct elements for linking.
 *
 * #### Post-linking function
 *
 * Executed after the child elements are linked.
 *
 * Note that child elements that contain `templateUrl` directives will not have been compiled
 * and linked since they are waiting for their template to load asynchronously and their own
 * compilation and linking has been suspended until that occurs.
 *
 * It is safe to do DOM transformation in the post-linking function on elements that are not waiting
 * for their async templates to be resolved.
 *
 *
 * ### Transclusion
 *
 * Transclusion is the process of extracting a collection of DOM elements from one part of the DOM and
 * copying them to another part of the DOM, while maintaining their connection to the original AngularJS
 * scope from where they were taken.
 *
 * Transclusion is used (often with {@link ngTransclude}) to insert the
 * original contents of a directive's element into a specified place in the template of the directive.
 * The benefit of transclusion, over simply moving the DOM elements manually, is that the transcluded
 * content has access to the properties on the scope from which it was taken, even if the directive
 * has isolated scope.
 * See the {@link guide/directive#creating-a-directive-that-wraps-other-elements Directives Guide}.
 *
 * This makes it possible for the widget to have private state for its template, while the transcluded
 * content has access to its originating scope.
 *
 * <div class="alert alert-warning">
 * **Note:** When testing an element transclude directive you must not place the directive at the root of the
 * DOM fragment that is being compiled. See {@link guide/unit-testing#testing-transclusion-directives
 * Testing Transclusion Directives}.
 * </div>
 *
 * There are three kinds of transclusion depending upon whether you want to transclude just the contents of the
 * directive's element, the entire element or multiple parts of the element contents:
 *
 * * `true` - transclude the content (i.e. the child nodes) of the directive's element.
 * * `'element'` - transclude the whole of the directive's element including any directives on this
 *   element that defined at a lower priority than this directive. When used, the `template`
 *   property is ignored.
 * * **`{...}` (an object hash):** - map elements of the content onto transclusion "slots" in the template.
 *
 * **Mult-slot transclusion** is declared by providing an object for the `transclude` property.
 *
 * This object is a map where the keys are the name of the slot to fill and the value is an element selector
 * used to match the HTML to the slot. The element selector should be in normalized form (e.g. `myElement`)
 * and will match the standard element variants (e.g. `my-element`, `my:element`, `data-my-element`, etc).
 *
 * For further information check out the guide on {@link guide/directive#matching-directives Matching Directives}
 *
 * If the element selector is prefixed with a `?` then that slot is optional.
 *
 * For example, the transclude object `{ slotA: '?myCustomElement' }` maps `<my-custom-element>` elements to
 * the `slotA` slot, which can be accessed via the `$transclude` function or via the {@link ngTransclude} directive.
 *
 * Slots that are not marked as optional (`?`) will trigger a compile time error if there are no matching elements
 * in the transclude content. If you wish to know if an optional slot was filled with content, then you can call
 * `$transclude.isSlotFilled(slotName)` on the transclude function passed to the directive's link function and
 * injectable into the directive's controller.
 *
 *
 * #### Transclusion Functions
 *
 * When a directive requests transclusion, the compiler extracts its contents and provides a **transclusion
 * function** to the directive's `link` function and `controller`. This transclusion function is a special
 * **linking function** that will return the compiled contents linked to a new transclusion scope.
 *
 * <div class="alert alert-info">
 * If you are just using {@link ngTransclude} then you don't need to worry about this function, since
 * ngTransclude will deal with it for us.
 * </div>
 *
 * If you want to manually control the insertion and removal of the transcluded content in your directive
 * then you must use this transclude function. When you call a transclude function it returns a a jqLite/JQuery
 * object that contains the compiled DOM, which is linked to the correct transclusion scope.
 *
 * When you call a transclusion function you can pass in a **clone attach function**. This function accepts
 * two parameters, `function(clone, scope) { ... }`, where the `clone` is a fresh compiled copy of your transcluded
 * content and the `scope` is the newly created transclusion scope, which the clone will be linked to.
 *
 * <div class="alert alert-info">
 * **Best Practice**: Always provide a `cloneFn` (clone attach function) when you call a transclude function
 * since you then get a fresh clone of the original DOM and also have access to the new transclusion scope.
 * </div>
 *
 * It is normal practice to attach your transcluded content (`clone`) to the DOM inside your **clone
 * attach function**:
 *
 * ```js
 * var transcludedContent, transclusionScope;
 *
 * $transclude(function(clone, scope) {
 *   element.append(clone);
 *   transcludedContent = clone;
 *   transclusionScope = scope;
 * });
 * ```
 *
 * Later, if you want to remove the transcluded content from your DOM then you should also destroy the
 * associated transclusion scope:
 *
 * ```js
 * transcludedContent.remove();
 * transclusionScope.$destroy();
 * ```
 *
 * <div class="alert alert-info">
 * **Best Practice**: if you intend to add and remove transcluded content manually in your directive
 * (by calling the transclude function to get the DOM and calling `element.remove()` to remove it),
 * then you are also responsible for calling `$destroy` on the transclusion scope.
 * </div>
 *
 * The built-in DOM manipulation directives, such as {@link ngIf}, {@link ngSwitch} and {@link ngRepeat}
 * automatically destroy their transcluded clones as necessary so you do not need to worry about this if
 * you are simply using {@link ngTransclude} to inject the transclusion into your directive.
 *
 *
 * #### Transclusion Scopes
 *
 * When you call a transclude function it returns a DOM fragment that is pre-bound to a **transclusion
 * scope**. This scope is special, in that it is a child of the directive's scope (and so gets destroyed
 * when the directive's scope gets destroyed) but it inherits the properties of the scope from which it
 * was taken.
 *
 * For example consider a directive that uses transclusion and isolated scope. The DOM hierarchy might look
 * like this:
 *
 * ```html
 * <div ng-app>
 *   <div isolate>
 *     <div transclusion>
 *     </div>
 *   </div>
 * </div>
 * ```
 *
 * The `$parent` scope hierarchy will look like this:
 *
   ```
   - $rootScope
     - isolate
       - transclusion
   ```
 *
 * but the scopes will inherit prototypically from different scopes to their `$parent`.
 *
   ```
   - $rootScope
     - transclusion
   - isolate
   ```
 *
 *
 * ### Attributes
 *
 * The {@link ng.$compile.directive.Attributes Attributes} object - passed as a parameter in the
 * `link()` or `compile()` functions. It has a variety of uses.
 *
 * * *Accessing normalized attribute names:* Directives like 'ngBind' can be expressed in many ways:
 *   'ng:bind', `data-ng-bind`, or 'x-ng-bind'. The attributes object allows for normalized access
 *   to the attributes.
 *
 * * *Directive inter-communication:* All directives share the same instance of the attributes
 *   object which allows the directives to use the attributes object as inter directive
 *   communication.
 *
 * * *Supports interpolation:* Interpolation attributes are assigned to the attribute object
 *   allowing other directives to read the interpolated value.
 *
 * * *Observing interpolated attributes:* Use `$observe` to observe the value changes of attributes
 *   that contain interpolation (e.g. `src="{{bar}}"`). Not only is this very efficient but it's also
 *   the only way to easily get the actual value because during the linking phase the interpolation
 *   hasn't been evaluated yet and so the value is at this time set to `undefined`.
 *
 * ```js
 * function linkingFn(scope, elm, attrs, ctrl) {
 *   // get the attribute value
 *   console.log(attrs.ngModel);
 *
 *   // change the attribute
 *   attrs.$set('ngModel', 'new value');
 *
 *   // observe changes to interpolated attribute
 *   attrs.$observe('ngModel', function(value) {
 *     console.log('ngModel has changed value to ' + value);
 *   });
 * }
 * ```
 *
 * ## Example
 *
 * <div class="alert alert-warning">
 * **Note**: Typically directives are registered with `module.directive`. The example below is
 * to illustrate how `$compile` works.
 * </div>
 *
 <example module="compileExample" name="compile">
   <file name="index.html">
    <script>
      angular.module('compileExample', [], function($compileProvider) {
        // configure new 'compile' directive by passing a directive
        // factory function. The factory function injects the '$compile'
        $compileProvider.directive('compile', function($compile) {
          // directive factory creates a link function
          return function(scope, element, attrs) {
            scope.$watch(
              function(scope) {
                 // watch the 'compile' expression for changes
                return scope.$eval(attrs.compile);
              },
              function(value) {
                // when the 'compile' expression changes
                // assign it into the current DOM
                element.html(value);

                // compile the new DOM and link it to the current
                // scope.
                // NOTE: we only compile .childNodes so that
                // we don't get into infinite loop compiling ourselves
                $compile(element.contents())(scope);
              }
            );
          };
        });
      })
      .controller('GreeterController', ['$scope', function($scope) {
        $scope.name = 'AngularJS';
        $scope.html = 'Hello {{name}}';
      }]);
    </script>
    <div ng-controller="GreeterController">
      <input ng-model="name"> <br/>
      <textarea ng-model="html"></textarea> <br/>
      <div compile="html"></div>
    </div>
   </file>
   <file name="protractor.js" type="protractor">
     it('should auto compile', function() {
       var textarea = $('textarea');
       var output = $('div[compile]');
       // The initial state reads 'Hello AngularJS'.
       expect(output.getText()).toBe('Hello AngularJS');
       textarea.clear();
       textarea.sendKeys('{{name}}!');
       expect(output.getText()).toBe('AngularJS!');
     });
   </file>
 </example>

 *
 *
 * @param {string|DOMElement} element Element or HTML string to compile into a template function.
 * @param {function(angular.Scope, cloneAttachFn=)} transclude function available to directives - DEPRECATED.
 *
 * <div class="alert alert-danger">
 * **Note:** Passing a `transclude` function to the $compile function is deprecated, as it
 *   e.g. will not use the right outer scope. Please pass the transclude function as a
 *   `parentBoundTranscludeFn` to the link function instead.
 * </div>
 *
 * @param {number} maxPriority only apply directives lower than given priority (Only effects the
 *                 root element(s), not their children)
 * @returns {function(scope, cloneAttachFn=, options=)} a link function which is used to bind template
 * (a DOM element/tree) to a scope. Where:
 *
 *  * `scope` - A {@link ng.$rootScope.Scope Scope} to bind to.
 *  * `cloneAttachFn` - If `cloneAttachFn` is provided, then the link function will clone the
 *  `template` and call the `cloneAttachFn` function allowing the caller to attach the
 *  cloned elements to the DOM document at the appropriate place. The `cloneAttachFn` is
 *  called as: <br/> `cloneAttachFn(clonedElement, scope)` where:
 *
 *      * `clonedElement` - is a clone of the original `element` passed into the compiler.
 *      * `scope` - is the current scope with which the linking function is working with.
 *
 *  * `options` - An optional object hash with linking options. If `options` is provided, then the following
 *  keys may be used to control linking behavior:
 *
 *      * `parentBoundTranscludeFn` - the transclude function made available to
 *        directives; if given, it will be passed through to the link functions of
 *        directives found in `element` during compilation.
 *      * `transcludeControllers` - an object hash with keys that map controller names
 *        to a hash with the key `instance`, which maps to the controller instance;
 *        if given, it will make the controllers available to directives on the compileNode:
 *        ```
 *        {
 *          parent: {
 *            instance: parentControllerInstance
 *          }
 *        }
 *        ```
 *      * `futureParentElement` - defines the parent to which the `cloneAttachFn` will add
 *        the cloned elements; only needed for transcludes that are allowed to contain non html
 *        elements (e.g. SVG elements). See also the directive.controller property.
 *
 * Calling the linking function returns the element of the template. It is either the original
 * element passed in, or the clone of the element if the `cloneAttachFn` is provided.
 *
 * After linking the view is not updated until after a call to $digest which typically is done by
 * AngularJS automatically.
 *
 * If you need access to the bound view, there are two ways to do it:
 *
 * - If you are not asking the linking function to clone the template, create the DOM element(s)
 *   before you send them to the compiler and keep this reference around.
 *   ```js
 *     var element = $compile('<p>{{total}}</p>')(scope);
 *   ```
 *
 * - if on the other hand, you need the element to be cloned, the view reference from the original
 *   example would not point to the clone, but rather to the original template that was cloned. In
 *   this case, you can access the clone via the cloneAttachFn:
 *   ```js
 *     var templateElement = angular.element('<p>{{total}}</p>'),
 *         scope = ....;
 *
 *     var clonedElement = $compile(templateElement)(scope, function(clonedElement, scope) {
 *       //attach the clone to DOM document at the right place
 *     });
 *
 *     //now we have reference to the cloned DOM via `clonedElement`
 *   ```
 *
 *
 * For information on how the compiler works, see the
 * {@link guide/compiler AngularJS HTML Compiler} section of the Developer Guide.
 *
 * @knownIssue
 *
 * ### Double Compilation
 *
   Double compilation occurs when an already compiled part of the DOM gets
   compiled again. This is an undesired effect and can lead to misbehaving directives, performance issues,
   and memory leaks. Refer to the Compiler Guide {@link guide/compiler#double-compilation-and-how-to-avoid-it
   section on double compilation} for an in-depth explanation and ways to avoid it.

 * @knownIssue

   ### Issues with `replace: true`
 *
 * <div class="alert alert-danger">
 *   **Note**: {@link $compile#-replace- `replace: true`} is deprecated and not recommended to use,
 *   mainly due to the issues listed here. It has been completely removed in the new Angular.
 * </div>
 *
 * #### Attribute values are not merged
 *
 * When a `replace` directive encounters the same attribute on the original and the replace node,
 * it will simply deduplicate the attribute and join the values with a space or with a `;` in case of
 * the `style` attribute.
 * ```html
 * Original Node: <span class="original" style="color: red;"></span>
 * Replace Template: <span class="replaced" style="background: blue;"></span>
 * Result: <span class="original replaced" style="color: red; background: blue;"></span>
 * ```
 *
 * That means attributes that contain AngularJS expressions will not be merged correctly, e.g.
 * {@link ngShow} or {@link ngClass} will cause a {@link $parse} error:
 *
 * ```html
 * Original Node: <span ng-class="{'something': something}" ng-show="!condition"></span>
 * Replace Template: <span ng-class="{'else': else}" ng-show="otherCondition"></span>
 * Result: <span ng-class="{'something': something} {'else': else}" ng-show="!condition otherCondition"></span>
 * ```
 *
 * See issue [#5695](https://github.com/angular/angular.js/issues/5695).
 *
 * #### Directives are not deduplicated before compilation
 *
 * When the original node and the replace template declare the same directive(s), they will be
 * {@link guide/compiler#double-compilation-and-how-to-avoid-it compiled twice} because the compiler
 * does not deduplicate them. In many cases, this is not noticable, but e.g. {@link ngModel} will
 * attach `$formatters` and `$parsers` twice.
 *
 * See issue [#2573](https://github.com/angular/angular.js/issues/2573).
 *
 * #### `transclude: element` in the replace template root can have unexpected effects
 *
 * When the replace template has a directive at the root node that uses
 * {@link $compile#-transclude- `transclude: element`}, e.g.
 * {@link ngIf} or {@link ngRepeat}, the DOM structure or scope inheritance can be incorrect.
 * See the following issues:
 *
 * - Incorrect scope on replaced element:
 * [#9837](https://github.com/angular/angular.js/issues/9837)
 * - Different DOM between `template` and `templateUrl`:
 * [#10612](https://github.com/angular/angular.js/issues/14326)
 *
 */
             /**
 * @ngdoc directive
 * @name ngProp
 * @restrict A
 * @element ANY
 *
 * @usage
 *
 * ```html
 * <ANY ng-prop-propname="expression">
 * </ANY>
 * ```
 *
 * or with uppercase letters in property (e.g. "propName"):
 *
 *
 * ```html
 * <ANY ng-prop-prop_name="expression">
 * </ANY>
 * ```
 *
 *
 * @description
 * The `ngProp` directive binds an expression to a DOM element property.
 * `ngProp` allows writing to arbitrary properties by including
 * the property name in the attribute, e.g. `ng-prop-value="'my value'"` binds 'my value' to
 * the `value` property.
 *
 * Usually, it's not necessary to write to properties in AngularJS, as the built-in directives
 * handle the most common use cases (instead of the above example, you would use {@link ngValue}).
 *
 * However, [custom elements](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements)
 * often use custom properties to hold data, and `ngProp` can be used to provide input to these
 * custom elements.
 *
 * ## Binding to camelCase properties
 *
 * Since HTML attributes are case-insensitive, camelCase properties like `innerHTML` must be escaped.
 * AngularJS uses the underscore (_) in front of a character to indicate that it is uppercase, so
 * `innerHTML`  must be written as `ng-prop-inner_h_t_m_l="expression"` (Note that this is just an
 * example, and for binding HTML {@link ngBindHtml} should be used.
 *
 * ## Security
 *
 * Binding expressions to arbitrary properties poses a security risk, as  properties like `innerHTML`
 * can insert potentially dangerous HTML into the application, e.g. script tags that execute
 * malicious code.
 * For this reason, `ngProp` applies Strict Contextual Escaping with the {@link ng.$sce $sce service}.
 * This means vulnerable properties require their content to be "trusted", based on the
 * context of the property. For example, the `innerHTML` is in the `HTML` context, and the
 * `iframe.src` property is in the `RESOURCE_URL` context, which requires that values written to
 * this property are trusted as a `RESOURCE_URL`.
 *
 * This can be set explicitly by calling $sce.trustAs(type, value) on the value that is
 * trusted before passing it to the `ng-prop-*` directive. There are exist shorthand methods for
 * each context type in the form of {@link ng.$sce#trustAsResourceUrl $sce.trustAsResourceUrl()} et al.
 *
 * In some cases you can also rely upon automatic sanitization of untrusted values - see below.
 *
 * Based on the context, other options may exist to mark a value as trusted / configure the behavior
 * of {@link ng.$sce}. For example, to restrict the `RESOURCE_URL` context to specific origins, use
 * the {@link $sceDelegateProvider#resourceUrlWhitelist resourceUrlWhitelist()}
 * and {@link $sceDelegateProvider#resourceUrlBlacklist resourceUrlBlacklist()}.
 *
 * {@link ng.$sce#what-trusted-context-types-are-supported- Find out more about the different context types}.
 *
 * ### HTML Sanitization
 *
 * By default, `$sce` will throw an error if it detects untrusted HTML content, and will not bind the
 * content.
 * However, if you include the {@link ngSanitize ngSanitize module}, it will try to sanitize the
 * potentially dangerous HTML, e.g. strip non-whitelisted tags and attributes when binding to
 * `innerHTML`.
 *
 * @example
 * ### Binding to different contexts
 *
 * <example name="ngProp" module="exampleNgProp">
 *   <file name="app.js">
 *     angular.module('exampleNgProp', [])
 *       .component('main', {
 *         templateUrl: 'main.html',
 *         controller: function($sce) {
 *           this.safeContent = '<strong>Safe content</strong>';
 *           this.unsafeContent = '<button onclick="alert(\'Hello XSS!\')">Click for XSS</button>';
 *           this.trustedUnsafeContent = $sce.trustAsHtml(this.unsafeContent);
 *         }
 *       });
 *   </file>
 *   <file name="main.html">
 *     <div>
 *       <div class="prop-unit">
 *         Binding to a property without security context:
 *         <div class="prop-binding" ng-prop-inner_text="$ctrl.safeContent"></div>
 *         <span class="prop-note">innerText</span> (safeContent)
 *       </div>
 *
 *       <div class="prop-unit">
 *         "Safe" content that requires a security context will throw because the contents could potentially be dangerous ...
 *         <div class="prop-binding" ng-prop-inner_h_t_m_l="$ctrl.safeContent"></div>
 *         <span class="prop-note">innerHTML</span> (safeContent)
 *       </div>
 *
 *       <div class="prop-unit">
 *         ... so that actually dangerous content cannot be executed:
 *         <div class="prop-binding" ng-prop-inner_h_t_m_l="$ctrl.unsafeContent"></div>
 *         <span class="prop-note">innerHTML</span> (unsafeContent)
 *       </div>
 *
 *       <div class="prop-unit">
 *         ... but unsafe Content that has been trusted explicitly works - only do this if you are 100% sure!
 *         <div class="prop-binding" ng-prop-inner_h_t_m_l="$ctrl.trustedUnsafeContent"></div>
 *         <span class="prop-note">innerHTML</span> (trustedUnsafeContent)
 *       </div>
 *     </div>
 *   </file>
 *   <file name="index.html">
 *     <main></main>
 *   </file>
 *   <file name="styles.css">
 *     .prop-unit {
 *       margin-bottom: 10px;
 *     }
 *
 *     .prop-binding {
 *       min-height: 30px;
 *       border: 1px solid blue;
 *     }
 *
 *     .prop-note {
 *       font-family: Monospace;
 *     }
 *   </file>
 * </example>
 *
 *
 * @example
 * ### Binding to innerHTML with ngSanitize
 *
 * <example name="ngProp" module="exampleNgProp" deps="angular-sanitize.js">
 *   <file name="app.js">
 *     angular.module('exampleNgProp', ['ngSanitize'])
 *       .component('main', {
 *         templateUrl: 'main.html',
 *         controller: function($sce) {
 *           this.safeContent = '<strong>Safe content</strong>';
 *           this.unsafeContent = '<button onclick="alert(\'Hello XSS!\')">Click for XSS</button>';
 *           this.trustedUnsafeContent = $sce.trustAsHtml(this.unsafeContent);
 *         }
 *       });
 *   </file>
 *   <file name="main.html">
 *     <div>
 *       <div class="prop-unit">
 *         "Safe" content will be sanitized ...
 *         <div class="prop-binding" ng-prop-inner_h_t_m_l="$ctrl.safeContent"></div>
 *         <span class="prop-note">innerHTML</span> (safeContent)
 *       </div>
 *
 *       <div class="prop-unit">
 *         ... as will dangerous content:
 *         <div class="prop-binding" ng-prop-inner_h_t_m_l="$ctrl.unsafeContent"></div>
 *         <span class="prop-note">innerHTML</span> (unsafeContent)
 *       </div>
 *
 *       <div class="prop-unit">
 *         ... and content that has been trusted explicitly works the same as without ngSanitize:
 *         <div class="prop-binding" ng-prop-inner_h_t_m_l="$ctrl.trustedUnsafeContent"></div>
 *         <span class="prop-note">innerHTML</span> (trustedUnsafeContent)
 *       </div>
 *     </div>
 *   </file>
 *   <file name="index.html">
 *     <main></main>
 *   </file>
 *   <file name="styles.css">
 *     .prop-unit {
 *       margin-bottom: 10px;
 *     }
 *
 *     .prop-binding {
 *       min-height: 30px;
 *       border: 1px solid blue;
 *     }
 *
 *     .prop-note {
 *       font-family: Monospace;
 *     }
 *   </file>
 * </example>
 *
 */
             /** @ngdoc directive
 * @name ngOn
 * @restrict A
 * @element ANY
 *
 * @usage
 *
 * ```html
 * <ANY ng-on-eventname="expression">
 * </ANY>
 * ```
 *
 * or with uppercase letters in property (e.g. "eventName"):
 *
 *
 * ```html
 * <ANY ng-on-event_name="expression">
 * </ANY>
 * ```
 *
 * @description
 * The `ngOn` directive adds an event listener to a DOM element via
 * {@link angular.element angular.element().on()}, and evaluates an expression when the event is
 * fired.
 * `ngOn` allows adding listeners for arbitrary events by including
 * the event name in the attribute, e.g. `ng-on-drop="onDrop()"` executes the 'onDrop()' expression
 * when the `drop` event is fired.
 *
 * AngularJS provides specific directives for many events, such as {@link ngClick}, so in most
 * cases it is not necessary to use `ngOn`. However, AngularJS does not support all events
 * (e.g. the `drop` event in the example above), and new events might be introduced in later DOM
 * standards.
 *
 * Another use-case for `ngOn` is listening to
 * [custom events](https://developer.mozilla.org/docs/Web/Guide/Events/Creating_and_triggering_events)
 * fired by
 * [custom elements](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements).
 *
 * ## Binding to camelCase properties
 *
 * Since HTML attributes are case-insensitive, camelCase properties like `myEvent` must be escaped.
 * AngularJS uses the underscore (_) in front of a character to indicate that it is uppercase, so
 * `myEvent` must be written as `ng-on-my_event="expression"`.
 *
 * @example
 * ### Bind to built-in DOM events
 *
 * <example name="ngOn" module="exampleNgOn">
 *   <file name="app.js">
 *     angular.module('exampleNgOn', [])
 *       .component('main', {
 *         templateUrl: 'main.html',
 *         controller: function() {
 *           this.clickCount = 0;
 *           this.mouseoverCount = 0;
 *
 *           this.loadingState = 0;
 *         }
 *       });
 *   </file>
 *   <file name="main.html">
 *     <div>
 *       This is equivalent to `ngClick` and `ngMouseover`:<br>
 *       <button
 *         ng-on-click="$ctrl.clickCount = $ctrl.clickCount + 1"
 *         ng-on-mouseover="$ctrl.mouseoverCount = $ctrl.mouseoverCount + 1">Click or mouseover</button><br>
 *       clickCount: {{$ctrl.clickCount}}<br>
 *       mouseover: {{$ctrl.mouseoverCount}}
 *
 *       <hr>
 *
 *       For the `error` and `load` event on images no built-in AngularJS directives exist:<br>
 *       <img src="thisimagedoesnotexist.png" ng-on-error="$ctrl.loadingState = -1" ng-on-load="$ctrl.loadingState = 1"><br>
 *       <div ng-switch="$ctrl.loadingState">
 *         <span ng-switch-when="0">Image is loading</span>
 *         <span ng-switch-when="-1">Image load error</span>
 *         <span ng-switch-when="1">Image loaded successfully</span>
 *       </div>
 *     </div>
 *   </file>
 *   <file name="index.html">
 *     <main></main>
 *   </file>
 * </example>
 *
 *
 * @example
 * ### Bind to custom DOM events
 *
 * <example name="ngOnCustom" module="exampleNgOn">
 *   <file name="app.js">
 *     angular.module('exampleNgOn', [])
 *       .component('main', {
 *         templateUrl: 'main.html',
 *         controller: function() {
 *           this.eventLog = '';
 *
 *           this.listener = function($event) {
 *             this.eventLog = 'Event with type "' + $event.type + '" fired at ' + $event.detail;
 *           };
 *         }
 *       })
 *       .component('childComponent', {
 *         templateUrl: 'child.html',
 *         controller: function($element) {
 *           this.fireEvent = function() {
 *             var event = new CustomEvent('customtype', { detail: new Date()});
 *
 *             $element[0].dispatchEvent(event);
 *           };
 *         }
 *       });
 *   </file>
 *   <file name="main.html">
 *     <child-component ng-on-customtype="$ctrl.listener($event)"></child-component><br>
 *     <span>Event log: {{$ctrl.eventLog}}</span>
 *   </file>
 *   <file name="child.html">
      <button ng-click="$ctrl.fireEvent()">Fire custom event</button>
 *   </file>
 *   <file name="index.html">
 *     <main></main>
 *   </file>
 * </example>
 */var $compileMinErr=minErr('$compile');function UNINITIALIZED_VALUE(){}var _UNINITIALIZED_VALUE=new UNINITIALIZED_VALUE();$CompileProvider['$inject']=['$provide','$$sanitizeUriProvider'];function $CompileProvider(_0x1fe027,_0x6fd2e8){var _0x13da23={},_0x5e9297=_0x10d8('0x0'),_0x3b664c=/^\s*directive:\s*([\w-]+)\s+(.*)$/,_0x4c9a42=/(([\w-]+)(?::([^;]+))?;?)/,_0x57a1e2=makeMap(_0x10d8('0x1')),_0x8e86f4=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/;var _0x262161=/^(on[a-z]+|formaction)$/;var _0x38f9a4=createMap();function _0x5e51cb(_0x277095,_0x47313f,_0x193230){var _0x421f3d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/;var _0xb6e7a8=createMap();forEach(_0x277095,function(_0x41f5d6,_0x51ffe7){_0x41f5d6=_0x41f5d6[_0x10d8('0x2')]();if(_0x41f5d6 in _0x38f9a4){_0xb6e7a8[_0x51ffe7]=_0x38f9a4[_0x41f5d6];return;}var _0x211d21=_0x41f5d6[_0x10d8('0x3')](_0x421f3d);if(!_0x211d21){throw $compileMinErr(_0x10d8('0x4'),'Invalid\x20{3}\x20for\x20directive\x20\x27{0}\x27.'+'\x20Definition:\x20{...\x20{1}:\x20\x27{2}\x27\x20...}',_0x47313f,_0x51ffe7,_0x41f5d6,_0x193230?_0x10d8('0x5'):'isolate\x20scope\x20definition');}_0xb6e7a8[_0x51ffe7]={'mode':_0x211d21[0x1][0x0],'collection':_0x211d21[0x2]==='*','optional':_0x211d21[0x3]==='?','attrName':_0x211d21[0x4]||_0x51ffe7};if(_0x211d21[0x4]){_0x38f9a4[_0x41f5d6]=_0xb6e7a8[_0x51ffe7];}});return _0xb6e7a8;}function _0x1fd12b(_0x19b665,_0x262b92){var _0x28af29={'isolateScope':null,'bindToController':null};if(isObject(_0x19b665[_0x10d8('0x6')])){if(_0x19b665[_0x10d8('0x7')]===!![]){_0x28af29['bindToController']=_0x5e51cb(_0x19b665[_0x10d8('0x6')],_0x262b92,!![]);_0x28af29[_0x10d8('0x8')]={};}else{_0x28af29['isolateScope']=_0x5e51cb(_0x19b665[_0x10d8('0x6')],_0x262b92,![]);}}if(isObject(_0x19b665[_0x10d8('0x7')])){_0x28af29[_0x10d8('0x7')]=_0x5e51cb(_0x19b665[_0x10d8('0x7')],_0x262b92,!![]);}if(_0x28af29['bindToController']&&!_0x19b665[_0x10d8('0x9')]){throw $compileMinErr(_0x10d8('0xa'),_0x10d8('0xb'),_0x262b92);}return _0x28af29;}function _0x18a30b(_0x160a79){var _0x2d72e6=_0x160a79['charAt'](0x0);if(!_0x2d72e6||_0x2d72e6!==lowercase(_0x2d72e6)){throw $compileMinErr(_0x10d8('0xc'),'Directive/Component\x20name\x20\x27{0}\x27\x20is\x20invalid.\x20The\x20first\x20character\x20must\x20be\x20a\x20lowercase\x20letter',_0x160a79);}if(_0x160a79!==_0x160a79[_0x10d8('0x2')]()){throw $compileMinErr(_0x10d8('0xc'),_0x10d8('0xd'),_0x160a79);}}function _0x4dfe1d(_0x5e7da5){var _0x3e0df4=_0x5e7da5[_0x10d8('0xe')]||_0x5e7da5[_0x10d8('0x9')]&&_0x5e7da5['name'];if(!isArray(_0x3e0df4)&&isObject(_0x3e0df4)){forEach(_0x3e0df4,function(_0x584717,_0x90e760){var _0x3f72d4=_0x584717[_0x10d8('0x3')](_0x8e86f4);var _0xf08318=_0x584717[_0x10d8('0xf')](_0x3f72d4[0x0]['length']);if(!_0xf08318)_0x3e0df4[_0x90e760]=_0x3f72d4[0x0]+_0x90e760;});}return _0x3e0df4;}function _0xc8a85f(_0x16901d,_0x462a10){if(_0x16901d&&!(isString(_0x16901d)&&/[EACM]/['test'](_0x16901d))){throw $compileMinErr(_0x10d8('0x10'),_0x10d8('0x11'),_0x16901d,_0x462a10);}return _0x16901d||'EA';}this[_0x10d8('0x12')]=function registerDirective(_0x2a5140,_0x3fd715){assertArg(_0x2a5140,_0x10d8('0x13'));assertNotHasOwnProperty(_0x2a5140,_0x10d8('0x12'));if(isString(_0x2a5140)){_0x18a30b(_0x2a5140);assertArg(_0x3fd715,_0x10d8('0x14'));if(!_0x13da23[_0x10d8('0x15')](_0x2a5140)){_0x13da23[_0x2a5140]=[];_0x1fe027[_0x10d8('0x16')](_0x2a5140+_0x5e9297,['$injector',_0x10d8('0x17'),function(_0x2925cd,_0x154c28){var _0x7e612e=[];forEach(_0x13da23[_0x2a5140],function(_0x3fd715,_0x33042a){try{var _0x377833=_0x2925cd[_0x10d8('0x18')](_0x3fd715);if(isFunction(_0x377833)){_0x377833={'compile':valueFn(_0x377833)};}else if(!_0x377833['compile']&&_0x377833[_0x10d8('0x19')]){_0x377833[_0x10d8('0x1a')]=valueFn(_0x377833[_0x10d8('0x19')]);}_0x377833[_0x10d8('0x1b')]=_0x377833['priority']||0x0;_0x377833['index']=_0x33042a;_0x377833['name']=_0x377833[_0x10d8('0x13')]||_0x2a5140;_0x377833[_0x10d8('0xe')]=_0x4dfe1d(_0x377833);_0x377833[_0x10d8('0x1c')]=_0xc8a85f(_0x377833[_0x10d8('0x1c')],_0x2a5140);_0x377833[_0x10d8('0x1d')]=_0x3fd715[_0x10d8('0x1d')];_0x7e612e['push'](_0x377833);}catch(_0x481f2a){_0x154c28(_0x481f2a);}});return _0x7e612e;}]);}_0x13da23[_0x2a5140][_0x10d8('0x1e')](_0x3fd715);}else{forEach(_0x2a5140,reverseParams(registerDirective));}return this;};this[_0x10d8('0x1f')]=function registerComponent(_0x4be5bb,_0x4286d1){if(!isString(_0x4be5bb)){forEach(_0x4be5bb,reverseParams(bind(this,registerComponent)));return this;}var _0x3013ae=_0x4286d1['controller']||function(){};function _0x2cce21(_0x1d2270){function _0x1a2250(_0x1c180f){if(isFunction(_0x1c180f)||isArray(_0x1c180f)){return function(_0x740ffc,_0x25252a){return _0x1d2270[_0x10d8('0x18')](_0x1c180f,this,{'$element':_0x740ffc,'$attrs':_0x25252a});};}else{return _0x1c180f;}}var _0x412aa5=!_0x4286d1[_0x10d8('0x20')]&&!_0x4286d1[_0x10d8('0x21')]?'':_0x4286d1[_0x10d8('0x20')];var _0x549239={'controller':_0x3013ae,'controllerAs':identifierForController(_0x4286d1[_0x10d8('0x9')])||_0x4286d1[_0x10d8('0x22')]||_0x10d8('0x23'),'template':_0x1a2250(_0x412aa5),'templateUrl':_0x1a2250(_0x4286d1[_0x10d8('0x21')]),'transclude':_0x4286d1[_0x10d8('0x24')],'scope':{},'bindToController':_0x4286d1[_0x10d8('0x25')]||{},'restrict':'E','require':_0x4286d1[_0x10d8('0xe')]};forEach(_0x4286d1,function(_0x1866be,_0x4c0985){if(_0x4c0985[_0x10d8('0x26')](0x0)==='$')_0x549239[_0x4c0985]=_0x1866be;});return _0x549239;}forEach(_0x4286d1,function(_0x1c58de,_0x44f083){if(_0x44f083['charAt'](0x0)==='$'){_0x2cce21[_0x44f083]=_0x1c58de;if(isFunction(_0x3013ae))_0x3013ae[_0x44f083]=_0x1c58de;}});_0x2cce21['$inject']=[_0x10d8('0x27')];return this['directive'](_0x4be5bb,_0x2cce21);};this[_0x10d8('0x28')]=function(_0x52eeee){if(isDefined(_0x52eeee)){_0x6fd2e8[_0x10d8('0x28')](_0x52eeee);return this;}else{return _0x6fd2e8[_0x10d8('0x28')]();}};this[_0x10d8('0x29')]=function(_0x426306){if(isDefined(_0x426306)){_0x6fd2e8[_0x10d8('0x29')](_0x426306);return this;}else{return _0x6fd2e8[_0x10d8('0x29')]();}};var _0x54651b=!![];this[_0x10d8('0x2a')]=function(_0x2851f3){if(isDefined(_0x2851f3)){_0x54651b=_0x2851f3;return this;}return _0x54651b;};var _0x502aaf=![];this[_0x10d8('0x2b')]=function(_0xf477f2){if(isDefined(_0xf477f2)){_0x502aaf=_0xf477f2;return this;}return _0x502aaf;};var _0x4955e9=0xa;this[_0x10d8('0x2c')]=function(_0x49abec){if(arguments[_0x10d8('0x2d')]){_0x4955e9=_0x49abec;return this;}return _0x4955e9;};var _0x4f6273=!![];this['commentDirectivesEnabled']=function(_0x17c216){if(arguments[_0x10d8('0x2d')]){_0x4f6273=_0x17c216;return this;}return _0x4f6273;};var _0x2e60dc=!![];this[_0x10d8('0x2e')]=function(_0x38ca1e){if(arguments[_0x10d8('0x2d')]){_0x2e60dc=_0x38ca1e;return this;}return _0x2e60dc;};var _0x216e1b=createMap();this[_0x10d8('0x2f')]=function(_0x8b06ce,_0x4ac511,_0x514678){var _0x3beccb=_0x8b06ce[_0x10d8('0x30')]()+'|'+_0x4ac511['toLowerCase']();if(_0x3beccb in _0x216e1b&&_0x216e1b[_0x3beccb]!==_0x514678){throw $compileMinErr(_0x10d8('0x31'),'Property\x20context\x20\x27{0}.{1}\x27\x20already\x20set\x20to\x20\x27{2}\x27,\x20cannot\x20override\x20to\x20\x27{3}\x27.',_0x8b06ce,_0x4ac511,_0x216e1b[_0x3beccb],_0x514678);}_0x216e1b[_0x3beccb]=_0x514678;return this;};(function registerNativePropertyContexts(){function _0xd7be98(_0x3f19a5,_0xdd4c43){forEach(_0xdd4c43,function(_0x30e66f){_0x216e1b[_0x30e66f[_0x10d8('0x30')]()]=_0x3f19a5;});}_0xd7be98(SCE_CONTEXTS['HTML'],[_0x10d8('0x32'),'*|innerHTML',_0x10d8('0x33')]);_0xd7be98(SCE_CONTEXTS[_0x10d8('0x34')],[_0x10d8('0x35')]);_0xd7be98(SCE_CONTEXTS['URL'],[_0x10d8('0x36'),_0x10d8('0x37'),'a|href',_0x10d8('0x38'),_0x10d8('0x39'),_0x10d8('0x3a'),_0x10d8('0x3b'),_0x10d8('0x3c'),'ins|cite','q|cite']);_0xd7be98(SCE_CONTEXTS[_0x10d8('0x3d')],[_0x10d8('0x3e'),'img|src','img|srcset',_0x10d8('0x3f'),_0x10d8('0x40'),_0x10d8('0x41'),_0x10d8('0x42'),_0x10d8('0x43')]);_0xd7be98(SCE_CONTEXTS[_0x10d8('0x44')],[_0x10d8('0x45'),_0x10d8('0x46'),_0x10d8('0x47'),_0x10d8('0x48'),'embed|src',_0x10d8('0x49'),_0x10d8('0x4a'),'head|profile',_0x10d8('0x4b'),_0x10d8('0x4c'),_0x10d8('0x4d'),_0x10d8('0x4e'),_0x10d8('0x4f'),_0x10d8('0x50'),_0x10d8('0x51')]);}());this[_0x10d8('0x52')]=[_0x10d8('0x27'),_0x10d8('0x53'),'$exceptionHandler',_0x10d8('0x54'),'$parse',_0x10d8('0x55'),_0x10d8('0x56'),_0x10d8('0x57'),_0x10d8('0x58'),function(_0x3db768,_0x7174c5,_0xddbdf2,_0x3c3fda,_0x5d41a4,_0xb7b888,_0x578127,_0x55e88f,_0x13211c){var _0x2e1709=/^\w/;var _0x2ea88a=window[_0x10d8('0x59')][_0x10d8('0x5a')](_0x10d8('0x5b'));var _0x57590a=_0x4f6273;var _0x2cc904=_0x2e60dc;var _0x5b1d9b=_0x4955e9;var _0x471b05;function _0xd1900d(){try{if(!--_0x5b1d9b){_0x471b05=undefined;throw $compileMinErr(_0x10d8('0x5c'),_0x10d8('0x5d'),_0x4955e9);}_0x578127[_0x10d8('0x5e')](function(){for(var _0xfc169=0x0,_0x23d668=_0x471b05[_0x10d8('0x2d')];_0xfc169<_0x23d668;++_0xfc169){try{_0x471b05[_0xfc169]();}catch(_0x4de284){_0xddbdf2(_0x4de284);}}_0x471b05=undefined;});}finally{_0x5b1d9b++;}}function _0x4856c1(_0x4a950b,_0x4c10f7){if(!_0x4a950b){return _0x4a950b;}if(!isString(_0x4a950b)){throw $compileMinErr(_0x10d8('0x5f'),_0x10d8('0x60'),_0x4c10f7,_0x4a950b[_0x10d8('0x61')]());}var _0x5304be='';var _0x58461d=trim(_0x4a950b);var _0xd40b61=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/;var _0x32431e=/\s/[_0x10d8('0x62')](_0x58461d)?_0xd40b61:/(,)/;var _0x478199=_0x58461d[_0x10d8('0x63')](_0x32431e);var _0x3b46cb=Math[_0x10d8('0x64')](_0x478199[_0x10d8('0x2d')]/0x2);for(var _0x3c6d48=0x0;_0x3c6d48<_0x3b46cb;_0x3c6d48++){var _0x391f10=_0x3c6d48*0x2;_0x5304be+=_0x55e88f[_0x10d8('0x65')](trim(_0x478199[_0x391f10]));_0x5304be+='\x20'+trim(_0x478199[_0x391f10+0x1]);}var _0x351297=trim(_0x478199[_0x3c6d48*0x2])['split'](/\s/);_0x5304be+=_0x55e88f[_0x10d8('0x65')](trim(_0x351297[0x0]));if(_0x351297['length']===0x2){_0x5304be+='\x20'+trim(_0x351297[0x1]);}return _0x5304be;}function _0x185808(_0x5ae765,_0x1af0a4){if(_0x1af0a4){var _0xf2eb2b=Object[_0x10d8('0x66')](_0x1af0a4);var _0x42a7b9,_0x3c7886,_0x38205b;for(_0x42a7b9=0x0,_0x3c7886=_0xf2eb2b[_0x10d8('0x2d')];_0x42a7b9<_0x3c7886;_0x42a7b9++){_0x38205b=_0xf2eb2b[_0x42a7b9];this[_0x38205b]=_0x1af0a4[_0x38205b];}}else{this[_0x10d8('0x67')]={};}this['$$element']=_0x5ae765;}_0x185808[_0x10d8('0x68')]={'$normalize':directiveNormalize,'$addClass':function(_0x2f5835){if(_0x2f5835&&_0x2f5835[_0x10d8('0x2d')]>0x0){_0x13211c[_0x10d8('0x69')](this['$$element'],_0x2f5835);}},'$removeClass':function(_0x225f09){if(_0x225f09&&_0x225f09['length']>0x0){_0x13211c['removeClass'](this[_0x10d8('0x6a')],_0x225f09);}},'$updateClass':function(_0x136c83,_0x476df0){var _0x324d24=tokenDifference(_0x136c83,_0x476df0);if(_0x324d24&&_0x324d24[_0x10d8('0x2d')]){_0x13211c['addClass'](this[_0x10d8('0x6a')],_0x324d24);}var _0x4831b1=tokenDifference(_0x476df0,_0x136c83);if(_0x4831b1&&_0x4831b1['length']){_0x13211c['removeClass'](this[_0x10d8('0x6a')],_0x4831b1);}},'$set':function(_0x104d13,_0x2557f1,_0x40fdb2,_0x115c2e){var _0x3276d1=this[_0x10d8('0x6a')][0x0],_0x2c9bfd=getBooleanAttrName(_0x3276d1,_0x104d13),_0x511db3=getAliasedAttrName(_0x104d13),_0x217627=_0x104d13,_0x78b173;if(_0x2c9bfd){this[_0x10d8('0x6a')][_0x10d8('0x6b')](_0x104d13,_0x2557f1);_0x115c2e=_0x2c9bfd;}else if(_0x511db3){this[_0x511db3]=_0x2557f1;_0x217627=_0x511db3;}this[_0x104d13]=_0x2557f1;if(_0x115c2e){this[_0x10d8('0x67')][_0x104d13]=_0x115c2e;}else{_0x115c2e=this[_0x10d8('0x67')][_0x104d13];if(!_0x115c2e){this[_0x10d8('0x67')][_0x104d13]=_0x115c2e=snake_case(_0x104d13,'-');}}_0x78b173=nodeName_(this[_0x10d8('0x6a')]);if(_0x78b173===_0x10d8('0x6c')&&_0x104d13===_0x10d8('0x5f')){this[_0x104d13]=_0x2557f1=_0x4856c1(_0x2557f1,_0x10d8('0x6d'));}if(_0x40fdb2!==![]){if(_0x2557f1===null||isUndefined(_0x2557f1)){this[_0x10d8('0x6a')][_0x10d8('0x6e')](_0x115c2e);}else{if(_0x2e1709[_0x10d8('0x62')](_0x115c2e)){if(_0x2c9bfd&&_0x2557f1===![]){this[_0x10d8('0x6a')][_0x10d8('0x6e')](_0x115c2e);}else{this['$$element'][_0x10d8('0x6f')](_0x115c2e,_0x2557f1);}}else{_0x4082b8(this[_0x10d8('0x6a')][0x0],_0x115c2e,_0x2557f1);}}}var _0x454e25=this[_0x10d8('0x70')];if(_0x454e25){forEach(_0x454e25[_0x217627],function(_0x24c32c){try{_0x24c32c(_0x2557f1);}catch(_0x1eb05e){_0xddbdf2(_0x1eb05e);}});}},'$observe':function(_0xe4f65b,_0x50e3e5){var _0xbd5ddd=this,_0x17ad9f=_0xbd5ddd[_0x10d8('0x70')]||(_0xbd5ddd[_0x10d8('0x70')]=createMap()),_0xd5683f=_0x17ad9f[_0xe4f65b]||(_0x17ad9f[_0xe4f65b]=[]);_0xd5683f[_0x10d8('0x1e')](_0x50e3e5);_0x578127[_0x10d8('0x71')](function(){if(!_0xd5683f['$$inter']&&_0xbd5ddd['hasOwnProperty'](_0xe4f65b)&&!isUndefined(_0xbd5ddd[_0xe4f65b])){_0x50e3e5(_0xbd5ddd[_0xe4f65b]);}});return function(){arrayRemove(_0xd5683f,_0x50e3e5);};}};function _0x4082b8(_0x4c690a,_0x1cb56e,_0x337338){_0x2ea88a[_0x10d8('0x72')]=_0x10d8('0x73')+_0x1cb56e+'>';var _0x395011=_0x2ea88a[_0x10d8('0x74')][_0x10d8('0x75')];var _0x19f3a0=_0x395011[0x0];_0x395011['removeNamedItem'](_0x19f3a0[_0x10d8('0x13')]);_0x19f3a0['value']=_0x337338;_0x4c690a[_0x10d8('0x75')]['setNamedItem'](_0x19f3a0);}function _0x315d3d(_0x3147b5,_0x322a17){try{_0x3147b5['addClass'](_0x322a17);}catch(_0x3aaebd){}}var _0x59fd11=_0x7174c5['startSymbol'](),_0x3f7889=_0x7174c5[_0x10d8('0x76')](),_0x4a381b=_0x59fd11==='{{'&&_0x3f7889==='}}'?identity:function _0x4a381b(_0x10feef){return _0x10feef[_0x10d8('0x77')](/\{\{/g,_0x59fd11)[_0x10d8('0x77')](/}}/g,_0x3f7889);},_0xb8d66e=/^ng(Attr|Prop|On)([A-Z].*)$/;var _0x352d71=/^(.+)Start$/;_0x43f700[_0x10d8('0x78')]=_0x54651b?function $$addBindingInfo(_0x52a2d3,_0x1ce524){var _0x33737e=_0x52a2d3['data'](_0x10d8('0x79'))||[];if(isArray(_0x1ce524)){_0x33737e=_0x33737e[_0x10d8('0x7a')](_0x1ce524);}else{_0x33737e[_0x10d8('0x1e')](_0x1ce524);}_0x52a2d3['data'](_0x10d8('0x79'),_0x33737e);}:noop;_0x43f700[_0x10d8('0x7b')]=_0x54651b?function $$addBindingClass(_0x4bb58d){_0x315d3d(_0x4bb58d,_0x10d8('0x7c'));}:noop;_0x43f700[_0x10d8('0x7d')]=_0x54651b?function $$addScopeInfo(_0x4f9c4e,_0x50d393,_0x27ca94,_0x585087){var _0x327bdc=_0x27ca94?_0x585087?_0x10d8('0x7e'):_0x10d8('0x7f'):'$scope';_0x4f9c4e[_0x10d8('0x80')](_0x327bdc,_0x50d393);}:noop;_0x43f700[_0x10d8('0x81')]=_0x54651b?function $$addScopeClass(_0x5e4f7d,_0x504a7f){_0x315d3d(_0x5e4f7d,_0x504a7f?_0x10d8('0x82'):_0x10d8('0x83'));}:noop;_0x43f700[_0x10d8('0x84')]=function(_0x18755a,_0x362fe3){var _0xd7d1cd='';if(_0x54651b){_0xd7d1cd='\x20'+(_0x18755a||'')+':\x20';if(_0x362fe3)_0xd7d1cd+=_0x362fe3+'\x20';}return window['document'][_0x10d8('0x85')](_0xd7d1cd);};return _0x43f700;function _0x43f700(_0xab1333,_0x29e0f7,_0x1bb08d,_0x8e336b,_0x1e5fa0){if(!(_0xab1333 instanceof jqLite)){_0xab1333=jqLite(_0xab1333);}var _0x250121=_0x100a01(_0xab1333,_0x29e0f7,_0xab1333,_0x1bb08d,_0x8e336b,_0x1e5fa0);_0x43f700['$$addScopeClass'](_0xab1333);var _0x2cadd4=null;return function publicLinkFn(_0x551143,_0x52bf48,_0x545536){if(!_0xab1333){throw $compileMinErr(_0x10d8('0x86'),_0x10d8('0x87'));}assertArg(_0x551143,_0x10d8('0x6'));if(_0x1e5fa0&&_0x1e5fa0['needsNewScope']){_0x551143=_0x551143[_0x10d8('0x88')]['$new']();}_0x545536=_0x545536||{};var _0x3a6156=_0x545536[_0x10d8('0x89')],_0x15178c=_0x545536[_0x10d8('0x8a')],_0x34e6d=_0x545536[_0x10d8('0x8b')];if(_0x3a6156&&_0x3a6156[_0x10d8('0x8c')]){_0x3a6156=_0x3a6156[_0x10d8('0x8c')];}if(!_0x2cadd4){_0x2cadd4=_0x275414(_0x34e6d);}var _0x5b1062;if(_0x2cadd4!==_0x10d8('0x8d')){_0x5b1062=jqLite(_0x1a921d(_0x2cadd4,jqLite(_0x10d8('0x8e'))[_0x10d8('0x8f')](_0xab1333)[_0x10d8('0x8d')]()));}else if(_0x52bf48){_0x5b1062=JQLitePrototype['clone'][_0x10d8('0x90')](_0xab1333);}else{_0x5b1062=_0xab1333;}if(_0x15178c){for(var _0x2b9f0f in _0x15178c){_0x5b1062['data']('$'+_0x2b9f0f+_0x10d8('0x91'),_0x15178c[_0x2b9f0f]['instance']);}}_0x43f700[_0x10d8('0x7d')](_0x5b1062,_0x551143);if(_0x52bf48)_0x52bf48(_0x5b1062,_0x551143);if(_0x250121)_0x250121(_0x551143,_0x5b1062,_0x5b1062,_0x3a6156);if(!_0x52bf48){_0xab1333=_0x250121=null;}return _0x5b1062;};}function _0x275414(_0x7aa971){var _0x38b4b8=_0x7aa971&&_0x7aa971[0x0];if(!_0x38b4b8){return'html';}else{return nodeName_(_0x38b4b8)!=='foreignobject'&&toString[_0x10d8('0x90')](_0x38b4b8)[_0x10d8('0x3')](/SVG/)?_0x10d8('0x92'):_0x10d8('0x8d');}}function _0x100a01(_0x17561b,_0x49c727,_0x17a846,_0x3c4141,_0x1c6fab,_0x249ebf){var _0x122504=[],_0x3139fe=isArray(_0x17561b)||_0x17561b instanceof jqLite,_0x48315e,_0x12bcb6,_0xbd610,_0x6ded6f,_0x450f3b,_0x1101c2,_0x1c9691;for(var _0x3ed05c=0x0;_0x3ed05c<_0x17561b[_0x10d8('0x2d')];_0x3ed05c++){_0x48315e=new _0x185808();if(msie===0xb){_0x235c56(_0x17561b,_0x3ed05c,_0x3139fe);}_0x12bcb6=_0x25e80f(_0x17561b[_0x3ed05c],[],_0x48315e,_0x3ed05c===0x0?_0x3c4141:undefined,_0x1c6fab);_0xbd610=_0x12bcb6['length']?_0x1dbd21(_0x12bcb6,_0x17561b[_0x3ed05c],_0x48315e,_0x49c727,_0x17a846,null,[],[],_0x249ebf):null;if(_0xbd610&&_0xbd610['scope']){_0x43f700['$$addScopeClass'](_0x48315e[_0x10d8('0x6a')]);}_0x450f3b=_0xbd610&&_0xbd610['terminal']||!(_0x6ded6f=_0x17561b[_0x3ed05c]['childNodes'])||!_0x6ded6f['length']?null:_0x100a01(_0x6ded6f,_0xbd610?(_0xbd610[_0x10d8('0x93')]||!_0xbd610[_0x10d8('0x94')])&&_0xbd610['transclude']:_0x49c727);if(_0xbd610||_0x450f3b){_0x122504[_0x10d8('0x1e')](_0x3ed05c,_0xbd610,_0x450f3b);_0x1101c2=!![];_0x1c9691=_0x1c9691||_0xbd610;}_0x249ebf=null;}return _0x1101c2?_0xb4b6e8:null;function _0xb4b6e8(_0xfadb36,_0x17561b,_0x17a846,_0x1e1a95){var _0xbd610,_0x450f3b,_0x4beaba,_0x35d615,_0x3ed05c,_0x201fd0,_0x3d0337,_0x4ef909;var _0x14b7f8;if(_0x1c9691){var _0x39fc0c=_0x17561b[_0x10d8('0x2d')];_0x14b7f8=new Array(_0x39fc0c);for(_0x3ed05c=0x0;_0x3ed05c<_0x122504[_0x10d8('0x2d')];_0x3ed05c+=0x3){_0x3d0337=_0x122504[_0x3ed05c];_0x14b7f8[_0x3d0337]=_0x17561b[_0x3d0337];}}else{_0x14b7f8=_0x17561b;}for(_0x3ed05c=0x0,_0x201fd0=_0x122504[_0x10d8('0x2d')];_0x3ed05c<_0x201fd0;){_0x4beaba=_0x14b7f8[_0x122504[_0x3ed05c++]];_0xbd610=_0x122504[_0x3ed05c++];_0x450f3b=_0x122504[_0x3ed05c++];if(_0xbd610){if(_0xbd610[_0x10d8('0x6')]){_0x35d615=_0xfadb36[_0x10d8('0x95')]();_0x43f700['$$addScopeInfo'](jqLite(_0x4beaba),_0x35d615);}else{_0x35d615=_0xfadb36;}if(_0xbd610[_0x10d8('0x93')]){_0x4ef909=_0x245a9c(_0xfadb36,_0xbd610[_0x10d8('0x24')],_0x1e1a95);}else if(!_0xbd610[_0x10d8('0x94')]&&_0x1e1a95){_0x4ef909=_0x1e1a95;}else if(!_0x1e1a95&&_0x49c727){_0x4ef909=_0x245a9c(_0xfadb36,_0x49c727);}else{_0x4ef909=null;}_0xbd610(_0x450f3b,_0x35d615,_0x4beaba,_0x17a846,_0x4ef909);}else if(_0x450f3b){_0x450f3b(_0xfadb36,_0x4beaba['childNodes'],undefined,_0x1e1a95);}}}}function _0x235c56(_0x18c308,_0x2fe3bf,_0x1ce036){var _0x25841c=_0x18c308[_0x2fe3bf];var _0x2626ef=_0x25841c['parentNode'];var _0x376e2f;if(_0x25841c['nodeType']!==NODE_TYPE_TEXT){return;}while(!![]){_0x376e2f=_0x2626ef?_0x25841c[_0x10d8('0x96')]:_0x18c308[_0x2fe3bf+0x1];if(!_0x376e2f||_0x376e2f[_0x10d8('0x97')]!==NODE_TYPE_TEXT){break;}_0x25841c[_0x10d8('0x98')]=_0x25841c[_0x10d8('0x98')]+_0x376e2f[_0x10d8('0x98')];if(_0x376e2f[_0x10d8('0x99')]){_0x376e2f[_0x10d8('0x99')][_0x10d8('0x9a')](_0x376e2f);}if(_0x1ce036&&_0x376e2f===_0x18c308[_0x2fe3bf+0x1]){_0x18c308[_0x10d8('0x9b')](_0x2fe3bf+0x1,0x1);}}}function _0x245a9c(_0x30405d,_0x2274e0,_0x4358c4){function _0x1e4bae(_0x332a1a,_0xa6dd7,_0x86afea,_0x58809a,_0x365536){if(!_0x332a1a){_0x332a1a=_0x30405d[_0x10d8('0x95')](![],_0x365536);_0x332a1a['$$transcluded']=!![];}return _0x2274e0(_0x332a1a,_0xa6dd7,{'parentBoundTranscludeFn':_0x4358c4,'transcludeControllers':_0x86afea,'futureParentElement':_0x58809a});}var _0x1982f1=_0x1e4bae['$$slots']=createMap();for(var _0x5c4769 in _0x2274e0[_0x10d8('0x9c')]){if(_0x2274e0[_0x10d8('0x9c')][_0x5c4769]){_0x1982f1[_0x5c4769]=_0x245a9c(_0x30405d,_0x2274e0[_0x10d8('0x9c')][_0x5c4769],_0x4358c4);}else{_0x1982f1[_0x5c4769]=null;}}return _0x1e4bae;}function _0x25e80f(_0x2bfaf6,_0x243b64,_0x3a3d73,_0x34948f,_0x42afda){var _0x31111d=_0x2bfaf6['nodeType'],_0x10ae0d=_0x3a3d73['$attr'],_0x2c5f9f,_0x584677,_0x17e2fb;switch(_0x31111d){case NODE_TYPE_ELEMENT:_0x584677=nodeName_(_0x2bfaf6);_0x43d37f(_0x243b64,directiveNormalize(_0x584677),'E',_0x34948f,_0x42afda);for(var _0x47e5d1,_0x5673c1,_0x3350db,_0x56e0e2,_0x198fcf,_0x3af2da=_0x2bfaf6[_0x10d8('0x75')],_0x10f336=0x0,_0x4c51ce=_0x3af2da&&_0x3af2da[_0x10d8('0x2d')];_0x10f336<_0x4c51ce;_0x10f336++){var _0x3eeddd=![];var _0xb1355e=![];var _0x254e41=![],_0x47fcdb=![],_0x14d0af=![];var _0x58aabd;_0x47e5d1=_0x3af2da[_0x10f336];_0x5673c1=_0x47e5d1[_0x10d8('0x13')];_0x56e0e2=_0x47e5d1[_0x10d8('0x9d')];_0x3350db=directiveNormalize(_0x5673c1['toLowerCase']());if(_0x198fcf=_0x3350db[_0x10d8('0x3')](_0xb8d66e)){_0x254e41=_0x198fcf[0x1]==='Attr';_0x47fcdb=_0x198fcf[0x1]==='Prop';_0x14d0af=_0x198fcf[0x1]==='On';_0x5673c1=_0x5673c1['replace'](PREFIX_REGEXP,'')['toLowerCase']()[_0x10d8('0x9e')](0x4+_0x198fcf[0x1]['length'])[_0x10d8('0x77')](/_(.)/g,function(_0x2c5f9f,_0x129ea1){return _0x129ea1[_0x10d8('0x9f')]();});}else if((_0x58aabd=_0x3350db['match'](_0x352d71))&&_0x32e203(_0x58aabd[0x1])){_0x3eeddd=_0x5673c1;_0xb1355e=_0x5673c1[_0x10d8('0x9e')](0x0,_0x5673c1['length']-0x5)+'end';_0x5673c1=_0x5673c1[_0x10d8('0x9e')](0x0,_0x5673c1[_0x10d8('0x2d')]-0x6);}if(_0x47fcdb||_0x14d0af){_0x3a3d73[_0x3350db]=_0x56e0e2;_0x10ae0d[_0x3350db]=_0x47e5d1['name'];if(_0x47fcdb){_0x6b4334(_0x2bfaf6,_0x243b64,_0x3350db,_0x5673c1);}else{_0x5b6bd6(_0x243b64,_0x3350db,_0x5673c1);}}else{_0x3350db=directiveNormalize(_0x5673c1[_0x10d8('0x30')]());_0x10ae0d[_0x3350db]=_0x5673c1;if(_0x254e41||!_0x3a3d73[_0x10d8('0x15')](_0x3350db)){_0x3a3d73[_0x3350db]=_0x56e0e2;if(getBooleanAttrName(_0x2bfaf6,_0x3350db)){_0x3a3d73[_0x3350db]=!![];}}_0x379b28(_0x2bfaf6,_0x243b64,_0x56e0e2,_0x3350db,_0x254e41);_0x43d37f(_0x243b64,_0x3350db,'A',_0x34948f,_0x42afda,_0x3eeddd,_0xb1355e);}}if(_0x584677===_0x10d8('0xa0')&&_0x2bfaf6[_0x10d8('0xa1')](_0x10d8('0xa2'))===_0x10d8('0xa3')){_0x2bfaf6['setAttribute'](_0x10d8('0xa4'),_0x10d8('0xa5'));}if(!_0x2cc904)break;_0x17e2fb=_0x2bfaf6[_0x10d8('0xa6')];if(isObject(_0x17e2fb)){_0x17e2fb=_0x17e2fb[_0x10d8('0xa7')];}if(isString(_0x17e2fb)&&_0x17e2fb!==''){while(_0x2c5f9f=_0x4c9a42[_0x10d8('0xa8')](_0x17e2fb)){_0x3350db=directiveNormalize(_0x2c5f9f[0x2]);if(_0x43d37f(_0x243b64,_0x3350db,'C',_0x34948f,_0x42afda)){_0x3a3d73[_0x3350db]=trim(_0x2c5f9f[0x3]);}_0x17e2fb=_0x17e2fb[_0x10d8('0x9e')](_0x2c5f9f[_0x10d8('0xa9')]+_0x2c5f9f[0x0][_0x10d8('0x2d')]);}}break;case NODE_TYPE_TEXT:_0x1a6f4a(_0x243b64,_0x2bfaf6[_0x10d8('0x98')]);break;case NODE_TYPE_COMMENT:if(!_0x57590a)break;_0xcf18a(_0x2bfaf6,_0x243b64,_0x3a3d73,_0x34948f,_0x42afda);break;}_0x243b64[_0x10d8('0xaa')](_0x35d889);return _0x243b64;}function _0xcf18a(_0x5d3583,_0x1bd599,_0x3a5f13,_0x46bdb4,_0x458583){try{var _0x26aedf=_0x3b664c[_0x10d8('0xa8')](_0x5d3583[_0x10d8('0x98')]);if(_0x26aedf){var _0x370397=directiveNormalize(_0x26aedf[0x1]);if(_0x43d37f(_0x1bd599,_0x370397,'M',_0x46bdb4,_0x458583)){_0x3a5f13[_0x370397]=trim(_0x26aedf[0x2]);}}}catch(_0x56a892){}}function _0x1b9f91(_0x532e0e,_0x45a11f,_0x4c7359){var _0x143348=[];var _0x19ecd3=0x0;if(_0x45a11f&&_0x532e0e['hasAttribute']&&_0x532e0e[_0x10d8('0xab')](_0x45a11f)){do{if(!_0x532e0e){throw $compileMinErr(_0x10d8('0xac'),_0x10d8('0xad'),_0x45a11f,_0x4c7359);}if(_0x532e0e[_0x10d8('0x97')]===NODE_TYPE_ELEMENT){if(_0x532e0e['hasAttribute'](_0x45a11f))_0x19ecd3++;if(_0x532e0e['hasAttribute'](_0x4c7359))_0x19ecd3--;}_0x143348[_0x10d8('0x1e')](_0x532e0e);_0x532e0e=_0x532e0e[_0x10d8('0x96')];}while(_0x19ecd3>0x0);}else{_0x143348[_0x10d8('0x1e')](_0x532e0e);}return jqLite(_0x143348);}function _0x427b36(_0x582bf2,_0x57abd5,_0x39bc50){return function groupedElementsLink(_0x108776,_0x69d6d2,_0x585046,_0x1eacd5,_0xd2db7f){_0x69d6d2=_0x1b9f91(_0x69d6d2[0x0],_0x57abd5,_0x39bc50);return _0x582bf2(_0x108776,_0x69d6d2,_0x585046,_0x1eacd5,_0xd2db7f);};}function _0x237c9b(_0x5a6e6e,_0x1be338,_0x48f82b,_0x4d8e82,_0x9671ab,_0x29008f){var _0x22547c;if(_0x5a6e6e){return _0x43f700(_0x1be338,_0x48f82b,_0x4d8e82,_0x9671ab,_0x29008f);}return function lazyCompilation(){if(!_0x22547c){_0x22547c=_0x43f700(_0x1be338,_0x48f82b,_0x4d8e82,_0x9671ab,_0x29008f);_0x1be338=_0x48f82b=_0x29008f=null;}return _0x22547c[_0x10d8('0xae')](this,arguments);};}function _0x1dbd21(_0x571ec4,_0x2be325,_0x42bf39,_0x1e4452,_0x38f739,_0x36bdc3,_0x188500,_0x39dd48,_0x2de620){_0x2de620=_0x2de620||{};var _0x4f89e7=-Number['MAX_VALUE'],_0x2740d7=_0x2de620[_0x10d8('0xaf')],_0x1bf0f5=_0x2de620['controllerDirectives'],_0x35179a=_0x2de620[_0x10d8('0xb0')],_0x24d401=_0x2de620[_0x10d8('0xb1')],_0x5ce494=_0x2de620[_0x10d8('0xb2')],_0x4e2a9e=![],_0x5c7632=![],_0xd18964=_0x2de620[_0x10d8('0xb3')],_0x5a586c=_0x42bf39[_0x10d8('0x6a')]=jqLite(_0x2be325),_0x664397,_0x4216fd,_0x4bc729,_0x50e370=_0x36bdc3,_0x296973=_0x1e4452,_0x253a5c,_0x33a4cc=![],_0x32cb4c=![],_0x33267b;for(var _0x136194=0x0,_0x890831=_0x571ec4['length'];_0x136194<_0x890831;_0x136194++){_0x664397=_0x571ec4[_0x136194];var _0x58b16b=_0x664397[_0x10d8('0xb4')];var _0x401ddc=_0x664397['$$end'];if(_0x58b16b){_0x5a586c=_0x1b9f91(_0x2be325,_0x58b16b,_0x401ddc);}_0x4bc729=undefined;if(_0x4f89e7>_0x664397[_0x10d8('0x1b')]){break;}_0x33267b=_0x664397[_0x10d8('0x6')];if(_0x33267b){if(!_0x664397[_0x10d8('0x21')]){if(isObject(_0x33267b)){_0x15cbff('new/isolated\x20scope',_0x35179a||_0x2740d7,_0x664397,_0x5a586c);_0x35179a=_0x664397;}else{_0x15cbff('new/isolated\x20scope',_0x35179a,_0x664397,_0x5a586c);}}_0x2740d7=_0x2740d7||_0x664397;}_0x4216fd=_0x664397[_0x10d8('0x13')];if(!_0x33a4cc&&(_0x664397['replace']&&(_0x664397[_0x10d8('0x21')]||_0x664397['template'])||_0x664397[_0x10d8('0x24')]&&!_0x664397[_0x10d8('0xb5')])){var _0x1a1ca4;for(var _0x142bc4=_0x136194+0x1;_0x1a1ca4=_0x571ec4[_0x142bc4++];){if(_0x1a1ca4['transclude']&&!_0x1a1ca4[_0x10d8('0xb5')]||_0x1a1ca4[_0x10d8('0x77')]&&(_0x1a1ca4[_0x10d8('0x21')]||_0x1a1ca4[_0x10d8('0x20')])){_0x32cb4c=!![];break;}}_0x33a4cc=!![];}if(!_0x664397[_0x10d8('0x21')]&&_0x664397[_0x10d8('0x9')]){_0x1bf0f5=_0x1bf0f5||createMap();_0x15cbff('\x27'+_0x4216fd+'\x27\x20controller',_0x1bf0f5[_0x4216fd],_0x664397,_0x5a586c);_0x1bf0f5[_0x4216fd]=_0x664397;}_0x33267b=_0x664397[_0x10d8('0x24')];if(_0x33267b){_0x4e2a9e=!![];if(!_0x664397[_0x10d8('0xb5')]){_0x15cbff(_0x10d8('0xb6'),_0x5ce494,_0x664397,_0x5a586c);_0x5ce494=_0x664397;}if(_0x33267b===_0x10d8('0xb7')){_0xd18964=!![];_0x4f89e7=_0x664397[_0x10d8('0x1b')];_0x4bc729=_0x5a586c;_0x5a586c=_0x42bf39[_0x10d8('0x6a')]=jqLite(_0x43f700['$$createComment'](_0x4216fd,_0x42bf39[_0x4216fd]));_0x2be325=_0x5a586c[0x0];_0x3cc15c(_0x38f739,sliceArgs(_0x4bc729),_0x2be325);_0x296973=_0x237c9b(_0x32cb4c,_0x4bc729,_0x1e4452,_0x4f89e7,_0x50e370&&_0x50e370[_0x10d8('0x13')],{'nonTlbTranscludeDirective':_0x5ce494});}else{var _0x2c9671=createMap();if(!isObject(_0x33267b)){_0x4bc729=jqLite(jqLiteClone(_0x2be325))[_0x10d8('0xb8')]();}else{_0x4bc729=window[_0x10d8('0x59')][_0x10d8('0xb9')]();var _0x1a955a=createMap();var _0x55202e=createMap();forEach(_0x33267b,function(_0x55c66d,_0x2491e4){var _0x260ce4=_0x55c66d[_0x10d8('0x26')](0x0)==='?';_0x55c66d=_0x260ce4?_0x55c66d['substring'](0x1):_0x55c66d;_0x1a955a[_0x55c66d]=_0x2491e4;_0x2c9671[_0x2491e4]=null;_0x55202e[_0x2491e4]=_0x260ce4;});forEach(_0x5a586c[_0x10d8('0xb8')](),function(_0x1630cf){var _0x589573=_0x1a955a[directiveNormalize(nodeName_(_0x1630cf))];if(_0x589573){_0x55202e[_0x589573]=!![];_0x2c9671[_0x589573]=_0x2c9671[_0x589573]||window[_0x10d8('0x59')][_0x10d8('0xb9')]();_0x2c9671[_0x589573][_0x10d8('0xba')](_0x1630cf);}else{_0x4bc729[_0x10d8('0xba')](_0x1630cf);}});forEach(_0x55202e,function(_0xd9a70d,_0x56e4e7){if(!_0xd9a70d){throw $compileMinErr('reqslot',_0x10d8('0xbb'),_0x56e4e7);}});for(var _0x5d30db in _0x2c9671){if(_0x2c9671[_0x5d30db]){var _0x129ddc=jqLite(_0x2c9671[_0x5d30db][_0x10d8('0xbc')]);_0x2c9671[_0x5d30db]=_0x237c9b(_0x32cb4c,_0x129ddc,_0x1e4452);}}_0x4bc729=jqLite(_0x4bc729['childNodes']);}_0x5a586c[_0x10d8('0xbd')]();_0x296973=_0x237c9b(_0x32cb4c,_0x4bc729,_0x1e4452,undefined,undefined,{'needsNewScope':_0x664397['$$isolateScope']||_0x664397[_0x10d8('0xbe')]});_0x296973[_0x10d8('0x9c')]=_0x2c9671;}}if(_0x664397[_0x10d8('0x20')]){_0x5c7632=!![];_0x15cbff('template',_0x24d401,_0x664397,_0x5a586c);_0x24d401=_0x664397;_0x33267b=isFunction(_0x664397[_0x10d8('0x20')])?_0x664397[_0x10d8('0x20')](_0x5a586c,_0x42bf39):_0x664397['template'];_0x33267b=_0x4a381b(_0x33267b);if(_0x664397['replace']){_0x50e370=_0x664397;if(jqLiteIsTextNode(_0x33267b)){_0x4bc729=[];}else{_0x4bc729=removeComments(_0x1a921d(_0x664397[_0x10d8('0xbf')],trim(_0x33267b)));}_0x2be325=_0x4bc729[0x0];if(_0x4bc729[_0x10d8('0x2d')]!==0x1||_0x2be325[_0x10d8('0x97')]!==NODE_TYPE_ELEMENT){throw $compileMinErr(_0x10d8('0xc0'),_0x10d8('0xc1'),_0x4216fd,'');}_0x3cc15c(_0x38f739,_0x5a586c,_0x2be325);var _0x3c951a={'$attr':{}};var _0x456f7f=_0x25e80f(_0x2be325,[],_0x3c951a);var _0x1374b6=_0x571ec4['splice'](_0x136194+0x1,_0x571ec4[_0x10d8('0x2d')]-(_0x136194+0x1));if(_0x35179a||_0x2740d7){_0x3fc4fd(_0x456f7f,_0x35179a,_0x2740d7);}_0x571ec4=_0x571ec4[_0x10d8('0x7a')](_0x456f7f)[_0x10d8('0x7a')](_0x1374b6);_0x245303(_0x42bf39,_0x3c951a);_0x890831=_0x571ec4[_0x10d8('0x2d')];}else{_0x5a586c['html'](_0x33267b);}}if(_0x664397[_0x10d8('0x21')]){_0x5c7632=!![];_0x15cbff(_0x10d8('0x20'),_0x24d401,_0x664397,_0x5a586c);_0x24d401=_0x664397;if(_0x664397[_0x10d8('0x77')]){_0x50e370=_0x664397;}_0x57472c=_0x328c86(_0x571ec4[_0x10d8('0x9b')](_0x136194,_0x571ec4[_0x10d8('0x2d')]-_0x136194),_0x5a586c,_0x42bf39,_0x38f739,_0x4e2a9e&&_0x296973,_0x188500,_0x39dd48,{'controllerDirectives':_0x1bf0f5,'newScopeDirective':_0x2740d7!==_0x664397&&_0x2740d7,'newIsolateScopeDirective':_0x35179a,'templateDirective':_0x24d401,'nonTlbTranscludeDirective':_0x5ce494});_0x890831=_0x571ec4[_0x10d8('0x2d')];}else if(_0x664397[_0x10d8('0x1a')]){try{_0x253a5c=_0x664397[_0x10d8('0x1a')](_0x5a586c,_0x42bf39,_0x296973);var _0x5e16da=_0x664397[_0x10d8('0xc2')]||_0x664397;if(isFunction(_0x253a5c)){_0x422f1b(null,bind(_0x5e16da,_0x253a5c),_0x58b16b,_0x401ddc);}else if(_0x253a5c){_0x422f1b(bind(_0x5e16da,_0x253a5c[_0x10d8('0xc3')]),bind(_0x5e16da,_0x253a5c['post']),_0x58b16b,_0x401ddc);}}catch(_0x16c3e8){_0xddbdf2(_0x16c3e8,startingTag(_0x5a586c));}}if(_0x664397[_0x10d8('0xc4')]){_0x57472c['terminal']=!![];_0x4f89e7=Math['max'](_0x4f89e7,_0x664397[_0x10d8('0x1b')]);}}_0x57472c['scope']=_0x2740d7&&_0x2740d7[_0x10d8('0x6')]===!![];_0x57472c[_0x10d8('0x93')]=_0x4e2a9e;_0x57472c[_0x10d8('0x94')]=_0x5c7632;_0x57472c[_0x10d8('0x24')]=_0x296973;_0x2de620[_0x10d8('0xb3')]=_0xd18964;return _0x57472c;function _0x422f1b(_0x17f95a,_0x43aa98,_0x58b16b,_0x401ddc){if(_0x17f95a){if(_0x58b16b)_0x17f95a=_0x427b36(_0x17f95a,_0x58b16b,_0x401ddc);_0x17f95a[_0x10d8('0xe')]=_0x664397[_0x10d8('0xe')];_0x17f95a[_0x10d8('0xc5')]=_0x4216fd;if(_0x35179a===_0x664397||_0x664397[_0x10d8('0xc6')]){_0x17f95a=_0x34fb84(_0x17f95a,{'isolateScope':!![]});}_0x188500[_0x10d8('0x1e')](_0x17f95a);}if(_0x43aa98){if(_0x58b16b)_0x43aa98=_0x427b36(_0x43aa98,_0x58b16b,_0x401ddc);_0x43aa98[_0x10d8('0xe')]=_0x664397[_0x10d8('0xe')];_0x43aa98[_0x10d8('0xc5')]=_0x4216fd;if(_0x35179a===_0x664397||_0x664397['$$isolateScope']){_0x43aa98=_0x34fb84(_0x43aa98,{'isolateScope':!![]});}_0x39dd48[_0x10d8('0x1e')](_0x43aa98);}}function _0x57472c(_0x38f933,_0x903a08,_0x21a481,_0x1cfd54,_0x1341c8){var _0x136194,_0x890831,_0x253a5c,_0xd25b31,_0x4a19da,_0xe84840,_0x1e4452,_0x40d578,_0x32b284,_0x241ccc;if(_0x2be325===_0x21a481){_0x32b284=_0x42bf39;_0x40d578=_0x42bf39[_0x10d8('0x6a')];}else{_0x40d578=jqLite(_0x21a481);_0x32b284=new _0x185808(_0x40d578,_0x42bf39);}_0x4a19da=_0x903a08;if(_0x35179a){_0xd25b31=_0x903a08['$new'](!![]);}else if(_0x2740d7){_0x4a19da=_0x903a08['$parent'];}if(_0x1341c8){_0x1e4452=_0x440278;_0x1e4452['$$boundTransclude']=_0x1341c8;_0x1e4452['isSlotFilled']=function(_0x5d30db){return!!_0x1341c8['$$slots'][_0x5d30db];};}if(_0x1bf0f5){_0xe84840=_0x1ad036(_0x40d578,_0x32b284,_0x1e4452,_0x1bf0f5,_0xd25b31,_0x903a08,_0x35179a);}if(_0x35179a){_0x43f700[_0x10d8('0x7d')](_0x40d578,_0xd25b31,!![],!(_0x24d401&&(_0x24d401===_0x35179a||_0x24d401===_0x35179a[_0x10d8('0xc2')])));_0x43f700['$$addScopeClass'](_0x40d578,!![]);_0xd25b31[_0x10d8('0xc7')]=_0x35179a[_0x10d8('0xc7')];_0x241ccc=_0x5230d2(_0x903a08,_0x32b284,_0xd25b31,_0xd25b31['$$isolateBindings'],_0x35179a);if(_0x241ccc[_0x10d8('0xc8')]){_0xd25b31[_0x10d8('0xc9')]('$destroy',_0x241ccc[_0x10d8('0xc8')]);}}for(var _0x4edf91 in _0xe84840){var _0x49feec=_0x1bf0f5[_0x4edf91];var _0x2eb186=_0xe84840[_0x4edf91];var _0x28d77d=_0x49feec[_0x10d8('0xca')][_0x10d8('0x7')];_0x2eb186[_0x10d8('0xcb')]=_0x2eb186();_0x40d578['data']('$'+_0x49feec[_0x10d8('0x13')]+_0x10d8('0x91'),_0x2eb186[_0x10d8('0xcb')]);_0x2eb186['bindingInfo']=_0x5230d2(_0x4a19da,_0x32b284,_0x2eb186[_0x10d8('0xcb')],_0x28d77d,_0x49feec);}forEach(_0x1bf0f5,function(_0x49feec,_0x4edf91){var _0x214ec6=_0x49feec[_0x10d8('0xe')];if(_0x49feec[_0x10d8('0x7')]&&!isArray(_0x214ec6)&&isObject(_0x214ec6)){extend(_0xe84840[_0x4edf91][_0x10d8('0xcb')],_0x400fc0(_0x4edf91,_0x214ec6,_0x40d578,_0xe84840));}});forEach(_0xe84840,function(_0x2eb186){var _0x346e43=_0x2eb186['instance'];if(isFunction(_0x346e43['$onChanges'])){try{_0x346e43[_0x10d8('0xcc')](_0x2eb186[_0x10d8('0xcd')][_0x10d8('0xce')]);}catch(_0x3f6a05){_0xddbdf2(_0x3f6a05);}}if(isFunction(_0x346e43['$onInit'])){try{_0x346e43[_0x10d8('0xcf')]();}catch(_0x329e3a){_0xddbdf2(_0x329e3a);}}if(isFunction(_0x346e43['$doCheck'])){_0x4a19da[_0x10d8('0xd0')](function(){_0x346e43[_0x10d8('0xd1')]();});_0x346e43[_0x10d8('0xd1')]();}if(isFunction(_0x346e43['$onDestroy'])){_0x4a19da[_0x10d8('0xc9')](_0x10d8('0xd2'),function callOnDestroyHook(){_0x346e43[_0x10d8('0xd3')]();});}});for(_0x136194=0x0,_0x890831=_0x188500[_0x10d8('0x2d')];_0x136194<_0x890831;_0x136194++){_0x253a5c=_0x188500[_0x136194];_0x5ed9ee(_0x253a5c,_0x253a5c['isolateScope']?_0xd25b31:_0x903a08,_0x40d578,_0x32b284,_0x253a5c[_0x10d8('0xe')]&&_0x400fc0(_0x253a5c[_0x10d8('0xc5')],_0x253a5c[_0x10d8('0xe')],_0x40d578,_0xe84840),_0x1e4452);}var _0x43afa3=_0x903a08;if(_0x35179a&&(_0x35179a[_0x10d8('0x20')]||_0x35179a['templateUrl']===null)){_0x43afa3=_0xd25b31;}if(_0x38f933){_0x38f933(_0x43afa3,_0x21a481[_0x10d8('0xbc')],undefined,_0x1341c8);}for(_0x136194=_0x39dd48[_0x10d8('0x2d')]-0x1;_0x136194>=0x0;_0x136194--){_0x253a5c=_0x39dd48[_0x136194];_0x5ed9ee(_0x253a5c,_0x253a5c[_0x10d8('0x8')]?_0xd25b31:_0x903a08,_0x40d578,_0x32b284,_0x253a5c[_0x10d8('0xe')]&&_0x400fc0(_0x253a5c[_0x10d8('0xc5')],_0x253a5c['require'],_0x40d578,_0xe84840),_0x1e4452);}forEach(_0xe84840,function(_0x2eb186){var _0x40b51b=_0x2eb186['instance'];if(isFunction(_0x40b51b[_0x10d8('0xd4')])){_0x40b51b[_0x10d8('0xd4')]();}});function _0x440278(_0x903a08,_0xee57dd,_0x769441,_0x5d30db){var _0x2946f2;if(!isScope(_0x903a08)){_0x5d30db=_0x769441;_0x769441=_0xee57dd;_0xee57dd=_0x903a08;_0x903a08=undefined;}if(_0xd18964){_0x2946f2=_0xe84840;}if(!_0x769441){_0x769441=_0xd18964?_0x40d578[_0x10d8('0xd5')]():_0x40d578;}if(_0x5d30db){var _0x2073f4=_0x1341c8[_0x10d8('0x9c')][_0x5d30db];if(_0x2073f4){return _0x2073f4(_0x903a08,_0xee57dd,_0x2946f2,_0x769441,_0x43afa3);}else if(isUndefined(_0x2073f4)){throw $compileMinErr('noslot','No\x20parent\x20directive\x20that\x20requires\x20a\x20transclusion\x20with\x20slot\x20name\x20\x22{0}\x22.\x20'+_0x10d8('0xd6'),_0x5d30db,startingTag(_0x40d578));}}else{return _0x1341c8(_0x903a08,_0xee57dd,_0x2946f2,_0x769441,_0x43afa3);}}}}function _0x400fc0(_0x394cc9,_0x485f1e,_0x9c5d28,_0x2a4ccb){var _0x28c875;if(isString(_0x485f1e)){var _0x53198a=_0x485f1e[_0x10d8('0x3')](_0x8e86f4);var _0xf753e=_0x485f1e['substring'](_0x53198a[0x0][_0x10d8('0x2d')]);var _0x106839=_0x53198a[0x1]||_0x53198a[0x3];var _0x3f708f=_0x53198a[0x2]==='?';if(_0x106839==='^^'){_0x9c5d28=_0x9c5d28['parent']();}else{_0x28c875=_0x2a4ccb&&_0x2a4ccb[_0xf753e];_0x28c875=_0x28c875&&_0x28c875[_0x10d8('0xcb')];}if(!_0x28c875){var _0x3de9cb='$'+_0xf753e+_0x10d8('0x91');if(_0x106839==='^^'&&_0x9c5d28[0x0]&&_0x9c5d28[0x0]['nodeType']===NODE_TYPE_DOCUMENT){_0x28c875=null;}else{_0x28c875=_0x106839?_0x9c5d28[_0x10d8('0xd7')](_0x3de9cb):_0x9c5d28['data'](_0x3de9cb);}}if(!_0x28c875&&!_0x3f708f){throw $compileMinErr('ctreq',_0x10d8('0xd8'),_0xf753e,_0x394cc9);}}else if(isArray(_0x485f1e)){_0x28c875=[];for(var _0x14b533=0x0,_0x22b986=_0x485f1e['length'];_0x14b533<_0x22b986;_0x14b533++){_0x28c875[_0x14b533]=_0x400fc0(_0x394cc9,_0x485f1e[_0x14b533],_0x9c5d28,_0x2a4ccb);}}else if(isObject(_0x485f1e)){_0x28c875={};forEach(_0x485f1e,function(_0x1fdb73,_0x41fe37){_0x28c875[_0x41fe37]=_0x400fc0(_0x394cc9,_0x1fdb73,_0x9c5d28,_0x2a4ccb);});}return _0x28c875||null;}function _0x1ad036(_0x1bf5b6,_0x307a16,_0x4896b4,_0x4d4706,_0x5f4d03,_0x5cf904,_0x48afd1){var _0x244dfd=createMap();for(var _0x579413 in _0x4d4706){var _0x359acd=_0x4d4706[_0x579413];var _0x316c29={'$scope':_0x359acd===_0x48afd1||_0x359acd[_0x10d8('0xc6')]?_0x5f4d03:_0x5cf904,'$element':_0x1bf5b6,'$attrs':_0x307a16,'$transclude':_0x4896b4};var _0x2352af=_0x359acd[_0x10d8('0x9')];if(_0x2352af==='@'){_0x2352af=_0x307a16[_0x359acd[_0x10d8('0x13')]];}var _0x2c5532=_0xb7b888(_0x2352af,_0x316c29,!![],_0x359acd[_0x10d8('0x22')]);_0x244dfd[_0x359acd[_0x10d8('0x13')]]=_0x2c5532;_0x1bf5b6[_0x10d8('0x80')]('$'+_0x359acd['name']+_0x10d8('0x91'),_0x2c5532['instance']);}return _0x244dfd;}function _0x3fc4fd(_0x236f72,_0x20e2ed,_0x5926fb){for(var _0x5ced15=0x0,_0xc2fa7c=_0x236f72['length'];_0x5ced15<_0xc2fa7c;_0x5ced15++){_0x236f72[_0x5ced15]=inherit(_0x236f72[_0x5ced15],{'$$isolateScope':_0x20e2ed,'$$newScope':_0x5926fb});}}function _0x43d37f(_0x1e1bdb,_0x1ecc87,_0x181dc6,_0x4342a4,_0x498b75,_0x36e60f,_0x3cfe52){if(_0x1ecc87===_0x498b75)return null;var _0xb11c3f=null;if(_0x13da23[_0x10d8('0x15')](_0x1ecc87)){for(var _0x4c7045,_0x179623=_0x3db768[_0x10d8('0xd9')](_0x1ecc87+_0x5e9297),_0x4d22d4=0x0,_0x3d5745=_0x179623['length'];_0x4d22d4<_0x3d5745;_0x4d22d4++){_0x4c7045=_0x179623[_0x4d22d4];if((isUndefined(_0x4342a4)||_0x4342a4>_0x4c7045[_0x10d8('0x1b')])&&_0x4c7045[_0x10d8('0x1c')][_0x10d8('0xda')](_0x181dc6)!==-0x1){if(_0x36e60f){_0x4c7045=inherit(_0x4c7045,{'$$start':_0x36e60f,'$$end':_0x3cfe52});}if(!_0x4c7045[_0x10d8('0xca')]){var _0xf8fa4e=_0x4c7045[_0x10d8('0xca')]=_0x1fd12b(_0x4c7045,_0x4c7045[_0x10d8('0x13')]);if(isObject(_0xf8fa4e['isolateScope'])){_0x4c7045[_0x10d8('0xc7')]=_0xf8fa4e[_0x10d8('0x8')];}}_0x1e1bdb[_0x10d8('0x1e')](_0x4c7045);_0xb11c3f=_0x4c7045;}}}return _0xb11c3f;}function _0x32e203(_0x3d3b62){if(_0x13da23[_0x10d8('0x15')](_0x3d3b62)){for(var _0x5136e6,_0xc5d5d4=_0x3db768['get'](_0x3d3b62+_0x5e9297),_0x3c2134=0x0,_0x1ffd2e=_0xc5d5d4['length'];_0x3c2134<_0x1ffd2e;_0x3c2134++){_0x5136e6=_0xc5d5d4[_0x3c2134];if(_0x5136e6[_0x10d8('0xdb')]){return!![];}}}return![];}function _0x245303(_0x56753f,_0x405789){var _0x226a09=_0x405789[_0x10d8('0x67')],_0x2d9704=_0x56753f[_0x10d8('0x67')];forEach(_0x56753f,function(_0x420196,_0x5dfa8e){if(_0x5dfa8e['charAt'](0x0)!=='$'){if(_0x405789[_0x5dfa8e]&&_0x405789[_0x5dfa8e]!==_0x420196){if(_0x420196[_0x10d8('0x2d')]){_0x420196+=(_0x5dfa8e===_0x10d8('0xdc')?';':'\x20')+_0x405789[_0x5dfa8e];}else{_0x420196=_0x405789[_0x5dfa8e];}}_0x56753f[_0x10d8('0xdd')](_0x5dfa8e,_0x420196,!![],_0x226a09[_0x5dfa8e]);}});forEach(_0x405789,function(_0x524e01,_0x13f878){if(!_0x56753f['hasOwnProperty'](_0x13f878)&&_0x13f878[_0x10d8('0x26')](0x0)!=='$'){_0x56753f[_0x13f878]=_0x524e01;if(_0x13f878!==_0x10d8('0xde')&&_0x13f878!=='style'){_0x2d9704[_0x13f878]=_0x226a09[_0x13f878];}}});}function _0x328c86(_0x132792,_0x31909a,_0x30a856,_0x29018d,_0x4591a9,_0x45315b,_0x102a14,_0x51b00e){var _0x709acf=[],_0x2d65c5,_0x1fbda8,_0x5d5ab8=_0x31909a[0x0],_0x44a8c3=_0x132792[_0x10d8('0xdf')](),_0x795d80=inherit(_0x44a8c3,{'templateUrl':null,'transclude':null,'replace':null,'$$originalDirective':_0x44a8c3}),_0x3887b5=isFunction(_0x44a8c3[_0x10d8('0x21')])?_0x44a8c3[_0x10d8('0x21')](_0x31909a,_0x30a856):_0x44a8c3[_0x10d8('0x21')],_0x4ed6e2=_0x44a8c3[_0x10d8('0xbf')];_0x31909a[_0x10d8('0xbd')]();_0x3c3fda(_0x3887b5)[_0x10d8('0xe0')](function(_0x45b4b6){var _0x3a1471,_0x11dc80,_0x2d2882,_0x23c9a7;_0x45b4b6=_0x4a381b(_0x45b4b6);if(_0x44a8c3[_0x10d8('0x77')]){if(jqLiteIsTextNode(_0x45b4b6)){_0x2d2882=[];}else{_0x2d2882=removeComments(_0x1a921d(_0x4ed6e2,trim(_0x45b4b6)));}_0x3a1471=_0x2d2882[0x0];if(_0x2d2882[_0x10d8('0x2d')]!==0x1||_0x3a1471[_0x10d8('0x97')]!==NODE_TYPE_ELEMENT){throw $compileMinErr(_0x10d8('0xc0'),'Template\x20for\x20directive\x20\x27{0}\x27\x20must\x20have\x20exactly\x20one\x20root\x20element.\x20{1}',_0x44a8c3[_0x10d8('0x13')],_0x3887b5);}_0x11dc80={'$attr':{}};_0x3cc15c(_0x29018d,_0x31909a,_0x3a1471);var _0x14cad0=_0x25e80f(_0x3a1471,[],_0x11dc80);if(isObject(_0x44a8c3[_0x10d8('0x6')])){_0x3fc4fd(_0x14cad0,!![]);}_0x132792=_0x14cad0[_0x10d8('0x7a')](_0x132792);_0x245303(_0x30a856,_0x11dc80);}else{_0x3a1471=_0x5d5ab8;_0x31909a[_0x10d8('0x8d')](_0x45b4b6);}_0x132792[_0x10d8('0xe1')](_0x795d80);_0x2d65c5=_0x1dbd21(_0x132792,_0x3a1471,_0x30a856,_0x4591a9,_0x31909a,_0x44a8c3,_0x45315b,_0x102a14,_0x51b00e);forEach(_0x29018d,function(_0x4a985c,_0x4a16aa){if(_0x4a985c===_0x3a1471){_0x29018d[_0x4a16aa]=_0x31909a[0x0];}});_0x1fbda8=_0x100a01(_0x31909a[0x0]['childNodes'],_0x4591a9);while(_0x709acf[_0x10d8('0x2d')]){var _0x8b4062=_0x709acf[_0x10d8('0xdf')](),_0x86922d=_0x709acf[_0x10d8('0xdf')](),_0x270a89=_0x709acf[_0x10d8('0xdf')](),_0x18489f=_0x709acf['shift'](),_0x742330=_0x31909a[0x0];if(_0x8b4062[_0x10d8('0xe2')])continue;if(_0x86922d!==_0x5d5ab8){var _0x7140dc=_0x86922d[_0x10d8('0xa6')];if(!(_0x51b00e['hasElementTranscludeDirective']&&_0x44a8c3[_0x10d8('0x77')])){_0x742330=jqLiteClone(_0x3a1471);}_0x3cc15c(_0x270a89,jqLite(_0x86922d),_0x742330);_0x315d3d(jqLite(_0x742330),_0x7140dc);}if(_0x2d65c5[_0x10d8('0x93')]){_0x23c9a7=_0x245a9c(_0x8b4062,_0x2d65c5[_0x10d8('0x24')],_0x18489f);}else{_0x23c9a7=_0x18489f;}_0x2d65c5(_0x1fbda8,_0x8b4062,_0x742330,_0x29018d,_0x23c9a7);}_0x709acf=null;})[_0x10d8('0xe3')](function(_0x295299){if(isError(_0x295299)){_0xddbdf2(_0x295299);}});return function delayedNodeLinkFn(_0x19bd90,_0x1169c7,_0x449350,_0x2145b0,_0xecb26f){var _0x419acc=_0xecb26f;if(_0x1169c7[_0x10d8('0xe2')])return;if(_0x709acf){_0x709acf[_0x10d8('0x1e')](_0x1169c7,_0x449350,_0x2145b0,_0x419acc);}else{if(_0x2d65c5[_0x10d8('0x93')]){_0x419acc=_0x245a9c(_0x1169c7,_0x2d65c5[_0x10d8('0x24')],_0xecb26f);}_0x2d65c5(_0x1fbda8,_0x1169c7,_0x449350,_0x2145b0,_0x419acc);}};}function _0x35d889(_0x5f5163,_0x4ae5b3){var _0x58af21=_0x4ae5b3[_0x10d8('0x1b')]-_0x5f5163['priority'];if(_0x58af21!==0x0)return _0x58af21;if(_0x5f5163[_0x10d8('0x13')]!==_0x4ae5b3[_0x10d8('0x13')])return _0x5f5163['name']<_0x4ae5b3[_0x10d8('0x13')]?-0x1:0x1;return _0x5f5163[_0x10d8('0xa9')]-_0x4ae5b3[_0x10d8('0xa9')];}function _0x15cbff(_0x31206b,_0xe59fc0,_0x316dbb,_0x99be27){function _0x499b78(_0xb105e9){return _0xb105e9?_0x10d8('0xe4')+_0xb105e9+')':'';}if(_0xe59fc0){throw $compileMinErr(_0x10d8('0xe5'),'Multiple\x20directives\x20[{0}{1},\x20{2}{3}]\x20asking\x20for\x20{4}\x20on:\x20{5}',_0xe59fc0[_0x10d8('0x13')],_0x499b78(_0xe59fc0[_0x10d8('0x1d')]),_0x316dbb['name'],_0x499b78(_0x316dbb['$$moduleName']),_0x31206b,startingTag(_0x99be27));}}function _0x1a6f4a(_0x1d93fd,_0x18c9bf){var _0x272ec7=_0x7174c5(_0x18c9bf,!![]);if(_0x272ec7){_0x1d93fd[_0x10d8('0x1e')]({'priority':0x0,'compile':function textInterpolateCompileFn(_0x3e3466){var _0x58bb32=_0x3e3466[_0x10d8('0xd5')](),_0xcd3218=!!_0x58bb32[_0x10d8('0x2d')];if(_0xcd3218)_0x43f700['$$addBindingClass'](_0x58bb32);return function textInterpolateLinkFn(_0x2c54fa,_0x212680){var _0x11012d=_0x212680[_0x10d8('0xd5')]();if(!_0xcd3218)_0x43f700[_0x10d8('0x7b')](_0x11012d);_0x43f700[_0x10d8('0x78')](_0x11012d,_0x272ec7[_0x10d8('0xe6')]);_0x2c54fa[_0x10d8('0xd0')](_0x272ec7,function interpolateFnWatchAction(_0x249257){_0x212680[0x0][_0x10d8('0x98')]=_0x249257;});};}});}}function _0x1a921d(_0x3a92f6,_0x29bf76){_0x3a92f6=lowercase(_0x3a92f6||_0x10d8('0x8d'));switch(_0x3a92f6){case _0x10d8('0x92'):case _0x10d8('0xe7'):var _0x441622=window[_0x10d8('0x59')]['createElement']('div');_0x441622['innerHTML']='<'+_0x3a92f6+'>'+_0x29bf76+'</'+_0x3a92f6+'>';return _0x441622[_0x10d8('0xbc')][0x0][_0x10d8('0xbc')];default:return _0x29bf76;}}function _0x3e8a40(_0xf7c03a,_0x3f32d7){if(_0x3f32d7===_0x10d8('0xe8')){return _0x55e88f[_0x10d8('0xe9')];}if(_0x3f32d7===_0x10d8('0xea')||_0x3f32d7===_0x10d8('0xeb')){if([_0x10d8('0x6c'),_0x10d8('0xec'),'audio',_0x10d8('0xed'),_0x10d8('0xee')][_0x10d8('0xda')](_0xf7c03a)===-0x1){return _0x55e88f[_0x10d8('0x44')];}return _0x55e88f[_0x10d8('0x3d')];}else if(_0x3f32d7==='xlinkHref'){if(_0xf7c03a===_0x10d8('0xef'))return _0x55e88f[_0x10d8('0x3d')];if(_0xf7c03a==='a')return _0x55e88f[_0x10d8('0xf0')];return _0x55e88f[_0x10d8('0x44')];}else if(_0xf7c03a===_0x10d8('0xf1')&&_0x3f32d7===_0x10d8('0xf2')||_0xf7c03a===_0x10d8('0xf3')&&_0x3f32d7==='href'||_0xf7c03a===_0x10d8('0x19')&&_0x3f32d7==='href'){return _0x55e88f[_0x10d8('0x44')];}else if(_0xf7c03a==='a'&&(_0x3f32d7===_0x10d8('0xf4')||_0x3f32d7===_0x10d8('0xf5'))){return _0x55e88f[_0x10d8('0xf0')];}}function _0x59cb6f(_0x1be9b2,_0x45abff){var _0x59c753=_0x45abff[_0x10d8('0x30')]();return _0x216e1b[_0x1be9b2+'|'+_0x59c753]||_0x216e1b['*|'+_0x59c753];}function _0x233166(_0x40ccfb){return _0x4856c1(_0x55e88f[_0x10d8('0xf6')](_0x40ccfb),_0x10d8('0xf7'));}function _0x6b4334(_0x38753a,_0x5e137f,_0x23bb6b,_0x34d6da){if(_0x262161[_0x10d8('0x62')](_0x34d6da)){throw $compileMinErr('nodomevents','Property\x20bindings\x20for\x20HTML\x20DOM\x20event\x20properties\x20are\x20disallowed');}var _0x423b91=nodeName_(_0x38753a);var _0x14bbe0=_0x59cb6f(_0x423b91,_0x34d6da);var _0x5b107f=identity;if(_0x34d6da===_0x10d8('0x5f')&&(_0x423b91===_0x10d8('0x6c')||_0x423b91===_0x10d8('0xed'))){_0x5b107f=_0x233166;}else if(_0x14bbe0){_0x5b107f=_0x55e88f['getTrusted']['bind'](_0x55e88f,_0x14bbe0);}_0x5e137f['push']({'priority':0x64,'compile':function ngPropCompileFn(_0x17da21,_0x2d735b){var _0x3d98fb=_0x5d41a4(_0x2d735b[_0x23bb6b]);var _0x4f62a7=_0x5d41a4(_0x2d735b[_0x23bb6b],function sceValueOf(_0x4dedd6){return _0x55e88f[_0x10d8('0xf6')](_0x4dedd6);});return{'pre':function ngPropPreLinkFn(_0x5eb0e0,_0x1f43b7){function _0x29b64d(){var _0x6ff1d8=_0x3d98fb(_0x5eb0e0);_0x1f43b7[0x0][_0x34d6da]=_0x5b107f(_0x6ff1d8);}_0x29b64d();_0x5eb0e0['$watch'](_0x4f62a7,_0x29b64d);}};}});}function _0x5b6bd6(_0x3beda0,_0x26270d,_0x3edb9a){_0x3beda0[_0x10d8('0x1e')](createEventDirective(_0x5d41a4,_0x578127,_0xddbdf2,_0x26270d,_0x3edb9a,![]));}function _0x379b28(_0x655aca,_0x1779cd,_0x2c648c,_0x1e34ff,_0x4519d9){var _0x3d62a6=nodeName_(_0x655aca);var _0x5bb1f6=_0x3e8a40(_0x3d62a6,_0x1e34ff);var _0x20a1ac=!_0x4519d9;var _0x4d9710=_0x57a1e2[_0x1e34ff]||_0x4519d9;var _0x3918f5=_0x7174c5(_0x2c648c,_0x20a1ac,_0x5bb1f6,_0x4d9710);if(!_0x3918f5)return;if(_0x1e34ff===_0x10d8('0xf8')&&_0x3d62a6===_0x10d8('0xf9')){throw $compileMinErr(_0x10d8('0xfa'),'Binding\x20to\x20the\x20\x27multiple\x27\x20attribute\x20is\x20not\x20supported.\x20Element:\x20{0}',startingTag(_0x655aca));}if(_0x262161[_0x10d8('0x62')](_0x1e34ff)){throw $compileMinErr('nodomevents',_0x10d8('0xfb'));}_0x1779cd['push']({'priority':0x64,'compile':function(){return{'pre':function attrInterpolatePreLinkFn(_0x2f2c6c,_0x52337a,_0x24cb29){var _0x27f244=_0x24cb29[_0x10d8('0x70')]||(_0x24cb29[_0x10d8('0x70')]=createMap());var _0x5b9d1a=_0x24cb29[_0x1e34ff];if(_0x5b9d1a!==_0x2c648c){_0x3918f5=_0x5b9d1a&&_0x7174c5(_0x5b9d1a,!![],_0x5bb1f6,_0x4d9710);_0x2c648c=_0x5b9d1a;}if(!_0x3918f5)return;_0x24cb29[_0x1e34ff]=_0x3918f5(_0x2f2c6c);(_0x27f244[_0x1e34ff]||(_0x27f244[_0x1e34ff]=[]))[_0x10d8('0xfc')]=!![];(_0x24cb29['$$observers']&&_0x24cb29[_0x10d8('0x70')][_0x1e34ff][_0x10d8('0xfd')]||_0x2f2c6c)[_0x10d8('0xd0')](_0x3918f5,function interpolateFnWatchAction(_0x5b9d1a,_0x5d57ac){if(_0x1e34ff===_0x10d8('0xde')&&_0x5b9d1a!==_0x5d57ac){_0x24cb29[_0x10d8('0xfe')](_0x5b9d1a,_0x5d57ac);}else{_0x24cb29['$set'](_0x1e34ff,_0x5b9d1a);}});}};}});}function _0x3cc15c(_0x5cf1db,_0x12ad8b,_0x3b5059){var _0x1bc13e=_0x12ad8b[0x0],_0x162341=_0x12ad8b[_0x10d8('0x2d')],_0x39d2d1=_0x1bc13e[_0x10d8('0x99')],_0x5c7224,_0x59b417;if(_0x5cf1db){for(_0x5c7224=0x0,_0x59b417=_0x5cf1db[_0x10d8('0x2d')];_0x5c7224<_0x59b417;_0x5c7224++){if(_0x5cf1db[_0x5c7224]===_0x1bc13e){_0x5cf1db[_0x5c7224++]=_0x3b5059;for(var _0x4f3ad5=_0x5c7224,_0x1560ab=_0x4f3ad5+_0x162341-0x1,_0x200624=_0x5cf1db[_0x10d8('0x2d')];_0x4f3ad5<_0x200624;_0x4f3ad5++,_0x1560ab++){if(_0x1560ab<_0x200624){_0x5cf1db[_0x4f3ad5]=_0x5cf1db[_0x1560ab];}else{delete _0x5cf1db[_0x4f3ad5];}}_0x5cf1db[_0x10d8('0x2d')]-=_0x162341-0x1;if(_0x5cf1db[_0x10d8('0xff')]===_0x1bc13e){_0x5cf1db[_0x10d8('0xff')]=_0x3b5059;}break;}}}if(_0x39d2d1){_0x39d2d1[_0x10d8('0x100')](_0x3b5059,_0x1bc13e);}var _0x1ea037=window['document'][_0x10d8('0xb9')]();for(_0x5c7224=0x0;_0x5c7224<_0x162341;_0x5c7224++){_0x1ea037['appendChild'](_0x12ad8b[_0x5c7224]);}if(jqLite['hasData'](_0x1bc13e)){jqLite['data'](_0x3b5059,jqLite[_0x10d8('0x80')](_0x1bc13e));jqLite(_0x1bc13e)[_0x10d8('0xa5')]('$destroy');}jqLite[_0x10d8('0x101')](_0x1ea037[_0x10d8('0x102')]('*'));for(_0x5c7224=0x1;_0x5c7224<_0x162341;_0x5c7224++){delete _0x12ad8b[_0x5c7224];}_0x12ad8b[0x0]=_0x3b5059;_0x12ad8b['length']=0x1;}function _0x34fb84(_0x573b25,_0x3d9ea5){return extend(function(){return _0x573b25['apply'](null,arguments);},_0x573b25,_0x3d9ea5);}function _0x5ed9ee(_0x39386f,_0x7b9398,_0x15aca9,_0x358fb1,_0x136038,_0x4d84d2){try{_0x39386f(_0x7b9398,_0x15aca9,_0x358fb1,_0x136038,_0x4d84d2);}catch(_0x3978c6){_0xddbdf2(_0x3978c6,startingTag(_0x15aca9));}}function _0x59b4ad(_0x304274,_0x36f3e7){if(_0x502aaf){throw $compileMinErr(_0x10d8('0x103'),_0x10d8('0x104'),_0x304274,_0x36f3e7);}}function _0x5230d2(_0x1f2bbe,_0x32f862,_0x4edd78,_0xc57a6a,_0xee54c9){var _0x4819ff=[];var _0x5100a9={};var _0x24c0ba;forEach(_0xc57a6a,function initializeBinding(_0x542a07,_0x3c48f3){var _0x46d5c8=_0x542a07[_0x10d8('0x105')],_0x43cd07=_0x542a07[_0x10d8('0x106')],_0x454ea2=_0x542a07['mode'],_0x3b5ec1,_0x18035f,_0x537083,_0x3663d1,_0x3a3a27;switch(_0x454ea2){case'@':if(!_0x43cd07&&!hasOwnProperty[_0x10d8('0x90')](_0x32f862,_0x46d5c8)){_0x59b4ad(_0x46d5c8,_0xee54c9[_0x10d8('0x13')]);_0x4edd78[_0x3c48f3]=_0x32f862[_0x46d5c8]=undefined;}_0x3a3a27=_0x32f862[_0x10d8('0x107')](_0x46d5c8,function(_0x515df7){if(isString(_0x515df7)||isBoolean(_0x515df7)){var _0x2bb564=_0x4edd78[_0x3c48f3];_0x11a51a(_0x3c48f3,_0x515df7,_0x2bb564);_0x4edd78[_0x3c48f3]=_0x515df7;}});_0x32f862[_0x10d8('0x70')][_0x46d5c8][_0x10d8('0xfd')]=_0x1f2bbe;_0x3b5ec1=_0x32f862[_0x46d5c8];if(isString(_0x3b5ec1)){_0x4edd78[_0x3c48f3]=_0x7174c5(_0x3b5ec1)(_0x1f2bbe);}else if(isBoolean(_0x3b5ec1)){_0x4edd78[_0x3c48f3]=_0x3b5ec1;}_0x5100a9[_0x3c48f3]=new SimpleChange(_UNINITIALIZED_VALUE,_0x4edd78[_0x3c48f3]);_0x4819ff['push'](_0x3a3a27);break;case'=':if(!hasOwnProperty[_0x10d8('0x90')](_0x32f862,_0x46d5c8)){if(_0x43cd07)break;_0x59b4ad(_0x46d5c8,_0xee54c9[_0x10d8('0x13')]);_0x32f862[_0x46d5c8]=undefined;}if(_0x43cd07&&!_0x32f862[_0x46d5c8])break;_0x18035f=_0x5d41a4(_0x32f862[_0x46d5c8]);if(_0x18035f[_0x10d8('0x108')]){_0x3663d1=equals;}else{_0x3663d1=simpleCompare;}_0x537083=_0x18035f[_0x10d8('0x109')]||function(){_0x3b5ec1=_0x4edd78[_0x3c48f3]=_0x18035f(_0x1f2bbe);throw $compileMinErr(_0x10d8('0x10a'),_0x10d8('0x10b'),_0x32f862[_0x46d5c8],_0x46d5c8,_0xee54c9[_0x10d8('0x13')]);};_0x3b5ec1=_0x4edd78[_0x3c48f3]=_0x18035f(_0x1f2bbe);var _0x2ca8ff=function _0x2ca8ff(_0x21980d){if(!_0x3663d1(_0x21980d,_0x4edd78[_0x3c48f3])){if(!_0x3663d1(_0x21980d,_0x3b5ec1)){_0x4edd78[_0x3c48f3]=_0x21980d;}else{_0x537083(_0x1f2bbe,_0x21980d=_0x4edd78[_0x3c48f3]);}}_0x3b5ec1=_0x21980d;return _0x3b5ec1;};_0x2ca8ff['$stateful']=!![];if(_0x542a07['collection']){_0x3a3a27=_0x1f2bbe[_0x10d8('0x10c')](_0x32f862[_0x46d5c8],_0x2ca8ff);}else{_0x3a3a27=_0x1f2bbe[_0x10d8('0xd0')](_0x5d41a4(_0x32f862[_0x46d5c8],_0x2ca8ff),null,_0x18035f[_0x10d8('0x108')]);}_0x4819ff[_0x10d8('0x1e')](_0x3a3a27);break;case'<':if(!hasOwnProperty[_0x10d8('0x90')](_0x32f862,_0x46d5c8)){if(_0x43cd07)break;_0x59b4ad(_0x46d5c8,_0xee54c9[_0x10d8('0x13')]);_0x32f862[_0x46d5c8]=undefined;}if(_0x43cd07&&!_0x32f862[_0x46d5c8])break;_0x18035f=_0x5d41a4(_0x32f862[_0x46d5c8]);var _0x35f993=_0x18035f[_0x10d8('0x108')];var _0x46057a=_0x4edd78[_0x3c48f3]=_0x18035f(_0x1f2bbe);_0x5100a9[_0x3c48f3]=new SimpleChange(_UNINITIALIZED_VALUE,_0x4edd78[_0x3c48f3]);_0x3a3a27=_0x1f2bbe[_0x542a07['collection']?_0x10d8('0x10c'):_0x10d8('0xd0')](_0x18035f,function parentValueWatchAction(_0x5c306f,_0x5713d4){if(_0x5713d4===_0x5c306f){if(_0x5713d4===_0x46057a||_0x35f993&&equals(_0x5713d4,_0x46057a)){return;}_0x5713d4=_0x46057a;}_0x11a51a(_0x3c48f3,_0x5c306f,_0x5713d4);_0x4edd78[_0x3c48f3]=_0x5c306f;});_0x4819ff['push'](_0x3a3a27);break;case'&':if(!_0x43cd07&&!hasOwnProperty[_0x10d8('0x90')](_0x32f862,_0x46d5c8)){_0x59b4ad(_0x46d5c8,_0xee54c9[_0x10d8('0x13')]);}_0x18035f=_0x32f862[_0x10d8('0x15')](_0x46d5c8)?_0x5d41a4(_0x32f862[_0x46d5c8]):noop;if(_0x18035f===noop&&_0x43cd07)break;_0x4edd78[_0x3c48f3]=function(_0x58b029){return _0x18035f(_0x1f2bbe,_0x58b029);};break;}});function _0x11a51a(_0x12391d,_0x1105c9,_0x3a94db){if(isFunction(_0x4edd78[_0x10d8('0xcc')])&&!simpleCompare(_0x1105c9,_0x3a94db)){if(!_0x471b05){_0x1f2bbe['$$postDigest'](_0xd1900d);_0x471b05=[];}if(!_0x24c0ba){_0x24c0ba={};_0x471b05[_0x10d8('0x1e')](_0x1865bf);}if(_0x24c0ba[_0x12391d]){_0x3a94db=_0x24c0ba[_0x12391d][_0x10d8('0x10d')];}_0x24c0ba[_0x12391d]=new SimpleChange(_0x3a94db,_0x1105c9);}}function _0x1865bf(){_0x4edd78[_0x10d8('0xcc')](_0x24c0ba);_0x24c0ba=undefined;}return{'initialChanges':_0x5100a9,'removeWatches':_0x4819ff[_0x10d8('0x2d')]&&function removeWatches(){for(var _0x1222e3=0x0,_0x3ef87c=_0x4819ff[_0x10d8('0x2d')];_0x1222e3<_0x3ef87c;++_0x1222e3){_0x4819ff[_0x1222e3]();}}};}}];}function SimpleChange(_0x387376,_0x3b59e6){this['previousValue']=_0x387376;this['currentValue']=_0x3b59e6;}SimpleChange[_0x10d8('0x68')][_0x10d8('0x10e')]=function(){return this[_0x10d8('0x10d')]===_UNINITIALIZED_VALUE;};var PREFIX_REGEXP=/^((?:x|data)[:\-_])/i;var SPECIAL_CHARS_REGEXP=/[:\-_]+(.)/g;function directiveNormalize(_0x1224e1){return _0x1224e1[_0x10d8('0x77')](PREFIX_REGEXP,'')[_0x10d8('0x77')](SPECIAL_CHARS_REGEXP,function(_0x5bf14e,_0x158b04,_0x5ce80b){return _0x5ce80b?_0x158b04[_0x10d8('0x9f')]():_0x158b04;});}function nodesetLinkingFn(_0xc22fa1,_0x869840,_0x2e5b1a,_0xdd0e0f){}function directiveLinkingFn(_0x262f4d,_0x3dac8d,_0x5d986a,_0x5c8b5a,_0x4243ed){}function tokenDifference(_0x1fc08a,_0x498255){var _0x1877a7='',_0x2c6d43=_0x1fc08a['split'](/\s+/),_0x2fd079=_0x498255[_0x10d8('0x63')](/\s+/);_0x1b3d3c:for(var _0x3289be=0x0;_0x3289be<_0x2c6d43[_0x10d8('0x2d')];_0x3289be++){var _0x541909=_0x2c6d43[_0x3289be];for(var _0xe6ba58=0x0;_0xe6ba58<_0x2fd079[_0x10d8('0x2d')];_0xe6ba58++){if(_0x541909===_0x2fd079[_0xe6ba58])continue _0x1b3d3c;}_0x1877a7+=(_0x1877a7['length']>0x0?'\x20':'')+_0x541909;}return _0x1877a7;}function removeComments(_0x20c647){_0x20c647=jqLite(_0x20c647);var _0x32ff89=_0x20c647[_0x10d8('0x2d')];if(_0x32ff89<=0x1){return _0x20c647;}while(_0x32ff89--){var _0x407b96=_0x20c647[_0x32ff89];if(_0x407b96[_0x10d8('0x97')]===NODE_TYPE_COMMENT||_0x407b96['nodeType']===NODE_TYPE_TEXT&&_0x407b96[_0x10d8('0x98')]['trim']()===''){splice['call'](_0x20c647,_0x32ff89,0x1);}}return _0x20c647;}