document.addEventListener("DOMContentLoaded",()=>{
    
      const station = new Swiper('.station', {
      direction:'horizontal',
      loop: true,
      speed:1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },  
    });



        const lookbookSlider = new Swiper('.lookbook-slider', {
        slidesPerView: 2.5,  /* 이미지가 살짝 잘려서 보이게 하여 다음 장 유도 */
        spaceBetween: 20,    /* 슬라이드 사이 간격 */
        loop: true,
        autoplay: {
            delay: 3000,
        },
        });
})




