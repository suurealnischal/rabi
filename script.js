const quoteButton = document.getElementById('quoteButton');
const videoOverlay = document.getElementById('videoOverlay');
const quoteVideo = document.getElementById('quoteVideo');

const videos = ['videos/vid1.mp4', 'videos/vid2.mp4', 'videos/vid3.mp4']; // Add paths to your videos here

quoteButton.addEventListener('click', () => {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  quoteVideo.src = randomVideo;
  videoOverlay.classList.add('active');
  quoteVideo.play();

  quoteVideo.onended = () => {
    videoOverlay.classList.remove('active');
  };
});

videoOverlay.addEventListener('click', () => {
  videoOverlay.classList.remove('active');
  quoteVideo.pause();
  quoteVideo.src = '';
});
