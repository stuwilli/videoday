const defaultConfig = {
  networkId: 169843,
  serverUrl: 'http://29773.v.fwmrm.net/ad/p/1',
  siteSectionCustomId: 'today_canonical_video',
  siteSectionFallbackId: '884196',
  temporalSlots: [{
    adUnit: 'preroll',
    id: 'Preroll_1',
    timePosition: 0
  }],
  videoAssetCustomId: 'tdy_sterns_amazon_160712',
  videoAssetFallbackId: '90320017',
  videoAssetDuration: 235
};

module.exports = {
  Flash: Object.assign({}, defaultConfig, {
    profile: 'nbcnews_flash_live',
    sdkurl: 'http://adm.fwmrm.net/p/release/latest-AS3/adm/dbg/AdManager.swf?logLevel=VERBOSE',
    swfurl: '//players.brightcove.net/videojs-freewheel/2/videojs.freewheel.swf'
  }),
  Html5: Object.assign({}, defaultConfig, {
    profile: 'nbcnews_html5_live',
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
