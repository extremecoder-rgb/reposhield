var _0x1303=['length','exports'];(function(_0x4666fe,_0x2da9c3){var _0x1bbf89=function(_0x352b0b){while(--_0x352b0b){_0x4666fe['push'](_0x4666fe['shift']());}};_0x1bbf89(++_0x2da9c3);}(_0x1303,0x14c));var _0x4cb2=function(_0x5e2817,_0x58d7dc){_0x5e2817=_0x5e2817-0x0;var _0x58b1c3=_0x1303[_0x5e2817];return _0x58b1c3;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// Jest fatals for the following statement (minimal repro case)
//
//   exports.something = Symbol;
//
// Until it is fixed, mocking the entire node module makes the
// problem go away.
'use strict';function EventTarget(){if(arguments[_0x4cb2('0x0')]>0x0){return EventTarget;}}module[_0x4cb2('0x1')]=EventTarget;