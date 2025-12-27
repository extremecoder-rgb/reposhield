var _0x5cdc=['oneOfType','prop-types','shape','string','objectOf','oneOf','default','reload','force-cache','number'];(function(_0x107373,_0x4440a8){var _0x986c55=function(_0x353fb9){while(--_0x353fb9){_0x107373['push'](_0x107373['shift']());}};_0x986c55(++_0x4440a8);}(_0x5cdc,0x137));var _0x48cc=function(_0x19b29e,_0x50a470){_0x19b29e=_0x19b29e-0x0;var _0x5f2ddf=_0x5cdc[_0x19b29e];return _0x5f2ddf;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @no-flow
 * @format
 */
'use strict';const PropTypes=require(_0x48cc('0x0'));const ImageURISourcePropType=PropTypes[_0x48cc('0x1')]({'uri':PropTypes[_0x48cc('0x2')],'bundle':PropTypes[_0x48cc('0x2')],'method':PropTypes[_0x48cc('0x2')],'headers':PropTypes[_0x48cc('0x3')](PropTypes[_0x48cc('0x2')]),'body':PropTypes['string'],'cache':PropTypes[_0x48cc('0x4')]([_0x48cc('0x5'),_0x48cc('0x6'),_0x48cc('0x7'),'only-if-cached']),'width':PropTypes[_0x48cc('0x8')],'height':PropTypes['number'],'scale':PropTypes[_0x48cc('0x8')]});const ImageSourcePropType=PropTypes[_0x48cc('0x9')]([ImageURISourcePropType,PropTypes[_0x48cc('0x8')],PropTypes['arrayOf'](ImageURISourcePropType)]);module['exports']=ImageSourcePropType;