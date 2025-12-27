var _0x165d=['Can\x27t\x20find\x20fixture\x20with\x20name\x20','writeFileSync','stringify','../src/generators/__test_fixtures__/fixtures.js','argv','slice','length'];(function(_0x257da8,_0x1c6609){var _0x189a3a=function(_0x32041f){while(--_0x32041f){_0x257da8['push'](_0x257da8['shift']());}};_0x189a3a(++_0x1c6609);}(_0x165d,0x168));var _0x253d=function(_0x4269cd,_0x3abdd4){_0x4269cd=_0x4269cd-0x0;var _0x36d077=_0x165d[_0x4269cd];return _0x36d077;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
'use strict';const fs=require('fs');const fixtures=require(_0x253d('0x0'));const args=process[_0x253d('0x1')][_0x253d('0x2')](0x2);if(args[_0x253d('0x3')]!==0x2){throw new Error('Expected\x20to\x20receive\x20the\x20fixture\x20name\x20and\x20output\x20directory\x20as\x20the\x20only\x20arg');}const fixtureName=args[0x0];const outputPath=args[0x1];const fixture=fixtures[fixtureName];if(fixture==null){throw new Error(_0x253d('0x4')+fixtureName);}fs[_0x253d('0x5')](outputPath,JSON[_0x253d('0x6')](fixture,null,0x2));