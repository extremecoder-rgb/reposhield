var _0x36df=['bind','sync','transform','function','_transform','flush','_flush','prefinish','destroyed','needTransform','_transform()','_write','writecb','writeencoding','needReadable','afterTransform','_destroy','push','_writableState','exports','internal/errors','codes','_stream_duplex','setPrototypeOf','prototype','_transformState','transforming','emit','error','writechunk','_readableState','reading','length','highWaterMark','_read','call'];(function(_0x412366,_0x12fdc8){var _0x1a9544=function(_0x20ff97){while(--_0x20ff97){_0x412366['push'](_0x412366['shift']());}};_0x1a9544(++_0x12fdc8);}(_0x36df,0x157));var _0x5d8a=function(_0x3562b5,_0x22dabc){_0x3562b5=_0x3562b5-0x0;var _0x54d52d=_0x36df[_0x3562b5];return _0x54d52d;};// Copyright Joyent, Inc. and other Node contributors.
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
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.
'use strict';module[_0x5d8a('0x0')]=Transform;const {ERR_METHOD_NOT_IMPLEMENTED,ERR_MULTIPLE_CALLBACK,ERR_TRANSFORM_ALREADY_TRANSFORMING,ERR_TRANSFORM_WITH_LENGTH_0}=require(_0x5d8a('0x1'))[_0x5d8a('0x2')];const Duplex=require(_0x5d8a('0x3'));Object[_0x5d8a('0x4')](Transform[_0x5d8a('0x5')],Duplex['prototype']);Object[_0x5d8a('0x4')](Transform,Duplex);function afterTransform(_0x505dd7,_0x458ab7){var _0x5aa887=this[_0x5d8a('0x6')];_0x5aa887[_0x5d8a('0x7')]=![];var _0x3e5ed3=_0x5aa887['writecb'];if(_0x3e5ed3===null){return this[_0x5d8a('0x8')](_0x5d8a('0x9'),new ERR_MULTIPLE_CALLBACK());}_0x5aa887[_0x5d8a('0xa')]=null;_0x5aa887['writecb']=null;if(_0x458ab7!=null)this['push'](_0x458ab7);_0x3e5ed3(_0x505dd7);var _0xc9f24b=this[_0x5d8a('0xb')];_0xc9f24b[_0x5d8a('0xc')]=![];if(_0xc9f24b['needReadable']||_0xc9f24b[_0x5d8a('0xd')]<_0xc9f24b[_0x5d8a('0xe')]){this[_0x5d8a('0xf')](_0xc9f24b[_0x5d8a('0xe')]);}}function Transform(_0x678164){if(!(this instanceof Transform))return new Transform(_0x678164);Duplex[_0x5d8a('0x10')](this,_0x678164);this['_transformState']={'afterTransform':afterTransform[_0x5d8a('0x11')](this),'needTransform':![],'transforming':![],'writecb':null,'writechunk':null,'writeencoding':null};this[_0x5d8a('0xb')][_0x5d8a('0x12')]=![];if(_0x678164){if(typeof _0x678164[_0x5d8a('0x13')]===_0x5d8a('0x14'))this[_0x5d8a('0x15')]=_0x678164['transform'];if(typeof _0x678164[_0x5d8a('0x16')]===_0x5d8a('0x14'))this[_0x5d8a('0x17')]=_0x678164[_0x5d8a('0x16')];}this['on'](_0x5d8a('0x18'),prefinish);}function prefinish(){if(typeof this[_0x5d8a('0x17')]===_0x5d8a('0x14')&&!this[_0x5d8a('0xb')][_0x5d8a('0x19')]){this[_0x5d8a('0x17')]((_0x27cf55,_0x1c7b54)=>{done(this,_0x27cf55,_0x1c7b54);});}else{done(this,null,null);}}Transform[_0x5d8a('0x5')]['push']=function(_0x4bebac,_0x5c9f99){this[_0x5d8a('0x6')][_0x5d8a('0x1a')]=![];return Duplex[_0x5d8a('0x5')]['push']['call'](this,_0x4bebac,_0x5c9f99);};Transform[_0x5d8a('0x5')][_0x5d8a('0x15')]=function(_0x4de1aa,_0x5aef15,_0x5d2696){_0x5d2696(new ERR_METHOD_NOT_IMPLEMENTED(_0x5d8a('0x1b')));};Transform[_0x5d8a('0x5')][_0x5d8a('0x1c')]=function(_0x54b652,_0x103e84,_0x34d512){var _0x3228cc=this[_0x5d8a('0x6')];_0x3228cc[_0x5d8a('0x1d')]=_0x34d512;_0x3228cc['writechunk']=_0x54b652;_0x3228cc[_0x5d8a('0x1e')]=_0x103e84;if(!_0x3228cc['transforming']){var _0x5a783f=this[_0x5d8a('0xb')];if(_0x3228cc['needTransform']||_0x5a783f[_0x5d8a('0x1f')]||_0x5a783f[_0x5d8a('0xd')]<_0x5a783f[_0x5d8a('0xe')])this[_0x5d8a('0xf')](_0x5a783f[_0x5d8a('0xe')]);}};Transform['prototype'][_0x5d8a('0xf')]=function(_0x18d427){var _0x1193d1=this[_0x5d8a('0x6')];if(_0x1193d1[_0x5d8a('0xa')]!==null&&!_0x1193d1[_0x5d8a('0x7')]){_0x1193d1[_0x5d8a('0x7')]=!![];this[_0x5d8a('0x15')](_0x1193d1[_0x5d8a('0xa')],_0x1193d1[_0x5d8a('0x1e')],_0x1193d1[_0x5d8a('0x20')]);}else{_0x1193d1['needTransform']=!![];}};Transform['prototype'][_0x5d8a('0x21')]=function(_0x316835,_0x3d98b9){Duplex['prototype'][_0x5d8a('0x21')]['call'](this,_0x316835,_0x1cd8aa=>{_0x3d98b9(_0x1cd8aa);});};function done(_0x5e931d,_0x43fc62,_0x4972b5){if(_0x43fc62)return _0x5e931d[_0x5d8a('0x8')](_0x5d8a('0x9'),_0x43fc62);if(_0x4972b5!=null)_0x5e931d[_0x5d8a('0x22')](_0x4972b5);if(_0x5e931d[_0x5d8a('0x23')]['length'])throw new ERR_TRANSFORM_WITH_LENGTH_0();if(_0x5e931d[_0x5d8a('0x6')][_0x5d8a('0x7')])throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();return _0x5e931d[_0x5d8a('0x22')](null);}