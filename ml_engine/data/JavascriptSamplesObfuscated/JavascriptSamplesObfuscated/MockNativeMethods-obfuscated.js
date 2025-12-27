var _0x1cba=['warn','Calling\x20.','()\x20in\x20the\x20test\x20renderer\x20environment\x20is\x20not\x20supported.\x20Instead,\x20mock\x20','out\x20your\x20components\x20that\x20use\x20findNodeHandle\x20with\x20replacements\x20that\x20','don\x27t\x20rely\x20on\x20the\x20native\x20environment.','measure','measureLayout','blur','exports'];(function(_0x27204a,_0x4906f1){var _0x504265=function(_0x5bf34a){while(--_0x5bf34a){_0x27204a['push'](_0x27204a['shift']());}};_0x504265(++_0x4906f1);}(_0x1cba,0x120));var _0x333d=function(_0x3fee59,_0x3e4d27){_0x3fee59=_0x3fee59-0x0;var _0x584248=_0x1cba[_0x3fee59];return _0x584248;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';const mockNativeFunction=_0x2e3d65=>{let _0x1c3161=![];return function(){if(_0x1c3161){return;}_0x1c3161=!![];console[_0x333d('0x0')](_0x333d('0x1')+_0x2e3d65+_0x333d('0x2')+_0x333d('0x3')+_0x333d('0x4'));};};const MockNativeMethods={'measure':mockNativeFunction(_0x333d('0x5')),'measureInWindow':mockNativeFunction('measureInWindow'),'measureLayout':mockNativeFunction(_0x333d('0x6')),'setNativeProps':mockNativeFunction('setNativeProps'),'focus':mockNativeFunction('focus'),'blur':mockNativeFunction(_0x333d('0x7'))};module[_0x333d('0x8')]=MockNativeMethods;