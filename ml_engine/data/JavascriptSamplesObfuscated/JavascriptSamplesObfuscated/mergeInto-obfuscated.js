var _0x4a42=['checkMergeObjectArg','checkMergeIntoObjectArg','hasOwnProperty','call','exports','mergeHelpers'];(function(_0x481313,_0x3790ed){var _0x18fd2c=function(_0x47ef9f){while(--_0x47ef9f){_0x481313['push'](_0x481313['shift']());}};_0x18fd2c(++_0x3790ed);}(_0x4a42,0xb9));var _0x36c3=function(_0x17aabd,_0x39fb2e){_0x17aabd=_0x17aabd-0x0;var _0x46e5a9=_0x4a42[_0x17aabd];return _0x46e5a9;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var mergeHelpers=require(_0x36c3('0x0'));var checkMergeObjectArg=mergeHelpers[_0x36c3('0x1')];var checkMergeIntoObjectArg=mergeHelpers[_0x36c3('0x2')];function mergeInto(_0x4f4954,_0x466d30){checkMergeIntoObjectArg(_0x4f4954);if(_0x466d30!=null){checkMergeObjectArg(_0x466d30);for(var _0x2f2d04 in _0x466d30){if(!Object['prototype'][_0x36c3('0x3')][_0x36c3('0x4')](_0x466d30,_0x2f2d04)){continue;}_0x4f4954[_0x2f2d04]=_0x466d30[_0x2f2d04];}}}module[_0x36c3('0x5')]=mergeInto;