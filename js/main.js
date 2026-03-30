document.addEventListener("DOMContentLoaded",()=>{
    
      const station = new Swiper('.station', {
      direction:'horizontal',
      loop: true,
      speed:1000,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //   },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
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


        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 5,
          spaceBetween: 18,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            // 1440px 이하일 때 실행
            0: { 
              slidesPerView: 1.8, /* 모바일 고려 */
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,   /* 태블릿 */
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,   /* 1440 이하 타겟 */
              spaceBetween: 18,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 18,
             }
            }
        });


        // main.js
          const lookbookSwiper = new Swiper('.lookbook-swiper', {
              // 자동 재생
              autoplay: {
                  delay: 1500,
                  disableOnInteraction: false,
              },
              // 한 번에 보여줄 개수 (2.5로 하면 다음 사진이 반쯤 걸쳐 보여서 예뻐요)
              slidesPerView: 2.8, 
              spaceBetween: 18, // 슬라이드 사이 간격
              loop: true,       // 무한 반복
              
              // 반응형 설정
              breakpoints: {
                  0: { 
                    slidesPerView: 1.8, /* 모바일 고려 */
                    spaceBetween: 14,
                  },
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 2.5 }
              },
          });
})




