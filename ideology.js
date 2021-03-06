const slider = document.querySelector(".slider")
const sliderImages = document.querySelectorAll(".slider img")

const prevBtn = document.querySelector("#prev")
const nextBtn = document.querySelector("#next")

let counter = 1;
const size = sliderImages[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
if (counter >= sliderImages.length -1) return;
slider.style.transition = "transform 0.4s ease-in";
counter++; 
slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  slider.style.transition = "transform 0.4s ease-in";
  counter--; 
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
  });

  slider.addEventListener('transitionend', () => {
if (sliderImages[counter].id === 'lastPicture'){
  slider.style.transition = "none";
  counter = sliderImages.length -2;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
}
if (sliderImages[counter].id === 'firstPicture'){
  slider.style.transition = "none";
  counter = sliderImages.length - counter;
  slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
}
  })

  
  async function generateQuote() {
    const response = await 
    fetch('https://animechan.vercel.app/api/random');
    const data = await response.json();
    const {anime, character, quote} = data;
    document.querySelector("#anime-display").textContent = anime;
    document.querySelector("#quote-display").textContent = quote;
    document.querySelector("#character-display").textContent = character;
    console.log(data);
  };


function btnNewsletter() {
 alert('Thank you! We will keep you updated.')
}
