import VimeoPlayer from 'vimeo-player';
import throttle from 'lodash.throttle';

const vimeoIframe = document.getElementById('vimeo-player');
const player = new VimeoPlayer(vimeoIframe);

const VIDEO_STORAGE_KEY = 'videoplayer-current-time';

const handleTimeUpdateThrottled = throttle(event => {
  const currentTime = event.seconds;
  console.log(`Aktualny czas odtwarzania: ${currentTime} sekund`);
  localStorage.setItem(VIDEO_STORAGE_KEY, currentTime.toString());
}, 1000);

player.on('timeupdate', handleTimeUpdateThrottled);

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem(VIDEO_STORAGE_KEY);
  if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime)).then(() => {
      player.play();
    });
  }
});
