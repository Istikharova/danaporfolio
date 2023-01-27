/* burger menü */
/* document.querySelector('.burger').addEventListener("click", openNav);


function openNav() {
    document.querySelector('nav .nav li').style.display = "block";
 
  } */

  document.querySelector('.button-wrapper').addEventListener('click', function () {
    document.querySelector('.nav-container').classList.toggle('active');
});
