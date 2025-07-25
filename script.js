const buttons = document.querySelectorAll('button');
const audio = document.querySelector('.audio');
const image = document.querySelector('.image');
const soundIcon = document.querySelector('.material-symbols-outlined');

buttons.forEach(button => {
  button.addEventListener('click', () => {

    const letter = button.innerText;

    // Update image source
    image.classList.remove("image"); // remove class to retrigger animation
    void image.offsetWidth; // force reflow
    image.src = `images/${letter}.jpeg`;
    image.classList.add("image"); // add back class

    // Update audio
    audio.src = `Sound/${letter}.mp3`;
    audio.play();

    // Change sound icon color while playing
    soundIcon.style.color = '#ff6f61';

    // Disable all buttons while playing
    buttons.forEach(btn => btn.disabled = true);

    // When audio ends, reset icon and enable buttons
    audio.onended = () => {
      soundIcon.style.color = 'gray';
      buttons.forEach(btn => btn.disabled = false);
    };
  });
});
// 🔄 Hide preloader when page fully loads
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("preloader-hide");
});
