var _0x1beb = [  'transitionDelay',  'tUIaa',  'transform',  'KFxZq',  'FLvkp',  'deg)\x20rotateY(',  'deg)',  'animationPlayState',  'running',  'abs',  'onpointerdown',  'SgXxQ',  'timer',  'event',  'clientX',  'clientY',  'onpointermove',  'YRsGW',  'YGTIU',  'jKbqn',  'onpointerup',  '4|0|3|5|1|6|2',  'iRiQr',  'wLKtX',  'BiYgm',  'uvomB',  'ddTom',  'ykLGV',  'querySelector',  '.soundbutton',  '.audio',  'addEventListener',  'classList',  'toggle',  'paused',  'play',  'body_visible',  'getElementById',  'drag-container',  'carousel',  'getElementsByTagName',  'style',  'width',  'height',  'ground',  'deg)\x20translateZ(',  'px)',  'transform\x201s',  'RptYh',  'length',  'RfFtN',  'DzYbQ',  'rotateY(',  'XKjps',  'transition' ]; (function (_0x999971, _0x1a8fa0) {  var _0x1af19a = function (_0x5e7cff) {  while (--_0x5e7cff) {  _0x999971['push'](_0x999971['shift']());  }  };  _0x1af19a(++_0x1a8fa0); }(_0x1beb, 0x1a5)); var _0x2e4e = function (_0x59e99c, _0x435cef) {  _0x59e99c = _0x59e99c - 0x0;  var _0x1dd81c = _0x1beb[_0x59e99c];  return _0x1dd81c; }; setTimeout(function () {  document['body']['classList']['add'](_0x2e4e('0x0')); }, 0x12c); let radius = 0x230; let autoRotate = !![]; let rotateSpeed = -0x6f; let imgWidth = 0x64; let imgHeight = 0x96; setTimeout(init, 0xd05); let odrag = document[_0x2e4e('0x1')](_0x2e4e('0x2')); let ospin = document['getElementById']('spin-container'); let carousel = document['getElementById'](_0x2e4e('0x3')); let aImg = ospin[_0x2e4e('0x4')]('a'); ospin[_0x2e4e('0x5')][_0x2e4e('0x6')] = imgWidth + 'px'; ospin[_0x2e4e('0x5')][_0x2e4e('0x7')] = imgHeight + 'px'; let ground = document['getElementById'](_0x2e4e('0x8')); ground['style'][_0x2e4e('0x6')] = radius * 0x3 + 'px'; ground[_0x2e4e('0x5')][_0x2e4e('0x7')] = radius * 0x3 + 'px'; function init(_0xa93b80) {  var _0x312542 = {  'RptYh': function (_0x970dce, _0x371bf0) {  return _0x970dce < _0x371bf0;  },  'RfFtN': function (_0x38cc64, _0x556dd0) {  return _0x38cc64 + _0x556dd0;  },  'DzYbQ': function (_0x717cdf, _0x4324e5) {  return _0x717cdf + _0x4324e5;  },  'XKjps': _0x2e4e('0x9'),  'DHsbt': _0x2e4e('0xa'),  'eEixo': _0x2e4e('0xb'),  'clCuB': function (_0x136a35, _0x170989) {  return _0x136a35 / _0x170989;  },  'tUIaa': function (_0x32086a, _0x44a39f) {  return _0x32086a - _0x44a39f;  }  };  for (let _0x2c9e5a = 0x0; _0x312542[_0x2e4e('0xc')](_0x2c9e5a, aImg[_0x2e4e('0xd')]); _0x2c9e5a++) {  aImg[_0x2c9e5a][_0x2e4e('0x5')]['transform'] = _0x312542[_0x2e4e('0xe')](_0x312542[_0x2e4e('0xf')](_0x2e4e('0x10') + _0x2c9e5a * (0x168 / aImg['length']), _0x312542[_0x2e4e('0x11')]) + radius, _0x312542['DHsbt']);  aImg[_0x2c9e5a]['style'][_0x2e4e('0x12')] = _0x312542['eEixo'];  aImg[_0x2c9e5a][_0x2e4e('0x5')][_0x2e4e('0x13')] = _0xa93b80 || _0x312542['DzYbQ'](_0x312542['clCuB'](_0x312542[_0x2e4e('0x14')](aImg[_0x2e4e('0xd')], _0x2c9e5a), 0x4), 's');  } } function applyTranform(_0x5b66d9) {  var _0x1cac63 = {  'bxKig': function (_0x5f59ce, _0x152b2f) {  return _0x5f59ce > _0x152b2f;  },  'KFxZq': function (_0x12ca0d, _0x2c1625) {  return _0x12ca0d + _0x2c1625;  },  'FLvkp': function (_0x5e6667, _0x4f03ef) {  return _0x5e6667 + _0x4f03ef;  },  'iZgMD': 'rotateX('  };  if (_0x1cac63['bxKig'](tY, 0xb4))  tY = 0xb4;  if (tY < 0x0)  tY = 0x0;  _0x5b66d9[_0x2e4e('0x5')][_0x2e4e('0x15')] = _0x1cac63[_0x2e4e('0x16')](_0x1cac63[_0x2e4e('0x16')](_0x1cac63['FLvkp'](_0x1cac63[_0x2e4e('0x17')](_0x1cac63['iZgMD'], -tY), _0x2e4e('0x18')), tX), _0x2e4e('0x19')); } function playSpin(_0x8e4d20) {  ospin['style'][_0x2e4e('0x1a')] = _0x8e4d20 ? _0x2e4e('0x1b') : 'paused'; } let sX, sY, nX, nY, desX = 0x0, desY = 0x0, tX = 0x0, tY = 0xa; if (autoRotate) {  let animationName = rotateSpeed > 0x0 ? 'spin' : 'spinRevert';  ospin[_0x2e4e('0x5')]['animation'] = animationName + '\x20' + Math[_0x2e4e('0x1c')](rotateSpeed) + 's\x20infinite\x20linear'; } carousel[_0x2e4e('0x1d')] = function (_0x49dec2) {  var _0x245758 = {  'YRsGW': function (_0x40053a, _0x3696dc) {  return _0x40053a - _0x3696dc;  },  'YGTIU': function (_0x1a98f1, _0x206f90) {  return _0x1a98f1 * _0x206f90;  },  'jKbqn': function (_0x11cf25, _0x2b8db4) {  return _0x11cf25(_0x2b8db4);  },  'iRiQr': function (_0xf2ec5c, _0x45d1ba) {  return _0xf2ec5c(_0x45d1ba);  },  'wLKtX': function (_0x3a3304, _0x44a72c) {  return _0x3a3304 * _0x44a72c;  },  'ZokJL': function (_0x377890, _0x44eec7) {  return _0x377890(_0x44eec7);  },  'mjZfX': function (_0x197c54, _0x4e8f98, _0x1b2512) {  return _0x197c54(_0x4e8f98, _0x1b2512);  },  'SgXxQ': function (_0x5ee49d, _0x500582) {  return _0x5ee49d(_0x500582);  }  };  _0x245758[_0x2e4e('0x1e')](clearInterval, odrag[_0x2e4e('0x1f')]);  _0x49dec2 = _0x49dec2 || window[_0x2e4e('0x20')];  let _0x17613e = _0x49dec2[_0x2e4e('0x21')], _0x30745f = _0x49dec2[_0x2e4e('0x22')];  this[_0x2e4e('0x23')] = function (_0x49dec2) {  _0x49dec2 = _0x49dec2 || window[_0x2e4e('0x20')];  let _0x18043d = _0x49dec2['clientX'], _0x5d4f0a = _0x49dec2[_0x2e4e('0x22')];  desX = _0x245758[_0x2e4e('0x24')](_0x18043d, _0x17613e);  desY = _0x245758['YRsGW'](_0x5d4f0a, _0x30745f);  tX += desX * 0.1;  tY += _0x245758[_0x2e4e('0x25')](desY, 0.1);  _0x245758[_0x2e4e('0x26')](applyTranform, odrag);  _0x17613e = _0x18043d;  _0x30745f = _0x5d4f0a;  };  this[_0x2e4e('0x27')] = function (_0x49dec2) {  var _0x8ef71f = {  'BiYgm': _0x2e4e('0x28'),  'uvomB': function (_0x3723b1, _0x319b9f) {  return _0x3723b1 < _0x319b9f;  },  'ddTom': function (_0xa0200f, _0x4c87cc) {  return _0x245758[_0x2e4e('0x29')](_0xa0200f, _0x4c87cc);  },  'ykLGV': function (_0x856f01, _0x4b570c) {  return _0x245758[_0x2e4e('0x2a')](_0x856f01, _0x4b570c);  },  'TODnG': function (_0x594a54, _0x1e3f1b) {  return _0x245758['ZokJL'](_0x594a54, _0x1e3f1b);  }  };  odrag[_0x2e4e('0x1f')] = _0x245758['mjZfX'](setInterval, function () {  var _0x482203 = _0x8ef71f[_0x2e4e('0x2b')]['split']('|'), _0x1423d5 = 0x0;  while (!![]) {  switch (_0x482203[_0x1423d5++]) {  case '0':  desY *= 0.95;  continue;  case '1':  applyTranform(odrag);  continue;  case '2':  if (_0x8ef71f[_0x2e4e('0x2c')](Math['abs'](desX), 0.5) && _0x8ef71f[_0x2e4e('0x2c')](Math[_0x2e4e('0x1c')](desY), 0.5)) {  _0x8ef71f['ddTom'](clearInterval, odrag[_0x2e4e('0x1f')]);  _0x8ef71f[_0x2e4e('0x2d')](playSpin, !![]);  }  continue;  case '3':  tX += _0x8ef71f[_0x2e4e('0x2e')](desX, 0.1);  continue;  case '4':  desX *= 0.95;  continue;  case '5':  tY += _0x8ef71f[_0x2e4e('0x2e')](desY, 0.1);  continue;  case '6':  _0x8ef71f['TODnG'](playSpin, ![]);  continue;  }  break;  }  }, 0x11);  this[_0x2e4e('0x23')] = this['onpointerup'] = null;  };  return ![]; }; let soundButton = document[_0x2e4e('0x2f')](_0x2e4e('0x30')), audio = document[_0x2e4e('0x2f')](_0x2e4e('0x31')); soundButton[_0x2e4e('0x32')]('click', _0xd118d => {  soundButton[_0x2e4e('0x33')][_0x2e4e('0x34')](_0x2e4e('0x35'));  audio[_0x2e4e('0x35')] ? audio[_0x2e4e('0x36')]() : audio['pause'](); });