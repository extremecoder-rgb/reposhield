var _0x8c49=['Blob','BlobManager','should\x20create\x20blob\x20from\x20parts','createFromParts','toBeInstanceOf','toBe','NativeModules','../__mocks__/BlobModule'];(function(_0x32395e,_0x173c61){var _0x32755c=function(_0x5c6908){while(--_0x5c6908){_0x32395e['push'](_0x32395e['shift']());}};_0x32755c(++_0x173c61);}(_0x8c49,0x9e));var _0x46bc=function(_0x5aae5f,_0xf35b5c){_0x5aae5f=_0x5aae5f-0x0;var _0x24b8e5=_0x8c49[_0x5aae5f];return _0x24b8e5;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';jest['setMock'](_0x46bc('0x0'),{'BlobModule':require(_0x46bc('0x1'))});const Blob=require(_0x46bc('0x2'));const BlobManager=require(_0x46bc('0x3'));describe(_0x46bc('0x3'),function(){it(_0x46bc('0x4'),()=>{const _0x5600f4=BlobManager[_0x46bc('0x5')]([],{'type':'text/html'});expect(_0x5600f4)[_0x46bc('0x6')](Blob);expect(_0x5600f4['type'])[_0x46bc('0x7')]('text/html');});});