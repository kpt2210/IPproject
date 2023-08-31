function playTune(tune) {
    var audio = document.getElementById("audio");
    audio.src = "audio/" + tune + ".mp3";
    audio.play();
  }
  function pauseTune() {
    var audio = document.getElementById("audio");
    audio.pause();
  }
  function stopTune() {
    var audio = document.getElementById("audio");
    audio.pause();
    audio.currentTime = 0;
  }
  document.getElementById("play").addEventListener("click", playTune);
  document.getElementById("pause").addEventListener("click", pauseTune);
  document.getElementById("stop").addEventListener("click", stopTune);