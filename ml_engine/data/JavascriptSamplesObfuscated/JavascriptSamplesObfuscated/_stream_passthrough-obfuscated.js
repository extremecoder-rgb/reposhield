var _0xa76a=['exports','_stream_transform','setPrototypeOf','prototype','call','_transform'];(function(_0x2a4513,_0x2a749d){var _0x30ac98=function(_0x5d05ff){while(--_0x5d05ff){_0x2a4513['push'](_0x2a4513['shift']());}};_0x30ac98(++_0x2a749d);}(_0xa76a,0x1a4));var _0x5a71=function(_0x512274,_0x2d8866){_0x512274=_0x512274-0x0;var _0xe48c53=_0xa76a[_0x512274];return _0xe48c53;};// Copyright Joyent, Inc. and other Node contributors.
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
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.
'use strict';module[_0x5a71('0x0')]=PassThrough;const Transform=require(_0x5a71('0x1'));Object[_0x5a71('0x2')](PassThrough[_0x5a71('0x3')],Transform[_0x5a71('0x3')]);Object[_0x5a71('0x2')](PassThrough,Transform);function PassThrough(_0x1e0b1a){if(!(this instanceof PassThrough))return new PassThrough(_0x1e0b1a);Transform[_0x5a71('0x4')](this,_0x1e0b1a);}PassThrough[_0x5a71('0x3')][_0x5a71('0x5')]=function(_0x5a83b6,_0x595a31,_0x5b08c2){_0x5b08c2(null,_0x5a83b6);};