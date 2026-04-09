document.addEventListener("DOMContentLoaded",()=>{
    
      const station = new Swiper('.station', {
      direction:'horizontal',
      loop: true,
      speed:1000,
     
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
        slidesPerView: 2.5,  
        spaceBetween: 20,    
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
         
            0: { 
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,  
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3,  
              spaceBetween: 18,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 18,
             }
            }
        });


     
          const lookbookSwiper = new Swiper('.lookbook-swiper', {
             
              autoplay: {
                  delay: 1500,
                  disableOnInteraction: false,
              },
             
              slidesPerView: 2.8, 
              spaceBetween: 18, 
              loop: true,      
              
             
              breakpoints: {
                  0: { 
                    slidesPerView: 1.8,
                    spaceBetween: 14,
                  },
                  768: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 2.5 }
              },
          });
})




