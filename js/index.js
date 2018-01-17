//JS cho trang chủ

function initImage() { //chèn ảnh
  var html = '', img = '';
  for (var i = 1; i <= 5; i++) {
    img = '<img src=' + '../assets/img/actor/actor-' + i.toString() + '.jpg>';
    html = html + img;
  }
  console.log(html);
  $('#actor-slide').append(html);
}

document.onload(initImage());
// document.addEventListener('DOMContentLoaded', function () {
//   initString();
// }, false);