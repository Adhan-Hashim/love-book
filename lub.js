$(document).ready(function () {
  $('#book').turn({
    width: 800,
    height: 500,
    autoCenter: true
  });

  const audios = [
    null,       // Page 1: Cover
    "audio1",   // Page 2: First meet
    "audio2",   // Page 3: Conversations
    "audio3",   // Page 4: Memories
    "audio4",   // Page 5: Letter 1
    "audio5",   // Page 6: Letter 2
    "audio6",   // Page 2: First meet
    "audio7",   // Page 3: Conversations
    "audio8",   // Page 4: Memories
    "audio9",   // Page 5: Letter 1
    "audio10",
    "audio11",
    "audio12",
    "audio13",
    "audio14",
    "audio15",
    "audio16",
    "audio17",
    "audio18",
    "audio19",
    "audio20",
    "audio21",
    "audio22",
    "audio23",
    "audio24",
    "audio25",
    "audio26",
    "audio27",
    "audio28",
    "audio29",
    "audio30",
    
    // ...add more as needed, matching your total pages
  ];

  $('#book').bind('turned', function (e, page) {
    audios.forEach(id => {
      if (id) {
        const audio = document.getElementById(id);
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      }
    });

    const currentAudioId = audios[page - 1];
    if (currentAudioId) {
      const currentAudio = document.getElementById(currentAudioId);
      if (currentAudio) {
        currentAudio.play();
      }
    }
  const constantAudio = document.getElementById('constant-audio');
  if (page > 30) {
    if (constantAudio.paused) {
      constantAudio.play();
    }
  } else {
    constantAudio.pause();
    constantAudio.currentTime = 0;
  }
});

  // Optional navigation
  $('#next').click(() => $('#book').turn('next'));
  $('#prev').click(() => $('#book').turn('previous'));
});

