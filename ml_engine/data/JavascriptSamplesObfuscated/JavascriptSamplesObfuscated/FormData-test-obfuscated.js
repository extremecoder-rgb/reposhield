var _0x44c2=['form-data;\x20name=\x22null\x22','toMatchObject','should\x20return\x20blob','arbitrary/path','photo.jpg','form-data;\x20name=\x22photo\x22;\x20filename=\x22photo.jpg\x22','getParts','FormData','should\x20return\x20non\x20blob\x20null','append','null'];(function(_0xf67f9d,_0x58c714){var _0x13db4f=function(_0x246888){while(--_0x246888){_0xf67f9d['push'](_0xf67f9d['shift']());}};_0x13db4f(++_0x58c714);}(_0x44c2,0x193));var _0x266c=function(_0x128d22,_0x39d8c1){_0x128d22=_0x128d22-0x0;var _0x4a808c=_0x44c2[_0x128d22];return _0x4a808c;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';const FormData=require(_0x266c('0x0'));describe('FormData',function(){var _0x2dccce;beforeEach(()=>{_0x2dccce=new FormData();});afterEach(()=>{_0x2dccce=null;});it(_0x266c('0x1'),function(){_0x2dccce[_0x266c('0x2')](_0x266c('0x3'),null);const _0x251812={'string':_0x266c('0x3'),'headers':{'content-disposition':_0x266c('0x4')},'fieldName':'null'};expect(_0x2dccce['getParts']()[0x0])[_0x266c('0x5')](_0x251812);});it(_0x266c('0x6'),function(){_0x2dccce[_0x266c('0x2')]('photo',{'uri':_0x266c('0x7'),'type':'image/jpeg','name':_0x266c('0x8')});const _0x3bc60e={'uri':'arbitrary/path','type':'image/jpeg','name':_0x266c('0x8'),'headers':{'content-disposition':_0x266c('0x9'),'content-type':'image/jpeg'},'fieldName':'photo'};expect(_0x2dccce[_0x266c('0xa')]()[0x0])[_0x266c('0x5')](_0x3bc60e);});});