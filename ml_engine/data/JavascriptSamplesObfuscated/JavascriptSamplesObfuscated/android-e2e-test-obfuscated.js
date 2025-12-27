var _0x228c=['finally','//android.widget.TextView[starts-with(@text,\x20\x22Welcome\x20to\x20React\x20Native!\x22)]','//android.widget.TextView[starts-with(@text,\x20\x22Toggle\x20Inspector\x22)]','path','env','APPIUM_DEBUG_INTERVAL','Android\x20Test\x20App','timeout','promiseChainRemote','localhost','cyan','command','log','\x20>\x20','yellow','grey','http','magenta','source','Android','resolve','init','setImplicitWaitTimeout','//android.widget.Button[@text=\x22Reload\x20JS\x22]','click','sleep','quit','readFileSync','App.js','utf-8','waitForElementByXPath','then','Welcome\x20to\x20React\x20Native!','Welcome\x20to\x20React\x20Native!\x20Reloaded','pressDeviceKey','//android.widget.TextView[starts-with(@text,\x20\x22Welcome\x20to\x20React\x20Native!\x20Reloaded\x22)]'];(function(_0x4617de,_0x558ba0){var _0x570e68=function(_0x32ca61){while(--_0x32ca61){_0x4617de['push'](_0x4617de['shift']());}};_0x570e68(++_0x558ba0);}(_0x228c,0x18f));var _0x13a8=function(_0x5eb4a4,_0x2785c8){_0x5eb4a4=_0x5eb4a4-0x0;var _0x51540b=_0x228c[_0x5eb4a4];return _0x51540b;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Used in run-ci-e2e-test.js and executed in Circle CI.
 * E2e test that verifies that init app can be installed, compiled, started and Hot Module reloading and Chrome debugging work.
 * For other examples of appium refer to: https://github.com/appium/sample-code/tree/master/sample-code/examples/node and
 * https://www.npmjs.com/package/wd-android
 *
 *
 * To set up:
 * - npm install --save-dev appium@1.11.1 mocha@2.4.5 wd@1.11.1 colors@1.0.3 pretty-data2@0.40.1
 * - cp <this file> <to app installation path>
 * - keytool -genkey -v -keystore android/app/debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Android Debug,O=Android,C=US"
 *
 * To run this test:
 * - npm start
 * - node node_modules/.bin/appium
 * - (cd android && ./gradlew :app:copyDownloadableDepsToLibs)
 * - react-native run-android
 * - node ../node_modules/.bin/_mocha ../android-e2e-test.js
 *
 * @format
 */
/* eslint-env mocha */
'use strict';const wd=require('wd');const path=require(_0x13a8('0x0'));const fs=require('fs');const pd=require('pretty-data2')['pd'];require('colors');const appiumDebugInterval=process[_0x13a8('0x1')][_0x13a8('0x2')];describe(_0x13a8('0x3'),function(){this[_0x13a8('0x4')](0x927c0);let _0x4027dc;let _0x1bf63b;before(function(){_0x4027dc=wd[_0x13a8('0x5')]({'host':_0x13a8('0x6'),'port':0x1273});_0x4027dc['on']('status',function(_0x3d941b){console['log'](_0x3d941b[_0x13a8('0x7')]);});_0x4027dc['on'](_0x13a8('0x8'),function(_0x17b874,_0x3ecbd0,_0x2d9bca){if(_0x3ecbd0==='source()'&&_0x2d9bca){console[_0x13a8('0x9')](_0x13a8('0xa')+_0x17b874[_0x13a8('0xb')],'Screen\x20contents'['grey'],'\x0a',pd['xml'](_0x2d9bca)[_0x13a8('0xb')]);}else{console[_0x13a8('0x9')](_0x13a8('0xa')+_0x17b874['yellow'],_0x3ecbd0[_0x13a8('0xc')],_0x2d9bca||'');}});_0x4027dc['on'](_0x13a8('0xd'),function(_0xde6008,_0xaad6fd,_0x468c3a){console[_0x13a8('0x9')](_0x13a8('0xa')+_0xde6008[_0x13a8('0xe')],_0xaad6fd,(_0x468c3a||'')['grey']);});if(appiumDebugInterval){_0x1bf63b=setInterval(()=>{_0x4027dc[_0x13a8('0xf')]();},appiumDebugInterval);}const _0x31467b={'platformName':_0x13a8('0x10'),'deviceName':'Android\x20Emulator','app':path[_0x13a8('0x11')]('android/app/build/outputs/apk/debug/app-debug.apk')};return _0x4027dc[_0x13a8('0x12')](_0x31467b)[_0x13a8('0x13')](0x1388)['waitForElementByXPath'](_0x13a8('0x14'))['then'](_0x20940b=>{_0x20940b[_0x13a8('0x15')]();_0x4027dc[_0x13a8('0x16')](0x7d0);},_0x4f556d=>{});});after(function(){if(_0x1bf63b){clearInterval(_0x1bf63b);}return _0x4027dc[_0x13a8('0x17')]();});it('should\x20display\x20new\x20content\x20after\x20a\x20refresh',function(){const _0x78a2d7=fs[_0x13a8('0x18')](_0x13a8('0x19'),_0x13a8('0x1a'));let _0x31e7d5;return _0x4027dc[_0x13a8('0x1b')]('//android.widget.TextView[starts-with(@text,\x20\x22Welcome\x20to\x20React\x20Native!\x22)]')[_0x13a8('0x1c')](()=>{fs['writeFileSync'](_0x13a8('0x19'),_0x78a2d7['replace'](_0x13a8('0x1d'),_0x13a8('0x1e')),'utf-8');})['sleep'](0x3e8)[_0x13a8('0x1f')](0x2e)[_0x13a8('0x1f')](0x2e)['sleep'](0x7d0)['waitForElementByXPath'](_0x13a8('0x20'))[_0x13a8('0x21')](()=>{clearInterval(_0x31e7d5);fs['writeFileSync'](_0x13a8('0x19'),_0x78a2d7,'utf-8');_0x4027dc[_0x13a8('0x1f')](0x2e)[_0x13a8('0x1f')](0x2e)[_0x13a8('0x16')](0x7d0);});});it('should\x20have\x20the\x20menu\x20available',function(){return _0x4027dc[_0x13a8('0x1b')](_0x13a8('0x22'))['pressDeviceKey'](0x52)[_0x13a8('0x1b')](_0x13a8('0x23'));});});