var _0x1d1b=['FileReader','readAsText','target','result','toBe','should\x20read\x20blob\x20as\x20data\x20URL','onerror','data:text/plain;base64,NDI=','NativeModules','../__mocks__/FileReaderModule','Blob'];(function(_0x34906b,_0x18d721){var _0x165c1d=function(_0x161624){while(--_0x161624){_0x34906b['push'](_0x34906b['shift']());}};_0x165c1d(++_0x18d721);}(_0x1d1b,0x126));var _0x2b44=function(_0x2649e5,_0x5e6ae5){_0x2649e5=_0x2649e5-0x0;var _0x207532=_0x1d1b[_0x2649e5];return _0x207532;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';jest['unmock']('event-target-shim')['setMock'](_0x2b44('0x0'),{'BlobModule':require('../__mocks__/BlobModule'),'FileReaderModule':require(_0x2b44('0x1'))});const Blob=require(_0x2b44('0x2'));const FileReader=require(_0x2b44('0x3'));describe(_0x2b44('0x3'),function(){it('should\x20read\x20blob\x20as\x20text',async()=>{const _0x5bbab3=await new Promise((_0x83066d,_0x22aa99)=>{const _0x15caa8=new FileReader();_0x15caa8['onload']=_0x83066d;_0x15caa8['onerror']=_0x22aa99;_0x15caa8[_0x2b44('0x4')](new Blob());});expect(_0x5bbab3[_0x2b44('0x5')][_0x2b44('0x6')])[_0x2b44('0x7')]('');});it(_0x2b44('0x8'),async()=>{const _0xe7169c=await new Promise((_0x2cc948,_0x34d71c)=>{const _0x5f4347=new FileReader();_0x5f4347['onload']=_0x2cc948;_0x5f4347[_0x2b44('0x9')]=_0x34d71c;_0x5f4347['readAsDataURL'](new Blob());});expect(_0xe7169c[_0x2b44('0x5')][_0x2b44('0x6')])[_0x2b44('0x7')](_0x2b44('0xa'));});});