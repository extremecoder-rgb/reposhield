var _0x9ed0=['prop','href','[object\x20SVGAnimatedString]','click','attr','preventDefault','xlinkHref','nodeName','toLowerCase','call'];(function(_0x235213,_0x4e4b5d){var _0x2207cf=function(_0x467f71){while(--_0x467f71){_0x235213['push'](_0x235213['shift']());}};_0x2207cf(++_0x4e4b5d);}(_0x9ed0,0xb0));var _0x69ef=function(_0x57feaa,_0x505204){_0x57feaa=_0x57feaa-0x0;var _0x24c056=_0x9ed0[_0x57feaa];return _0x24c056;};'use strict';/**
 * @ngdoc directive
 * @name a
 * @restrict E
 *
 * @description
 * Modifies the default behavior of the html a tag so that the default action is prevented when
 * the href attribute is empty.
 *
 * For dynamically creating `href` attributes for a tags, see the {@link ng.ngHref `ngHref`} directive.
 */var htmlAnchorDirective=valueFn({'restrict':'E','compile':function(_0x4b3b23,_0x4f2abb){if(!_0x4f2abb['href']&&!_0x4f2abb[_0x69ef('0x0')]){return function(_0x425439,_0x4b3b23){if(_0x4b3b23[0x0][_0x69ef('0x1')][_0x69ef('0x2')]()!=='a')return;var _0x4b8d88=toString[_0x69ef('0x3')](_0x4b3b23[_0x69ef('0x4')](_0x69ef('0x5')))===_0x69ef('0x6')?'xlink:href':'href';_0x4b3b23['on'](_0x69ef('0x7'),function(_0x2635f0){if(!_0x4b3b23[_0x69ef('0x8')](_0x4b8d88)){_0x2635f0[_0x69ef('0x9')]();}});};}}});