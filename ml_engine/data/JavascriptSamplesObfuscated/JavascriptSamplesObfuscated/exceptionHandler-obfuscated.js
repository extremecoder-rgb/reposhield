var _0x50cb=['apply','error'];(function(_0x40ea52,_0x18c765){var _0x2926fd=function(_0x7f3db1){while(--_0x7f3db1){_0x40ea52['push'](_0x40ea52['shift']());}};_0x2926fd(++_0x18c765);}(_0x50cb,0x99));var _0x5298=function(_0x3a707a,_0x51994f){_0x3a707a=_0x3a707a-0x0;var _0x32ad70=_0x50cb[_0x3a707a];return _0x32ad70;};'use strict';/**
 * @ngdoc service
 * @name $exceptionHandler
 * @requires ng.$log
 * @this
 *
 * @description
 * Any uncaught exception in AngularJS expressions is delegated to this service.
 * The default implementation simply delegates to `$log.error` which logs it into
 * the browser console.
 *
 * In unit tests, if `angular-mocks.js` is loaded, this service is overridden by
 * {@link ngMock.$exceptionHandler mock $exceptionHandler} which aids in testing.
 *
 * ## Example:
 *
 * The example below will overwrite the default `$exceptionHandler` in order to (a) log uncaught
 * errors to the backend for later inspection by the developers and (b) to use `$log.warn()` instead
 * of `$log.error()`.
 *
 * ```js
 *   angular.
 *     module('exceptionOverwrite', []).
 *     factory('$exceptionHandler', ['$log', 'logErrorsToBackend', function($log, logErrorsToBackend) {
 *       return function myExceptionHandler(exception, cause) {
 *         logErrorsToBackend(exception, cause);
 *         $log.warn(exception, cause);
 *       };
 *     }]);
 * ```
 *
 * <hr />
 * Note, that code executed in event-listeners (even those registered using jqLite's `on`/`bind`
 * methods) does not delegate exceptions to the {@link ng.$exceptionHandler $exceptionHandler}
 * (unless executed during a digest).
 *
 * If you wish, you can manually delegate exceptions, e.g.
 * `try { ... } catch(e) { $exceptionHandler(e); }`
 *
 * @param {Error} exception Exception associated with the error.
 * @param {string=} cause Optional information about the context in which
 *       the error was thrown.
 *
 */function $ExceptionHandlerProvider(){this['$get']=['$log',function(_0x2cc43d){return function(_0x201d54,_0x5662cc){_0x2cc43d[_0x5298('0x0')][_0x5298('0x1')](_0x2cc43d,arguments);};}];}