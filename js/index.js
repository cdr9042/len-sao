//JS cho trang chủ
import '../owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
import 'imports?jQuery=jquery!owl.carousel';

function init() { //chèn ảnh
  var html = '', img = '';
  for (var i = 1; i <= 5; i++) {
    img = '<img src=' + '../assets/img/actor/actor-' + i.toString() + '.jpg>';
    html = html + img;
  }
  $('#actor-slide').append(html);
  
}
$(document).ready(function(){
  init();
  $(".owl-carousel").owlCarousel();
});
// document.onload(init());
// document.addEventListener('DOMContentLoaded', function () {
//   initString();
// }, false);