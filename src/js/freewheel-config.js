const defaultConfig = {
  networkId: 169843,
  serverUrl: 'http://7b94f.v.fwmrm.net/ad/p/1',
  siteSectionCustomId: 'TEST_SSID',
  siteSectionFallbackId: '884196',
  videoAssetCustomId: 'STU_TEST_ASSET_1',
  videoAssetFallbackId: '111560574'
};

module.exports = {
  Flash: Object.assign({}, defaultConfig, {
    profile: '506191:ATN_AS3_Video_Test',
    sdkurl: 'http://adm.fwmrm.net/p/release/latest-AS3/adm/dbg/AdManager.swf?logLevel=VERBOSE',
    swfurl: '//players.brightcove.net/videojs-freewheel/2/videojs.freewheel.swf'
  }),
  Html5: Object.assign({}, defaultConfig, {
    profile: '506191:ATN_HTML5_Test',
    sdkurl: 'http://adm.fwmrm.net/p/release/latest-JS/adm/prd/AdManager.js?logLevel=VERBOSE'
  }),
  adTechOrder: [
    'flash',
    'html5'
  ],
  debug: true,
  prerollTimeout: 50000,
  timeout: 50000
};
