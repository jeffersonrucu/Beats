window.onload = function(){
  //filtro img
  var write = document.getElementById('button-color-write');
  var red = document.getElementById('button-color-red');
  var black = document.getElementById('button-color-black');

  var imageOne = document.getElementById('img-one');
  var imageTwo = document.getElementById('img-two');
  var imageThree = document.getElementById('img-three');


  write.onclick = function(){
    imageOne.src = '../assets/images/Bitmap_box_white_frente.png';
    imageTwo.src = '../assets/images/Bitmap_box_white_lado.png';
    imageThree.src = '../assets/images/Bitmap_box_white_cima.png';
  }

  red.onclick = function(){
    imageOne.src = '../assets/images/Bitmap_box_red.png';
    imageTwo.src = '../assets/images/Bitmap_box_red_lado.png';
    imageThree.src = '../assets/images/Bitmap_box_red_cima.png';
  }

  black.onclick = function(){
    imageOne.src = '../assets/images/Bitmap_box_black_frente.png';
    imageTwo.src = '../assets/images/Bitmap_box_black_lado.png';
    imageThree.src = '../assets/images/Bitmap_box_black_cima.png';
  }

  var searchOpen = document.getElementById('search-open');
  var searchPesq = document.getElementById('search-pesq');
  var boxNav = document.getElementById('close');
  var boxSearch = document.getElementById('open');

  searchOpen.onclick = function(){
    boxNav.style.display = "none";
    boxSearch.style.display = "flex";
  }

  searchPesq.onclick = function(){
    boxNav.style.display = "flex";
    boxSearch.style.display = "none";
  }

  //animate
  const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const AnimateElement = document.querySelectorAll('[data-animescroll]');
  const animationClass = 'animate-scroll';

  animeScroll();

  if(AnimateElement.length){
    window.addEventListener('scroll',debounce (function(){
      animeScroll();
    }, 100))
  }

  function animeScroll(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    AnimateElement.forEach(function(elementScroll){
      if((windowTop) > elementScroll.offsetTop){

        elementScroll.classList.add(animationClass)
      }else {
        elementScroll.classList.remove(animationClass)
      }
    })
  }
}

$('.owl-carousel').owlCarousel({
  nav: false,
  dots: true,
  items: 1,
  smartSpeed: 200,
  animateOut: 'animate__fadeOut',
  animateIn: 'animate__zoomIn',
});



