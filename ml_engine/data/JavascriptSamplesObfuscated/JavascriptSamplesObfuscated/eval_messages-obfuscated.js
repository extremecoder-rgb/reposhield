var _0x3454=['var\x20x\x20=\x20100;\x20y\x20=\x20x;','shift','log','done','../common','child_process','push','--use_strict','-pe','execPath','stdout','pipe','close','with(this){__filename}'];(function(_0x1c80ac,_0x1f18b4){var _0x4eebd4=function(_0x30622a){while(--_0x30622a){_0x1c80ac['push'](_0x1c80ac['shift']());}};_0x4eebd4(++_0x1f18b4);}(_0x3454,0x1c4));var _0x57b2=function(_0x654781,_0x2c2379){_0x654781=_0x654781-0x0;var _0x4e67af=_0x3454[_0x654781];return _0x4e67af;};// Copyright Joyent, Inc. and other Node contributors.
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
'use strict';require(_0x57b2('0x0'));const spawn=require(_0x57b2('0x1'))['spawn'];function run(_0x2e920a,_0x378209,_0x295cf9){const _0x4b4abb=[];if(_0x378209)_0x4b4abb[_0x57b2('0x2')](_0x57b2('0x3'));_0x4b4abb[_0x57b2('0x2')](_0x57b2('0x4'),_0x2e920a);const _0x4afe4c=spawn(process[_0x57b2('0x5')],_0x4b4abb);_0x4afe4c[_0x57b2('0x6')][_0x57b2('0x7')](process[_0x57b2('0x6')]);_0x4afe4c['stderr']['pipe'](process['stdout']);_0x4afe4c['on'](_0x57b2('0x8'),_0x295cf9);}const queue=[_0x57b2('0x9'),'42','throw\x20new\x20Error(\x22hello\x22)',_0x57b2('0xa'),'var\x20______________________________________________;\x20throw\x2010'];function go(){const _0x33ce64=queue[_0x57b2('0xb')]();if(!_0x33ce64)return console[_0x57b2('0xc')](_0x57b2('0xd'));run(_0x33ce64,![],function(){run(_0x33ce64,!![],go);});}go();