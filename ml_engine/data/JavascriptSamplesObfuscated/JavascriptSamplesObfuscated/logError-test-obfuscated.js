var _0x23cb=['toContain','logError','logs\x20error\x20messages\x20to\x20the\x20console','error','apply','This\x20is\x20a\x20log\x20message','toHaveBeenCalledWith','logs\x20error\x20messages\x20with\x20multiple\x20arguments\x20to\x20the\x20console','log','message','This\x20is\x20a','logs\x20errors\x20to\x20the\x20console','The\x20error\x20message','mock','calls'];(function(_0x526d27,_0x4d4573){var _0x2d3135=function(_0x726a01){while(--_0x726a01){_0x526d27['push'](_0x526d27['shift']());}};_0x2d3135(++_0x4d4573);}(_0x23cb,0x1a5));var _0x7b2a=function(_0x53392c,_0x58c29c){_0x53392c=_0x53392c-0x0;var _0x39a72c=_0x23cb[_0x53392c];return _0x39a72c;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';describe(_0x7b2a('0x0'),()=>{const _0x12e5a3=require(_0x7b2a('0x0'));it(_0x7b2a('0x1'),()=>{console[_0x7b2a('0x2')][_0x7b2a('0x3')]=jest['fn']();_0x12e5a3(_0x7b2a('0x4'));expect(console['error'][_0x7b2a('0x3')])[_0x7b2a('0x5')](console,[_0x7b2a('0x4')]);});it(_0x7b2a('0x6'),()=>{console['error']['apply']=jest['fn']();const _0x7ce304=_0x7b2a('0x7');_0x12e5a3('This\x20is\x20a',_0x7ce304,_0x7b2a('0x8'));expect(console['error'][_0x7b2a('0x3')])[_0x7b2a('0x5')](console,[_0x7b2a('0x9'),_0x7b2a('0x7'),_0x7b2a('0x8')]);});it(_0x7b2a('0xa'),()=>{console['error']=jest['fn']();_0x12e5a3(new Error(_0x7b2a('0xb')));expect(console[_0x7b2a('0x2')][_0x7b2a('0xc')][_0x7b2a('0xd')][0x0][0x0])[_0x7b2a('0xe')]('Error:\x20\x22The\x20error\x20message\x22.\x20\x20Stack:');});});