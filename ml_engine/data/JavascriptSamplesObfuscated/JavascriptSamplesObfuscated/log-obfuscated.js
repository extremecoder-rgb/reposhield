var _0x1b55=['userAgent','info','warn','debug','apply','stack','indexOf','message','Error:\x20','sourceURL','line','push','prototype','call','debugEnabled','$get','$window','test','navigator'];(function(_0x4bd822,_0x2bd6f7){var _0xb4bdb3=function(_0x1d68f6){while(--_0x1d68f6){_0x4bd822['push'](_0x4bd822['shift']());}};_0xb4bdb3(++_0x2bd6f7);}(_0x1b55,0x151));var _0x765c=function(_0x3a5daa,_0x49da2a){_0x3a5daa=_0x3a5daa-0x0;var _0x320c04=_0x1b55[_0x3a5daa];return _0x320c04;};'use strict';/**
 * @ngdoc service
 * @name $log
 * @requires $window
 *
 * @description
 * Simple service for logging. Default implementation safely writes the message
 * into the browser's console (if present).
 *
 * The main purpose of this service is to simplify debugging and troubleshooting.
 *
 * To reveal the location of the calls to `$log` in the JavaScript console,
 * you can "blackbox" the AngularJS source in your browser:
 *
 * [Mozilla description of blackboxing](https://developer.mozilla.org/en-US/docs/Tools/Debugger/How_to/Black_box_a_source).
 * [Chrome description of blackboxing](https://developer.chrome.com/devtools/docs/blackboxing).
 *
 * Note: Not all browsers support blackboxing.
 *
 * The default is to log `debug` messages. You can use
 * {@link ng.$logProvider ng.$logProvider#debugEnabled} to change this.
 *
 * @example
   <example module="logExample" name="log-service">
     <file name="script.js">
       angular.module('logExample', [])
         .controller('LogController', ['$scope', '$log', function($scope, $log) {
           $scope.$log = $log;
           $scope.message = 'Hello World!';
         }]);
     </file>
     <file name="index.html">
       <div ng-controller="LogController">
         <p>Reload this page with open console, enter text and hit the log button...</p>
         <label>Message:
         <input type="text" ng-model="message" /></label>
         <button ng-click="$log.log(message)">log</button>
         <button ng-click="$log.warn(message)">warn</button>
         <button ng-click="$log.info(message)">info</button>
         <button ng-click="$log.error(message)">error</button>
         <button ng-click="$log.debug(message)">debug</button>
       </div>
     </file>
   </example>
 */
             /**
 * @ngdoc provider
 * @name $logProvider
 * @this
 *
 * @description
 * Use the `$logProvider` to configure how the application logs messages
 */function $LogProvider(){var _0x57ede5=!![],_0x3f5a4d=this;this[_0x765c('0x0')]=function(_0x12684a){if(isDefined(_0x12684a)){_0x57ede5=_0x12684a;return this;}else{return _0x57ede5;}};this[_0x765c('0x1')]=[_0x765c('0x2'),function(_0x4c8406){var _0x52dded=msie||/\bEdge\//[_0x765c('0x3')](_0x4c8406['navigator']&&_0x4c8406[_0x765c('0x4')][_0x765c('0x5')]);return{'log':_0x42ae12('log'),'info':_0x42ae12(_0x765c('0x6')),'warn':_0x42ae12(_0x765c('0x7')),'error':_0x42ae12('error'),'debug':function(){var _0x503ac6=_0x42ae12(_0x765c('0x8'));return function(){if(_0x57ede5){_0x503ac6[_0x765c('0x9')](_0x3f5a4d,arguments);}};}()};function _0x1098c5(_0x2f84db){if(isError(_0x2f84db)){if(_0x2f84db[_0x765c('0xa')]&&_0x52dded){_0x2f84db=_0x2f84db['message']&&_0x2f84db[_0x765c('0xa')][_0x765c('0xb')](_0x2f84db[_0x765c('0xc')])===-0x1?_0x765c('0xd')+_0x2f84db[_0x765c('0xc')]+'\x0a'+_0x2f84db['stack']:_0x2f84db[_0x765c('0xa')];}else if(_0x2f84db['sourceURL']){_0x2f84db=_0x2f84db['message']+'\x0a'+_0x2f84db[_0x765c('0xe')]+':'+_0x2f84db[_0x765c('0xf')];}}return _0x2f84db;}function _0x42ae12(_0x487f1c){var _0x18e6e3=_0x4c8406['console']||{},_0x20840e=_0x18e6e3[_0x487f1c]||_0x18e6e3['log']||noop;return function(){var _0x18d821=[];forEach(arguments,function(_0x32932f){_0x18d821[_0x765c('0x10')](_0x1098c5(_0x32932f));});return Function[_0x765c('0x11')]['apply'][_0x765c('0x12')](_0x20840e,_0x18e6e3,_0x18d821);};}}];}