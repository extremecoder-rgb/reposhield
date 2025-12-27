var _0x488d=['capacity','MAX_VALUE','remove','key','info','get','templates','$get','$cacheFactory','iid','CacheId\x20\x27{0}\x27\x20is\x20already\x20taken!'];(function(_0x15a750,_0xcfc9b5){var _0x5471fc=function(_0x64ac32){while(--_0x64ac32){_0x15a750['push'](_0x15a750['shift']());}};_0x5471fc(++_0xcfc9b5);}(_0x488d,0xb7));var _0x1e9f=function(_0x33e6c7,_0x34f595){_0x33e6c7=_0x33e6c7-0x0;var _0x126e6f=_0x488d[_0x33e6c7];return _0x126e6f;};'use strict';/**
 * @ngdoc service
 * @name $cacheFactory
 * @this
 *
 * @description
 * Factory that constructs {@link $cacheFactory.Cache Cache} objects and gives access to
 * them.
 *
 * ```js
 *
 *  var cache = $cacheFactory('cacheId');
 *  expect($cacheFactory.get('cacheId')).toBe(cache);
 *  expect($cacheFactory.get('noSuchCacheId')).not.toBeDefined();
 *
 *  cache.put("key", "value");
 *  cache.put("another key", "another value");
 *
 *  // We've specified no options on creation
 *  expect(cache.info()).toEqual({id: 'cacheId', size: 2});
 *
 * ```
 *
 *
 * @param {string} cacheId Name or id of the newly created cache.
 * @param {object=} options Options object that specifies the cache behavior. Properties:
 *
 *   - `{number=}` `capacity` — turns the cache into LRU cache.
 *
 * @returns {object} Newly created cache object with the following set of methods:
 *
 * - `{object}` `info()` — Returns id, size, and options of cache.
 * - `{{*}}` `put({string} key, {*} value)` — Puts a new key-value pair into the cache and returns
 *   it.
 * - `{{*}}` `get({string} key)` — Returns cached value for `key` or undefined for cache miss.
 * - `{void}` `remove({string} key)` — Removes a key-value pair from the cache.
 * - `{void}` `removeAll()` — Removes all cached values.
 * - `{void}` `destroy()` — Removes references to this cache from $cacheFactory.
 *
 * @example
   <example module="cacheExampleApp" name="cache-factory">
     <file name="index.html">
       <div ng-controller="CacheController">
         <input ng-model="newCacheKey" placeholder="Key">
         <input ng-model="newCacheValue" placeholder="Value">
         <button ng-click="put(newCacheKey, newCacheValue)">Cache</button>

         <p ng-if="keys.length">Cached Values</p>
         <div ng-repeat="key in keys">
           <span ng-bind="key"></span>
           <span>: </span>
           <b ng-bind="cache.get(key)"></b>
         </div>

         <p>Cache Info</p>
         <div ng-repeat="(key, value) in cache.info()">
           <span ng-bind="key"></span>
           <span>: </span>
           <b ng-bind="value"></b>
         </div>
       </div>
     </file>
     <file name="script.js">
       angular.module('cacheExampleApp', []).
         controller('CacheController', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
           $scope.keys = [];
           $scope.cache = $cacheFactory('cacheId');
           $scope.put = function(key, value) {
             if (angular.isUndefined($scope.cache.get(key))) {
               $scope.keys.push(key);
             }
             $scope.cache.put(key, angular.isUndefined(value) ? null : value);
           };
         }]);
     </file>
     <file name="style.css">
       p {
         margin: 10px 0 3px;
       }
     </file>
   </example>
 */function $CacheFactoryProvider(){this[_0x1e9f('0x0')]=function(){var _0x53f9fb={};function _0x530985(_0x55a34c,_0x170ce3){if(_0x55a34c in _0x53f9fb){throw minErr(_0x1e9f('0x1'))(_0x1e9f('0x2'),_0x1e9f('0x3'),_0x55a34c);}var _0x55fc3d=0x0,_0x4214c5=extend({},_0x170ce3,{'id':_0x55a34c}),_0x4affde=createMap(),_0x496e5e=_0x170ce3&&_0x170ce3[_0x1e9f('0x4')]||Number[_0x1e9f('0x5')],_0x3d7824=createMap(),_0x3f1c4d=null,_0x336a14=null;return _0x53f9fb[_0x55a34c]={'put':function(_0x18253d,_0xbd73e4){if(isUndefined(_0xbd73e4))return;if(_0x496e5e<Number['MAX_VALUE']){var _0x4d8d51=_0x3d7824[_0x18253d]||(_0x3d7824[_0x18253d]={'key':_0x18253d});_0x446982(_0x4d8d51);}if(!(_0x18253d in _0x4affde))_0x55fc3d++;_0x4affde[_0x18253d]=_0xbd73e4;if(_0x55fc3d>_0x496e5e){this[_0x1e9f('0x6')](_0x336a14[_0x1e9f('0x7')]);}return _0xbd73e4;},'get':function(_0x3375d3){if(_0x496e5e<Number[_0x1e9f('0x5')]){var _0x150954=_0x3d7824[_0x3375d3];if(!_0x150954)return;_0x446982(_0x150954);}return _0x4affde[_0x3375d3];},'remove':function(_0x17c8e6){if(_0x496e5e<Number[_0x1e9f('0x5')]){var _0x582286=_0x3d7824[_0x17c8e6];if(!_0x582286)return;if(_0x582286===_0x3f1c4d)_0x3f1c4d=_0x582286['p'];if(_0x582286===_0x336a14)_0x336a14=_0x582286['n'];_0xdc02e(_0x582286['n'],_0x582286['p']);delete _0x3d7824[_0x17c8e6];}if(!(_0x17c8e6 in _0x4affde))return;delete _0x4affde[_0x17c8e6];_0x55fc3d--;},'removeAll':function(){_0x4affde=createMap();_0x55fc3d=0x0;_0x3d7824=createMap();_0x3f1c4d=_0x336a14=null;},'destroy':function(){_0x4affde=null;_0x4214c5=null;_0x3d7824=null;delete _0x53f9fb[_0x55a34c];},'info':function(){return extend({},_0x4214c5,{'size':_0x55fc3d});}};function _0x446982(_0x49d7ce){if(_0x49d7ce!==_0x3f1c4d){if(!_0x336a14){_0x336a14=_0x49d7ce;}else if(_0x336a14===_0x49d7ce){_0x336a14=_0x49d7ce['n'];}_0xdc02e(_0x49d7ce['n'],_0x49d7ce['p']);_0xdc02e(_0x49d7ce,_0x3f1c4d);_0x3f1c4d=_0x49d7ce;_0x3f1c4d['n']=null;}}function _0xdc02e(_0x8f7b03,_0x346f72){if(_0x8f7b03!==_0x346f72){if(_0x8f7b03)_0x8f7b03['p']=_0x346f72;if(_0x346f72)_0x346f72['n']=_0x8f7b03;}}}_0x530985[_0x1e9f('0x8')]=function(){var _0x1e66ea={};forEach(_0x53f9fb,function(_0x4c7635,_0x317931){_0x1e66ea[_0x317931]=_0x4c7635[_0x1e9f('0x8')]();});return _0x1e66ea;};_0x530985[_0x1e9f('0x9')]=function(_0x2675a3){return _0x53f9fb[_0x2675a3];};return _0x530985;};}function $TemplateCacheProvider(){this[_0x1e9f('0x0')]=['$cacheFactory',function(_0x157808){return _0x157808(_0x1e9f('0xa'));}];}