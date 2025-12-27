var _0x380f=['log','error','registerCallableModule','LoggingTestModule','exports','BatchedBridge','fbjs/lib/warning','invariant'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x380f,0x6d));var _0xd98c=function(_0x5801cd,_0x42e2ad){_0x5801cd=_0x5801cd-0x0;var _0x203494=_0x380f[_0x5801cd];return _0x203494;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';const BatchedBridge=require(_0xd98c('0x0'));const warning=require(_0xd98c('0x1'));const invariant=require(_0xd98c('0x2'));const LoggingTestModule={'logToConsole':function(_0x202dbf){console[_0xd98c('0x3')](_0x202dbf);},'logToConsoleAfterWait':function(_0x216902,_0x3145bf){setTimeout(function(){console[_0xd98c('0x3')](_0x216902);},_0x3145bf);},'warning':function(_0xea31aa){warning(![],_0xea31aa);},'invariant':function(_0x416d50){invariant(![],_0x416d50);},'logErrorToConsole':function(_0xe7d5a0){console[_0xd98c('0x4')](_0xe7d5a0);},'throwError':function(_0x48b903){throw new Error(_0x48b903);}};BatchedBridge[_0xd98c('0x5')](_0xd98c('0x6'),LoggingTestModule);module[_0xd98c('0x7')]=LoggingTestModule;