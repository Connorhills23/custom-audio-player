console.log("Testing..");

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const pauseBtn = document.getElementById("pause");
const skipForward = document.getElementById("skipForward");
const skipBack = document.getElementById("skipBackward");

playBtn.addEventListener("click", function () {
  console.log("Hello");
  audio.play();
});

pauseBtn.addEventListener("click", function () {
  audio.pause();
});

stopBtn.addEventListener("click", function () {
  audio.pause();
  audio.currentTime = 0;
});

skipForward.addEventListener("click", function () {
  audio.currentTime = audio.currentTime + 10;
  audio.currentTime += 10;
});

skipBack.addEventListener("click", function () {
  audio.currentTime -= 10;
});

let audioVolume = document.getElementById("vol");

audioVolume.addEventListener("input", function () {
  audio.volume = +audioVolume.value / 100;
});

const playlist = [
  { src: "./audio/Culture-Club.mp3", title: "Culture-Club" },
  {
    src: "./audio/Led Zeppelin - Whole Lotta Love.mp3",
    title: "Led Zeppelin - Whole Lotta Love",
  },
  {
    src: "./audio/Michael Jackson - They Donâ__t Care About Us.mp3",
    title: "Michael Jackson - They Donâ__t Care About Us",
  },
  {
    src: "./audio/AC_DC - Highway to Hell.mp3",
    title: "AC_DC - Highway to Hell",
  },
  {
    src: "./audio/Where Have You Been x Heaven Takes You Home x Highest In The Room - Mashup.mp3",
    title:
      "Where Have You Been x Heaven Takes You Home x Highest In The Room - Mashup",
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
    title: "Don't You Worry Child x Many - Mashup by Guy",
  },
  {
    src: "./audio/The Nights x Paradise (Mashup) - Avicii, Coldplay.mp3",
    title: "The Nights x Paradise (Mashup) - Avicii, Coldplay",
  },
  { src: "./audio/Bangersong.mp3", title: "Bangers" },
];

let currentTrackIndex = 0;
const skipButton = document.getElementById("skip-button");
const songTitleEl = document.getElementById("song-title");

function loadTrack(index) {
  if (index >= 0 && index < playlist.length) {
    currentTrackIndex = index;
    audio.src = playlist[currentTrackIndex].src;
    songTitleEl.textContent = playlist[currentTrackIndex].title;

    audio.play();
  }
}

function skipSong() {
  if (currentTrackIndex < playlist.length - 1) {
    loadTrack(currentTrackIndex + 1);
  } else {
    loadTrack(0);
  }
}

skipButton.addEventListener("click", skipSong);
audio.addEventListener("ended", skipSong);
loadTrack(currentTrackIndex);
