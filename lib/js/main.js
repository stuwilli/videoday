const freewheelConfig = require('./freewheel-config');
const events = require('./events');

videojs('video_1').one('loadedmetadata', function videoLoadedMetadata () {
  const videoPlayer = this;

  videoPlayer.FreeWheelPlugin(freewheelConfig);

  videoPlayer.on(events.adStarted, logEvent);
  videoPlayer.on(events.adEnded, logEvent);
  videoPlayer.on(events.adRequest, logEvent);

  window.videoPlayer = videoPlayer;
});

function logEvent (event) {
  console.log(event);
}
