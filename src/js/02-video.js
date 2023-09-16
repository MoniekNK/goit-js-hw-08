import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoIframe = document.querySelector('#vimeo-player'); // Dodaj "#" przed id
const player = new Player(vimeoIframe);

const handleTimeUpdateThrottled = throttle(event => {
  const currentTime = event.seconds;
  localStorage.setItem(VIDEO_STORAGE_KEY, currentTime.toString());
}, 1000);

const VIDEO_STORAGE_KEY = 'videoplayer-current-time';

// Zdefiniuj funkcję saveTimeToLocalStorage
function saveTimeToLocalStorage(event) {
  const currentTime = event.seconds;
  localStorage.setItem(VIDEO_STORAGE_KEY, currentTime.toString());
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem(VIDEO_STORAGE_KEY);
  if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime)).then(() => {
      player.play();
    });
  }
});
