new Swiper('.swiper',{
  mousewheel: {
    sensitivity: 1,
    // eventsTarget: '.swiper-slide'
  },

  spaceBetween:32,

  loop:true,

  freeMode:true,

  // autoHeight: true,

  slidesPerView: 2,

  // centeredSlides:true,

  initialSlide: 1,


  // breackpoints

  breakpoints: {
    // when window width is >= 320px
    150: {
      slidesPerView: 1,
    },
    
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },

    480: {
      slidesPerView: 1,
    },


    640: {
      slidesPerView: 1,
      centeredSlides:true,
    },

    760: {
      slidesPerView: 2,
      centeredSlides:true,
    }
  }
});



// Burger

const burger = document.querySelector('.header__burger');
if (burger){
  const navigation = document.querySelector('.navigation');
  burger.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    navigation.classList.toggle('_active');
  });
}