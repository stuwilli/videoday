const freewheelConfig = require('./freewheel-config');
const events = require('./events');

videojs('video_1').one('loadedmetadata', function videoLoadedMetadata () {
  const videoPlayer = this;

  videoPlayer.FreeWheelPlugin(freewheelConfig);

  Object.keys(events).forEach(function (key) {
    const evt = events[key];
    videoPlayer.on(evt, logEvent(evt));
  });

  videoPlayer.play();

  window.videoPlayer = videoPlayer;
});

function logEvent (name) {
  return function () {
    console.log({
      name: name,
      args: arguments
    });
  }
}
