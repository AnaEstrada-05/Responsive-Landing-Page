//function menuButton code (when click open sidebar)
function toggleNavBar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('active');
}
//function menuButton code (when click on option close sidebar)
function closeNavBar() {
  var sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active');
}