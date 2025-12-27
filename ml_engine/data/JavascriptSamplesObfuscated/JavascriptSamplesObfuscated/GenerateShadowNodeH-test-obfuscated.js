var _0x43b8=['../__test_fixtures__/fixtures.js','GenerateShadowNodeH','keys','sort','can\x20generate\x20fixture\x20','generate','toMatchSnapshot'];(function(_0x2d7def,_0x5005fa){var _0x2fd9ce=function(_0x2fca66){while(--_0x2fca66){_0x2d7def['push'](_0x2d7def['shift']());}};_0x2fd9ce(++_0x5005fa);}(_0x43b8,0x165));var _0x3e67=function(_0x44052b,_0x4212a9){_0x44052b=_0x44052b-0x0;var _0x3d67ed=_0x43b8[_0x44052b];return _0x3d67ed;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @flow strict-local
 * @format
 */
'use strict';const fixtures=require(_0x3e67('0x0'));const generator=require('../GenerateShadowNodeH.js');describe(_0x3e67('0x1'),()=>{Object[_0x3e67('0x2')](fixtures)[_0x3e67('0x3')]()['forEach'](_0x306592=>{const _0x364e1b=fixtures[_0x306592];it(_0x3e67('0x4')+_0x306592,()=>{expect(generator[_0x3e67('0x5')](_0x306592,_0x364e1b))[_0x3e67('0x6')]();});});});