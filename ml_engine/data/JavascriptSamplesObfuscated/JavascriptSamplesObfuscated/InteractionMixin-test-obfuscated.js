var _0x355a=['runAfterInteractions','should\x20end\x20unfinished\x20interactions\x20in\x20componentWillUnmount','componentWillUnmount','mock','InteractionMixin','resetModules','InteractionManager','should\x20start\x20interactions','createInteractionHandle','toBeCalled','clearInteractionHandle','toBeCalledWith','should\x20schedule\x20tasks'];(function(_0x3445bc,_0xbd3b7){var _0x38695b=function(_0xe7975b){while(--_0xe7975b){_0x3445bc['push'](_0x3445bc['shift']());}};_0x38695b(++_0xbd3b7);}(_0x355a,0x1f1));var _0x4dc7=function(_0x2b6192,_0x593bdf){_0x2b6192=_0x2b6192-0x0;var _0x2b4401=_0x355a[_0x2b6192];return _0x2b4401;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';jest[_0x4dc7('0x0')]('InteractionManager');describe(_0x4dc7('0x1'),()=>{let _0x501532;let _0x1dce77;let _0x3349c2;beforeEach(()=>{jest[_0x4dc7('0x2')]();_0x501532=require(_0x4dc7('0x3'));_0x1dce77=require(_0x4dc7('0x1'));_0x3349c2=Object['create'](_0x1dce77);});it(_0x4dc7('0x4'),()=>{_0x3349c2[_0x4dc7('0x5')]();expect(_0x501532['createInteractionHandle'])[_0x4dc7('0x6')]();});it('should\x20end\x20interactions',()=>{const _0x2d990b={};_0x3349c2[_0x4dc7('0x7')](_0x2d990b);expect(_0x501532[_0x4dc7('0x7')])[_0x4dc7('0x8')](_0x2d990b);});it(_0x4dc7('0x9'),()=>{const _0x69ac45=jest['fn']();_0x3349c2[_0x4dc7('0xa')](_0x69ac45);expect(_0x501532['runAfterInteractions'])[_0x4dc7('0x8')](_0x69ac45);});it(_0x4dc7('0xb'),()=>{const _0x35e243=_0x3349c2[_0x4dc7('0x5')]();_0x3349c2[_0x4dc7('0xc')]();expect(_0x501532[_0x4dc7('0x7')])[_0x4dc7('0x8')](_0x35e243);});});