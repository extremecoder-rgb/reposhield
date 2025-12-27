var _0x55a6=['setUpGeolocation','setUpSegmentFetcher','GlobalPerformanceLogger','markPoint','initializeCore_start','currentTimestamp','initializeCore_end','now','setUpSystrace','setUpTimers','setUpXHR','setUpAlert'];(function(_0x2c4808,_0x553614){var _0x420d9d=function(_0x335676){while(--_0x335676){_0x2c4808['push'](_0x2c4808['shift']());}};_0x420d9d(++_0x553614);}(_0x55a6,0xdf));var _0x2f48=function(_0x3b685b,_0x3cbf31){_0x3b685b=_0x3b685b-0x0;var _0x3189a2=_0x55a6[_0x3b685b];return _0x3189a2;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
/* globals window: true */
/**
 * Sets up global variables typical in most JavaScript environments.
 *
 *   1. Global timers (via `setTimeout` etc).
 *   2. Global console object.
 *   3. Hooks for printing stack traces with source maps.
 *
 * Leaves enough room in the environment for implementing your own:
 *
 *   1. Require system.
 *   2. Bridged modules.
 *
 */
'use strict';const start=Date[_0x2f48('0x0')]();require('setUpGlobals');require('polyfillES6Collections');require(_0x2f48('0x1'));require('setUpErrorHandling');require('checkNativeVersion');require('polyfillPromise');require('setUpRegeneratorRuntime');require(_0x2f48('0x2'));require(_0x2f48('0x3'));require(_0x2f48('0x4'));require(_0x2f48('0x5'));require('setUpBatchedBridge');require(_0x2f48('0x6'));if(__DEV__){require('setUpDeveloperTools');}const GlobalPerformanceLogger=require(_0x2f48('0x7'));GlobalPerformanceLogger[_0x2f48('0x8')](_0x2f48('0x9'),GlobalPerformanceLogger[_0x2f48('0xa')]()-(Date[_0x2f48('0x0')]()-start));GlobalPerformanceLogger[_0x2f48('0x8')](_0x2f48('0xb'));