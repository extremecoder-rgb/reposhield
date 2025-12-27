var _0x2717=['hooks','htmlWebpackPlugin','getHooks','beforeEmit','tap','InterpolateHtmlPlugin','forEach','html','replace','escape-string-regexp','replacements','apply'];(function(_0x6a8013,_0x7a70a2){var _0x3a8c2d=function(_0x41d6b7){while(--_0x41d6b7){_0x6a8013['push'](_0x6a8013['shift']());}};_0x3a8c2d(++_0x7a70a2);}(_0x2717,0x111));var _0x27b2=function(_0xaefd3d,_0xa66ddf){_0xaefd3d=_0xaefd3d-0x0;var _0x1fa012=_0x2717[_0xaefd3d];return _0x1fa012;};/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This Webpack plugin lets us interpolate custom variables into `index.html`.
// Usage: `new InterpolateHtmlPlugin(HtmlWebpackPlugin, { 'MY_VARIABLE': 42 })`
// Then, you can use %MY_VARIABLE% in your `index.html`.
// It works in tandem with HtmlWebpackPlugin.
// Learn more about creating plugins like this:
// https://github.com/ampedandwired/html-webpack-plugin#events
'use strict';const escapeStringRegexp=require(_0x27b2('0x0'));class InterpolateHtmlPlugin{constructor(_0x5ec4b0,_0x544087){this['htmlWebpackPlugin']=_0x5ec4b0;this[_0x27b2('0x1')]=_0x544087;}[_0x27b2('0x2')](_0x3cce04){_0x3cce04[_0x27b2('0x3')]['compilation']['tap']('InterpolateHtmlPlugin',_0x5d3d8b=>{this[_0x27b2('0x4')][_0x27b2('0x5')](_0x5d3d8b)[_0x27b2('0x6')][_0x27b2('0x7')](_0x27b2('0x8'),_0x19a11f=>{Object['keys'](this[_0x27b2('0x1')])[_0x27b2('0x9')](_0x25acae=>{const _0x29966e=this[_0x27b2('0x1')][_0x25acae];_0x19a11f[_0x27b2('0xa')]=_0x19a11f[_0x27b2('0xa')][_0x27b2('0xb')](new RegExp('%'+escapeStringRegexp(_0x25acae)+'%','g'),_0x29966e);});});});}}module['exports']=InterpolateHtmlPlugin;