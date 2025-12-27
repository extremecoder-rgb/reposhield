var _0x3c82=['addPoolingTo','exports','PooledClass','twoArgumentPooler','width','prototype','destructor','height','getPooledFromElement','getPooled','offsetHeight'];(function(_0x3b0d47,_0x124b7e){var _0x494cf7=function(_0x4240fe){while(--_0x4240fe){_0x3b0d47['push'](_0x3b0d47['shift']());}};_0x494cf7(++_0x124b7e);}(_0x3c82,0x12b));var _0xa087=function(_0x5768a3,_0x4d3b29){_0x5768a3=_0x5768a3-0x0;var _0x5a5d80=_0x3c82[_0x5768a3];return _0x5a5d80;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';const PooledClass=require(_0xa087('0x0'));const twoArgumentPooler=PooledClass[_0xa087('0x1')];function BoundingDimensions(_0x2d0e6a,_0x6e77c2){this[_0xa087('0x2')]=_0x2d0e6a;this['height']=_0x6e77c2;}BoundingDimensions[_0xa087('0x3')][_0xa087('0x4')]=function(){this[_0xa087('0x2')]=null;this[_0xa087('0x5')]=null;};BoundingDimensions[_0xa087('0x6')]=function(_0x3db635){return BoundingDimensions[_0xa087('0x7')](_0x3db635['offsetWidth'],_0x3db635[_0xa087('0x8')]);};PooledClass[_0xa087('0x9')](BoundingDimensions,twoArgumentPooler);module[_0xa087('0xa')]=BoundingDimensions;