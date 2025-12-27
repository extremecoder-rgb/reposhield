var _0x22b8=['Failed\x20to\x20dump\x20react\x20tree:\x20','React\x20tree\x20dumps\x20have\x20been\x20temporarily\x20disabled\x20while\x20React\x20is\x20','upgraded\x20to\x20Fiber.'];(function(_0x40f17f,_0x53e585){var _0x3b3208=function(_0x4aa583){while(--_0x4aa583){_0x40f17f['push'](_0x40f17f['shift']());}};_0x3b3208(++_0x53e585);}(_0x22b8,0x19b));var _0x4b71=function(_0x3ed7eb,_0x4e1947){_0x3ed7eb=_0x3ed7eb-0x0;var _0x395a39=_0x22b8[_0x3ed7eb];return _0x395a39;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 */
'use strict';/*
const getReactData = require('getReactData');

const INDENTATION_SIZE = 2;
const MAX_DEPTH = 2;
const MAX_STRING_LENGTH = 50;
*/
             /**
 * Dump all React Native root views and their content. This function tries
 * it best to get the content but ultimately relies on implementation details
 * of React and will fail in future versions.
 */function dumpReactTree(){try{return getReactTree();}catch(_0x212be1){return _0x4b71('0x0')+_0x212be1;}}function getReactTree(){return _0x4b71('0x1')+_0x4b71('0x2');}module['exports']=dumpReactTree;