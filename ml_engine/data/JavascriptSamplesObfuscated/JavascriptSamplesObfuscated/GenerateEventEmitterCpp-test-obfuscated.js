var _0x49c3=['GenerateEventEmitterCpp','keys','sort','forEach','can\x20generate\x20fixture\x20','toMatchSnapshot','../__test_fixtures__/fixtures.js'];(function(_0x5906ff,_0x12f357){var _0x4d2ced=function(_0x50eb9a){while(--_0x50eb9a){_0x5906ff['push'](_0x5906ff['shift']());}};_0x4d2ced(++_0x12f357);}(_0x49c3,0x1e2));var _0x2641=function(_0x213478,_0x20ef70){_0x213478=_0x213478-0x0;var _0x440d32=_0x49c3[_0x213478];return _0x440d32;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @flow strict-local
 * @format
 */
'use strict';const fixtures=require(_0x2641('0x0'));const generator=require('../GenerateEventEmitterCpp.js');describe(_0x2641('0x1'),()=>{Object[_0x2641('0x2')](fixtures)[_0x2641('0x3')]()[_0x2641('0x4')](_0x520225=>{const _0x2d95dc=fixtures[_0x520225];it(_0x2641('0x5')+_0x520225,()=>{expect(generator['generate'](_0x520225,_0x2d95dc))[_0x2641('0x6')]();});});});