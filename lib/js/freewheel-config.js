const defaultConfig = {
  networkId: 169843,
  profile: 'nbcnews_html5_live',
  serverUrl: 'http://29773.v.fwmrm.net/ad/p/1',
  siteSectionCustomId: 'today_canonical_video',
  temporalSlots: [{
    adUnit: 'preroll',
    id: 'Preroll_1',
    timePosition: 0
  }],
  videoAssetCustomId: 'tdy_klg_money_160711',
  videoAssetDuration: 235
};

module.exports = {
  Flash: Object.assign({}, defaultConfig, {
    sdkurl: 'http://adm.fwmrm.net/p/release/latest-AS3/adm/dbg/AdManager.swf',
    swfurl: '//players.brightcove.net/videojs-freewheel/2/videojs.freewheel.swf'
  }),
  Html5: Object.assign({}, defaultConfig, {
    sdkurl: 'http://adm.fwmrm.net/p/release/latest-JS/adm/prd/AdManager.js'
  }),
  adTechOrder: [
    'flash',
    'html5'
  ],
  debug: true,
  prerollTimeout: 5000,
  timeout: 5000
};
