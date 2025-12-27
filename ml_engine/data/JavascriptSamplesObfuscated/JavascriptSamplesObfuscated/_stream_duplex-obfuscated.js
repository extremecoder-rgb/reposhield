var _0x2cf9=['destroyed','_readableState','prototype','setPrototypeOf','keys','length','call','allowHalfOpen','readable','writable','once','defineProperty','writableHighWaterMark','_writableState','getBuffer','ended','nextTick','end'];(function(_0x144163,_0xdbcd91){var _0x145346=function(_0x73a7a5){while(--_0x73a7a5){_0x144163['push'](_0x144163['shift']());}};_0x145346(++_0xdbcd91);}(_0x2cf9,0x6e));var _0x5108=function(_0x384d58,_0x2c8d18){_0x384d58=_0x384d58-0x0;var _0x1ba41e=_0x2cf9[_0x384d58];return _0x1ba41e;};// Copyright Joyent, Inc. and other Node contributors.
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
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.
'use strict';module['exports']=Duplex;const Readable=require('_stream_readable');const Writable=require('_stream_writable');Object['setPrototypeOf'](Duplex['prototype'],Readable[_0x5108('0x0')]);Object[_0x5108('0x1')](Duplex,Readable);{const keys=Object[_0x5108('0x2')](Writable['prototype']);for(var v=0x0;v<keys[_0x5108('0x3')];v++){const method=keys[v];if(!Duplex['prototype'][method])Duplex['prototype'][method]=Writable[_0x5108('0x0')][method];}}function Duplex(_0x46f3fa){if(!(this instanceof Duplex))return new Duplex(_0x46f3fa);Readable[_0x5108('0x4')](this,_0x46f3fa);Writable['call'](this,_0x46f3fa);this[_0x5108('0x5')]=!![];if(_0x46f3fa){if(_0x46f3fa[_0x5108('0x6')]===![])this['readable']=![];if(_0x46f3fa[_0x5108('0x7')]===![])this[_0x5108('0x7')]=![];if(_0x46f3fa[_0x5108('0x5')]===![]){this[_0x5108('0x5')]=![];this[_0x5108('0x8')]('end',onend);}}}Object[_0x5108('0x9')](Duplex['prototype'],_0x5108('0xa'),{'enumerable':![],'get'(){return this[_0x5108('0xb')]['highWaterMark'];}});Object[_0x5108('0x9')](Duplex['prototype'],'writableBuffer',{'enumerable':![],'get':function(){return this['_writableState']&&this[_0x5108('0xb')][_0x5108('0xc')]();}});Object['defineProperty'](Duplex[_0x5108('0x0')],'writableLength',{'enumerable':![],'get'(){return this['_writableState'][_0x5108('0x3')];}});function onend(){if(this[_0x5108('0xb')][_0x5108('0xd')])return;process[_0x5108('0xe')](onEndNT,this);}function onEndNT(_0xd612dd){_0xd612dd[_0x5108('0xf')]();}Object[_0x5108('0x9')](Duplex['prototype'],_0x5108('0x10'),{'enumerable':![],'get'(){if(this[_0x5108('0x11')]===undefined||this[_0x5108('0xb')]===undefined){return![];}return this[_0x5108('0x11')][_0x5108('0x10')]&&this[_0x5108('0xb')][_0x5108('0x10')];},'set'(_0x190faa){if(this['_readableState']===undefined||this[_0x5108('0xb')]===undefined){return;}this[_0x5108('0x11')][_0x5108('0x10')]=_0x190faa;this[_0x5108('0xb')][_0x5108('0x10')]=_0x190faa;}});