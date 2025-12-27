var _0x446d=['angular.callbacks.','$get','callbacks','data','$$counter','toString'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x446d,0x193));var _0x46be=function(_0x3a034e,_0x42782b){_0x3a034e=_0x3a034e-0x0;var _0x57a9e8=_0x446d[_0x3a034e];return _0x57a9e8;};'use strict';/**
 * @ngdoc service
 * @name $jsonpCallbacks
 * @requires $window
 * @description
 * This service handles the lifecycle of callbacks to handle JSONP requests.
 * Override this service if you wish to customise where the callbacks are stored and
 * how they vary compared to the requested url.
 */var $jsonpCallbacksProvider=function(){this[_0x46be('0x0')]=function(){var _0x3c4d5e=angular[_0x46be('0x1')];var _0x354d26={};function _0x42d880(_0x3caf3d){var _0x32fab8=function(_0x5bb3eb){_0x32fab8[_0x46be('0x2')]=_0x5bb3eb;_0x32fab8['called']=!![];};_0x32fab8['id']=_0x3caf3d;return _0x32fab8;}return{'createCallback':function(_0x5c8c3d){var _0x35a8b7='_'+(_0x3c4d5e[_0x46be('0x3')]++)[_0x46be('0x4')](0x24);var _0x5c27d5=_0x46be('0x5')+_0x35a8b7;var _0x56839f=_0x42d880(_0x35a8b7);_0x354d26[_0x5c27d5]=_0x3c4d5e[_0x35a8b7]=_0x56839f;return _0x5c27d5;},'wasCalled':function(_0x11c4cd){return _0x354d26[_0x11c4cd]['called'];},'getResponse':function(_0x5df83f){return _0x354d26[_0x5df83f]['data'];},'removeCallback':function(_0x234ab2){var _0x14538d=_0x354d26[_0x234ab2];delete _0x3c4d5e[_0x14538d['id']];delete _0x354d26[_0x234ab2];}};};};