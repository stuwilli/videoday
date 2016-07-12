const freewheelConfig = require('./freewheel-config');
const events = require('./events');

const autoplay = location.search.indexOf('autoplay') > -1;

videojs('video_1', {
  controls: true,
  autoplay: autoplay,
  preload: 'auto'
}).one('loadedmetadata', function videoLoadedMetadata () {
  const videoPlayer = this;

  videoPlayer.FreeWheelPlugin(freewheelConfig);

  Object.keys(events).forEach(function (key) {
    const evt = events[key];
    videoPlayer.on(evt, logEvent(evt));
  });

  if (autoplay) {
    videoPlayer.play();
  }

  window.videoPlayer = videoPlayer;
  window.freewheelConfig = freewheelConfig;
});

function logEvent (name) {
  return function () {
    console.log({
      name: name,
      data: arguments[0]
    });
  }
}
