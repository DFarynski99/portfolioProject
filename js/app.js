document.addEventListener('DOMContentLoaded', function () {
  var bouncingElement = document.querySelector('#header2');
  var bouncingElement2 = document.querySelector('#header1');
  var bouncingElement3 = document.querySelector('#header3');


  bouncingElement.addEventListener('mouseenter', function () {
    // Add the 'bounce' class on mouse enter
    bouncingElement.classList.add('bounce');
  });



  bouncingElement2.addEventListener('mouseenter', function () {
    // Add the 'bounce' class on mouse enter
    bouncingElement2.classList.add('bounce');
  });
  bouncingElement3.addEventListener('mouseenter', function () {
    // Add the 'bounce' class on mouse enter
    bouncingElement3.classList.add('bounce');
  });






  bouncingElement.addEventListener('animationend', function () {
    // Remove the 'bounce' class after the animation completes
    bouncingElement.classList.remove('bounce');
  });




  bouncingElement2.addEventListener('animationend', function () {
    // Remove the 'bounce' class after the animation completes
    bouncingElement2.classList.remove('bounce');
  });

  bouncingElement3.addEventListener('animationend', function () {
    // Remove the 'bounce' class after the animation completes
    bouncingElement3.classList.remove('bounce');
  });


});
