$phonenumber = "123456789";
function initString() {
  document.getElementById("phonenumber").innerHTML = $phonenumber;
}

document.addEventListener('DOMContentLoaded', function() {
  initString();
}, false);