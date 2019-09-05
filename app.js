window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener('keyup', e => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.remove('playing');
});
