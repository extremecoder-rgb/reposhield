var _0x11a4=['../common.js','createBenchmark','alloc','start','end'];(function(_0x42c4b2,_0x4aa5fa){var _0xa0a9a7=function(_0x1e624b){while(--_0x1e624b){_0x42c4b2['push'](_0x42c4b2['shift']());}};_0xa0a9a7(++_0x4aa5fa);}(_0x11a4,0x69));var _0x111b=function(_0x2a77a2,_0x2cced4){_0x2a77a2=_0x2a77a2-0x0;var _0x49fd37=_0x11a4[_0x2a77a2];return _0x49fd37;};// Copyright Joyent, Inc. and other Node contributors.
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
'use strict';const common=require(_0x111b('0x0'));const bench=common[_0x111b('0x1')](main,{'size':[0x10,0x200,0x400,0x1000,0x4002],'n':[0xf4240]});function main({n,size}){const _0x22bd83=Buffer[_0x111b('0x2')](size,'a');const _0xd003ca=Buffer['alloc'](size,'a');_0xd003ca[size-0x1]='b'['charCodeAt'](0x0);bench[_0x111b('0x3')]();for(var _0x4bcfda=0x0;_0x4bcfda<n;_0x4bcfda++){Buffer['compare'](_0x22bd83,_0xd003ca);}bench[_0x111b('0x4')](n);}