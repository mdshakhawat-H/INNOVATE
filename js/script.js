let menufixed = document.querySelector('nav')
window.addEventListener("scroll", function(){
this.window.scrollY
console.log(this.window.scrollY);
   let scrolling = window.scrollY

   if(scrolling > 50){
       menufixed.classList.add('menufixed')
    }
    else{
       menufixed.classList.remove('menufixed')
   }
})

$('.SE_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '.slik_prev_arrow',
    nextArrow: '.slik_next_arrow',
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // RELIABLE COUNTER START
  $('.reliable_count').counterUp();
  // RELIABLE COUNTER END
  // COMPANIES COUNTER START
  $('.com_count').counterUp();
  
  // COMPANIES COUNTER END
  // TESTIMONIAL SLIDER START
  $('.test_slid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.test_prev',
    nextArrow: '.test_next',
    autoplay: false,
    dots: true,
    autoplaySpeed: 2000,
  });
  // TESTIMONIAL SLIDER END 


  // ========== FREE COLLECTION START ==================



  
  // ========== FREE COLLECTION END ==================