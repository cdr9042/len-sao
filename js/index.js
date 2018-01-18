//JS cho trang chủ

function init() { //chèn ảnh
  var html = '', img = '';
  for (var i = 1; i <= 5; i++) {
    img = '<div><img src=' + '../assets/img/actor/actor-' + i.toString() + '.jpg></div>';
    html = html + img;
  }
  $('#actor-slide').append(html);
}

// var owl = $('.owl-carousel');
// owl.owlCarousel();

$(document).ready(function(){
  // init();
  $(".owl-carousel").owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:7000,
    autoplayHoverPause:true,
});
});



// document.onload(init());
// document.addEventListener('DOMContentLoaded', function () {
//   initString();
// }, false);