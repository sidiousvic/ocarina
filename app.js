window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener("mousedown", (e) => {
  const audio = document.querySelector(
    `audio[data-key="${e.target.getAttribute("data-key")}"]`
  );

  const key = e.target;

  if (!audio) return;
  if (key) {
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  key.classList.remove("playing");
});

window.addEventListener("mouseup", (e) => {
  e.target.classList.remove("playing");
});
