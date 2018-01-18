//Lưu chuỗi ký tự

$phonenumber = "123456789";
function initString() {
  var elem = document.getElementsByClassName('phonenumber')
  for (var i in elem)
    elem[i].innerHTML = $phonenumber;
}

document.addEventListener('DOMContentLoaded', function() {
  initString();
}, false);