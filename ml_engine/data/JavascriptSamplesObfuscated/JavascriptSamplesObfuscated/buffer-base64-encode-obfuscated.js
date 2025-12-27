var _0x3e70=['fromCharCode','write','ascii','start','toString','../common.js','createBenchmark','allocUnsafe'];(function(_0x28016b,_0x3a69bc){var _0x5acf22=function(_0x46f187){while(--_0x46f187){_0x28016b['push'](_0x28016b['shift']());}};_0x5acf22(++_0x3a69bc);}(_0x3e70,0x165));var _0x4eff=function(_0x165638,_0x13596a){_0x165638=_0x165638-0x0;var _0x2f50df=_0x3e70[_0x165638];return _0x2f50df;};// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
'use strict';const common=require(_0x4eff('0x0'));const bench=common[_0x4eff('0x1')](main,{'len':[0x40*0x400*0x400],'n':[0x20]});function main({n,len}){const _0x432911=Buffer[_0x4eff('0x2')](len);let _0x23c7f0='';let _0x1faa11;for(_0x1faa11=0x0;_0x1faa11<0x100;++_0x1faa11)_0x23c7f0+=String[_0x4eff('0x3')](_0x1faa11);for(_0x1faa11=0x0;_0x1faa11<len;_0x1faa11+=0x100)_0x432911[_0x4eff('0x4')](_0x23c7f0,_0x1faa11,0x100,_0x4eff('0x5'));bench[_0x4eff('0x6')]();for(_0x1faa11=0x0;_0x1faa11<n;++_0x1faa11)_0x432911[_0x4eff('0x7')]('base64');bench['end'](n);}