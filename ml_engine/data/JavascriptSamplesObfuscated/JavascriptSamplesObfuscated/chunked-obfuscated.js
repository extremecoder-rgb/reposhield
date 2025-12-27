var _0x2c05=['createServer','end','write','listen','PORT','../common.js','createBenchmark','alloc'];(function(_0x1b97c9,_0x4574f3){var _0x36bb68=function(_0x812ef8){while(--_0x812ef8){_0x1b97c9['push'](_0x1b97c9['shift']());}};_0x36bb68(++_0x4574f3);}(_0x2c05,0x1c5));var _0x35cf=function(_0x492c80,_0x2ebec3){_0x492c80=_0x492c80-0x0;var _0x453fcd=_0x2c05[_0x492c80];return _0x453fcd;};// When calling .end(buffer) right away, this triggers a "hot path"
// optimization in http.js, to avoid an extra write call.
//
// However, the overhead of copying a large buffer is higher than
// the overhead of an extra write() call, so the hot path was not
// always as hot as it could be.
//
// Verify that our assumptions are valid.
'use strict';const common=require(_0x35cf('0x0'));const bench=common[_0x35cf('0x1')](main,{'n':[0x1,0x4,0x8,0x10],'len':[0x1,0x40,0x100],'c':[0x64]});function main({len,n,c}){const _0x274054=require('http');const _0x393fbe=Buffer[_0x35cf('0x2')](len,'8');const _0x1d38ce=_0x274054[_0x35cf('0x3')]((_0x201f9b,_0x1ac167)=>{function _0x4ff894(_0x20d1a6){if(_0x20d1a6===0x0)return _0x1ac167[_0x35cf('0x4')]();_0x1ac167[_0x35cf('0x5')](_0x393fbe);setTimeout(()=>{_0x4ff894(_0x20d1a6-0x1);},0x0);}_0x4ff894(n);});_0x1d38ce[_0x35cf('0x6')](common[_0x35cf('0x7')],()=>{bench['http']({'connections':c},()=>{_0x1d38ce['close']();});});}