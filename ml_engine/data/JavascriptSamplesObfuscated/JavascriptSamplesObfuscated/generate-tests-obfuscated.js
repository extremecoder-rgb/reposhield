var _0x7e08=['join','readFileSync','utf-8','Can\x27t\x20parse\x20schema\x20to\x20JSON.\x20','generate','mkdirp','argv','slice','length','Expected\x20to\x20receive\x20path\x20to\x20schema,\x20library\x20name,\x20and\x20output\x20directory.\x20Received\x20'];(function(_0x904756,_0x2e27b1){var _0x5e9b6e=function(_0x195771){while(--_0x195771){_0x904756['push'](_0x904756['shift']());}};_0x5e9b6e(++_0x2e27b1);}(_0x7e08,0xcd));var _0x5691=function(_0x434cbe,_0x3e6030){_0x434cbe=_0x434cbe-0x0;var _0x12d8df=_0x7e08[_0x434cbe];return _0x12d8df;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
'use strict';const RNCodegen=require('../src/generators/RNCodegen.js');const fs=require('fs');const mkdirp=require(_0x5691('0x0'));const args=process[_0x5691('0x1')][_0x5691('0x2')](0x2);if(args[_0x5691('0x3')]!==0x3){throw new Error(_0x5691('0x4')+args[_0x5691('0x5')](',\x20'));}const schemaPath=args[0x0];const libraryName=args[0x1];const outputDirectory=args[0x2];const schemaText=fs[_0x5691('0x6')](schemaPath,_0x5691('0x7'));if(schemaText==null){throw new Error('Can\x27t\x20find\x20schema\x20at\x20'+schemaPath);}mkdirp['sync'](outputDirectory);let schema;try{schema=JSON['parse'](schemaText);}catch(_0x1a4e5a){throw new Error(_0x5691('0x8')+schemaPath);}RNCodegen[_0x5691('0x9')]({'libraryName':libraryName,'schema':schema,'outputDirectory':outputDirectory});