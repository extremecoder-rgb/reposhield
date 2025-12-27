var _0x550c=['sort','can\x20generate\x20fixture\x20','generate','../__test_fixtures__/fixtures.js','../GeneratePropsH.js','GeneratePropsH','keys'];(function(_0x37c972,_0x456d02){var _0x26d3c2=function(_0x173926){while(--_0x173926){_0x37c972['push'](_0x37c972['shift']());}};_0x26d3c2(++_0x456d02);}(_0x550c,0x1e6));var _0x56ae=function(_0x34faca,_0x33f89){_0x34faca=_0x34faca-0x0;var _0x29c8db=_0x550c[_0x34faca];return _0x29c8db;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @flow strict-local
 * @format
 */
'use strict';const fixtures=require(_0x56ae('0x0'));const generator=require(_0x56ae('0x1'));describe(_0x56ae('0x2'),()=>{Object[_0x56ae('0x3')](fixtures)[_0x56ae('0x4')]()['forEach'](_0x3e3156=>{const _0x1e9e81=fixtures[_0x3e3156];it(_0x56ae('0x5')+_0x3e3156,()=>{expect(generator[_0x56ae('0x6')](_0x3e3156,_0x1e9e81))['toMatchSnapshot']();});});});