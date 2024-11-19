fetch("./assets/data/musics.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);

    const audioPlayer = document.createElement("div");
    const audio = document.createElement("audio");

    const randomData = data[Math.floor(Math.random() * data.length)];
    audio.src = randomData.music;

    window.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }

      audioPlayer.appendChild(audio);
    });
  });
