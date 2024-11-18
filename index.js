const tap = document.querySelectorAll(".application-button");
const form = document.querySelector(".formContent");
const exitButton = document.getElementById("exit")

tap.forEach(el => {
    el.addEventListener('click', function(){
        form.classList.add("formActive")
    })
})

exitButton.addEventListener('click', function(){
    form.classList.remove("formActive")
})

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
      
});

const Player = document.getElementById('player2');
const PlayBtn = document.getElementById('play');
const poster = document.getElementById('poster')
let times = 0, playY;
const playVideo = PlayBtn.addEventListener( 'click' , () => {
    if(times == 0){
      playY = Player.src += '?autoplay=1';
      times = 1;
      PlayBtn.classList.add("buttonPlayOff")
      poster.classList.add("imgFonNone")
    }
});
