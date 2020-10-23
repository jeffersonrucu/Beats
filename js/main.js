window.onload = function(){
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
}

$('.owl-carousel').owlCarousel({
  nav: false,
  dots: true,
  items: 1,
  smartSpeed: 200,
  animateOut: 'animate__fadeOut',
  animateIn: 'animate__zoomIn',
});



