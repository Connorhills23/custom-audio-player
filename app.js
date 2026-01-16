const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");
const skipForward = document.getElementById("skipForward");
const skipBack = document.getElementById("skipBackward");
const audioVolume = document.getElementById("vol");
const songTitleEl = document.getElementById("song-title");
const playlistContainer = document.getElementById("playlist-container");

const playlist = [
  { src: "./audio/Culture-Club.mp3", title: "Culture-Club" },
  {
    src: "./audio/Led Zeppelin - Whole Lotta Love.mp3",
    title: "Led Zeppelin - Whole Lotta Love",
  },
  {
    src: "./audio/Michael Jackson - They Don't Care About Us.mp3",
    title: "Michael Jackson - They Don't Care About Us",
  },
  {
    src: "./audio/AC_DC - Highway to Hell.mp3",
    title: "AC/DC - Highway to Hell",
  },
  {
    src: "./audio/Where Have You Been x Heaven Takes You Home x Highest In The Room - Mashup.mp3",
    title: "Mashup",
  },
  {
    src: "./audio/Gold Digger x Macarena (Mashup).mp3",
    title: "Gold Digger x Macarena (Mashup)",
  },
  { src: "./audio/Darude - Sandstorm.mp3", title: "Darude - Sandstorm" },
  {
    src: "./audio/I Gotta Feeling x Many - Mashup.mp3",
    title: "I Gotta Feeling x Many - Mashup",
  },
  {
    src: "./audio/Don't You Worry Child x Many - Mashup by Guy.mp3",
    title: "Don't You Worry Child x Many - Mashup",
  },
  {
    src: "./audio/The Nights x Paradise (Mashup) - Avicii, Coldplay.mp3",
    title: "The Nights x Paradise (Mashup)",
  },
  { src: "./audio/Bangersong.mp3", title: "Bangers" },
];

let currentTrackIndex = 0;

// Load track and highlight in playlist
function loadTrack(index) {
  if (index >= 0 && index < playlist.length) {
    currentTrackIndex = index;
    audio.src = playlist[currentTrackIndex].src;
    songTitleEl.textContent = playlist[currentTrackIndex].title;

    // Highlight active track in playlist
    document.querySelectorAll("#playlist-container li").forEach((li, i) => {
      li.classList.toggle("active", i === index);
    });

    audio.play();
  }
}

// Play/Pause/Stop
playBtn.addEventListener("click", () => audio.play());
pauseBtn.addEventListener("click", () => audio.pause());
stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

// Skip forward/back
skipForward.addEventListener(
  "click",
  () => (audio.currentTime = Math.min(audio.currentTime + 10, audio.duration))
);
skipBack.addEventListener(
  "click",
  () => (audio.currentTime = Math.max(audio.currentTime - 10, 0))
);

// Volume control
audioVolume.addEventListener(
  "input",
  () => (audio.volume = Math.min(Math.max(audioVolume.value / 100, 0), 1))
);

// Skip to next track when current ends
audio.addEventListener("ended", () => {
  loadTrack((currentTrackIndex + 1) % playlist.length);
});

// Populate playlist UI
playlist.forEach((track, index) => {
  const li = document.createElement("li");
  li.textContent = track.title;
  li.addEventListener("click", () => loadTrack(index));
  playlistContainer.appendChild(li);
});

// Initial load
loadTrack(currentTrackIndex);
