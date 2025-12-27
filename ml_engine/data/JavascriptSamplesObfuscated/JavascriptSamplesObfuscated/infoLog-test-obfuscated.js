var _0x3b13=['logs\x20messages\x20with\x20multiple\x20arguments\x20to\x20the\x20console','This\x20is\x20a','infoLog','logs\x20messages\x20to\x20the\x20console','log','toHaveBeenCalledWith','This\x20is\x20a\x20log\x20message'];(function(_0x63e4e0,_0x5168ed){var _0x5a7184=function(_0xa98e2f){while(--_0xa98e2f){_0x63e4e0['push'](_0x63e4e0['shift']());}};_0x5a7184(++_0x5168ed);}(_0x3b13,0x136));var _0x2794=function(_0x331b0d,_0x5e8b5a){_0x331b0d=_0x331b0d-0x0;var _0x25cad0=_0x3b13[_0x331b0d];return _0x25cad0;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';describe(_0x2794('0x0'),()=>{const _0x7b288e=require(_0x2794('0x0'));it(_0x2794('0x1'),()=>{console[_0x2794('0x2')]=jest['fn']();_0x7b288e('This\x20is\x20a\x20log\x20message');expect(console['log'])[_0x2794('0x3')](_0x2794('0x4'));});it(_0x2794('0x5'),()=>{console[_0x2794('0x2')]=jest['fn']();const _0xd0e919=_0x2794('0x2');_0x7b288e(_0x2794('0x6'),_0xd0e919,'message');expect(console[_0x2794('0x2')])[_0x2794('0x3')](_0x2794('0x6'),_0x2794('0x2'),'message');});});