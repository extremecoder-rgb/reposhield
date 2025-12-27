var _0x444f=['exports','EventEmitter','RCTDeviceEventEmitter'];(function(_0x49bff7,_0x6955f4){var _0x16c98f=function(_0x4d5161){while(--_0x4d5161){_0x49bff7['push'](_0x49bff7['shift']());}};_0x16c98f(++_0x6955f4);}(_0x444f,0x1e4));var _0x3248=function(_0x24da03,_0x30205b){_0x24da03=_0x24da03-0x0;var _0x14a760=_0x444f[_0x24da03];return _0x14a760;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
'use strict';const EventEmitter=require(_0x3248('0x0'));const RCTDeviceEventEmitter=require(_0x3248('0x1'));class NativeEventEmitter extends EventEmitter{constructor(){super(RCTDeviceEventEmitter['sharedSubscriber']);}}module[_0x3248('0x2')]=NativeEventEmitter;