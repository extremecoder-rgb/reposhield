var _0x1c20=['../GenerateShadowNodeCpp.js','keys','forEach','../__test_fixtures__/fixtures.js'];(function(_0x33d1e7,_0x4d3b7b){var _0x4201f4=function(_0xb6e173){while(--_0xb6e173){_0x33d1e7['push'](_0x33d1e7['shift']());}};_0x4201f4(++_0x4d3b7b);}(_0x1c20,0xb7));var _0x35d0=function(_0x2699a9,_0x501e82){_0x2699a9=_0x2699a9-0x0;var _0x5b6c40=_0x1c20[_0x2699a9];return _0x5b6c40;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @flow strict-local
 * @format
 */
'use strict';const fixtures=require(_0x35d0('0x0'));const generator=require(_0x35d0('0x1'));describe('GenerateShadowNodeCpp',()=>{Object[_0x35d0('0x2')](fixtures)['sort']()[_0x35d0('0x3')](_0x3c38e6=>{const _0x368907=fixtures[_0x3c38e6];it('can\x20generate\x20fixture\x20'+_0x3c38e6,()=>{expect(generator['generate'](_0x3c38e6,_0x368907))['toMatchSnapshot']();});});});