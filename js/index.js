//JS cho trang chủ

function init() { //chèn ảnh
  var html = '', img = '';
  for (var i = 1; i <= 5; i++) {
    img = '<div><img src=' + '../assets/img/actor/actor-' + i.toString() + '.jpg></div>';
    html = html + img;
  }
  $('#actor-slide').append(html); //thêm ảnh cho slide
  
  html = '<button type="button" class="btn bold">Đăng ký ngay</button>';
  $('.add-buy-button').append(html); // thêm nút đăng ký cho những thẻ có class này
}

// var owl = $('.owl-carousel');
// owl.owlCarousel();

$(document).ready(function(){
  init();
  $(".owl-carousel").owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:false,
});
});



// document.onload(init());
// document.addEventListener('DOMContentLoaded', function () {
//   initString();
// }, false);