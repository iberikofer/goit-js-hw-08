import Vimeo from '@vimeo/player';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

player.play();
player.on('timeupdate', onTimeUpdate);

function onTimeUpdate(time) {
  console.log(time);
}
