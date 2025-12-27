var _0x2ad9=['should\x20merge\x20from\x20an\x20empty\x20object','mergeIntoFast','toEqual'];(function(_0x2c4b2b,_0x428baa){var _0x1912c3=function(_0x8af43a){while(--_0x8af43a){_0x2c4b2b['push'](_0x2c4b2b['shift']());}};_0x1912c3(++_0x428baa);}(_0x2ad9,0x15a));var _0x246b=function(_0x173a1c,_0x227f8c){_0x173a1c=_0x173a1c-0x0;var _0x5f4186=_0x2ad9[_0x173a1c];return _0x5f4186;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';describe(_0x246b('0x0'),()=>{const _0x225bad=require('mergeIntoFast');it('should\x20merge\x20two\x20objects',()=>{const _0x237c83={'fontScale':0x2,'height':0x536};const _0x526b91={'scale':0x2,'width':0x2ee};_0x225bad(_0x237c83,_0x526b91);expect(_0x237c83)['toEqual']({'fontScale':0x2,'height':0x536,'scale':0x2,'width':0x2ee});});it('should\x20use\x20the\x20values\x20of\x20the\x20second\x20object\x20if\x20there\x20are\x20duplicate\x20keys',()=>{const _0x8b3d18={'fontScale':0x2};const _0x87fa6={'fontScale':0x3};_0x225bad(_0x8b3d18,_0x87fa6);expect(_0x8b3d18)[_0x246b('0x1')]({'fontScale':0x3});});it('should\x20merge\x20into\x20an\x20empty\x20object',()=>{const _0x1ea009={};const _0x329c09={'scale':0x2,'width':0x2ee};_0x225bad(_0x1ea009,_0x329c09);expect(_0x1ea009)[_0x246b('0x1')]({'scale':0x2,'width':0x2ee});});it(_0x246b('0x2'),()=>{const _0xd7942b={'scale':0x2,'width':0x2ee};const _0x1d6141={};_0x225bad(_0xd7942b,_0x1d6141);expect(_0xd7942b)[_0x246b('0x1')]({'scale':0x2,'width':0x2ee});});});