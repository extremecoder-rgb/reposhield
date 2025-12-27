var _0x4f36=['stringify','log','./combine-js-to-schema'];(function(_0x55d687,_0x1fe12d){var _0x4c9c20=function(_0x535059){while(--_0x535059){_0x55d687['push'](_0x55d687['shift']());}};_0x4c9c20(++_0x1fe12d);}(_0x4f36,0xc8));var _0x512d=function(_0x1932dd,_0x34f6fc){_0x1932dd=_0x1932dd-0x0;var _0x5b7199=_0x4f36[_0x1932dd];return _0x5b7199;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+react_native
 * @flow
 * @format
 */
'use strict';const combine=require(_0x512d('0x0'));const fs=require('fs');const [outfile,...fileList]=process['argv']['slice'](0x2);const formattedSchema=JSON[_0x512d('0x1')](combine(fileList),null,0x2);if(outfile!=null){fs['writeFileSync'](outfile,formattedSchema);}else{console[_0x512d('0x2')](formattedSchema);}