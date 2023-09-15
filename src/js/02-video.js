import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoIframe = document.querySelector('vimeo-player');
const player = new Player(vimeoIframe);

const handleTimeUpdateThrottled = throttle(event => {
  const currentTime = event.seconds;
  //console.log(currentTime);
  localStorage.setItem(VIDEO_STORAGE_KEY, currentTime.toString());
}, 1000);

const VIDEO_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', saveTimeToLocalStorage);

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem(VIDEO_STORAGE_KEY);
  if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime)).then(() => {
      player.play();
    });
  }
});
