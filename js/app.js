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

document.getElementById('aboutButtonLeftPanel').addEventListener("click", function (){
  document.getElementById('aboutSection').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('projectsButtonLeftPanel').addEventListener("click", function (){
  document.getElementById('projectsSection').scrollIntoView({behavior: 'smooth'})
});

document.getElementById('contactButtonLeftPanel').addEventListener("click", function (){
  document.getElementById('contactSection').scrollIntoView({behavior: "smooth"})
})


document.getElementById('aboutFooterButton').addEventListener("click", function (){
  document.getElementById('aboutSection').scrollIntoView({behavior: 'smooth'})
})

document.getElementById('projectsFooterButton').addEventListener("click", function (){
  document.getElementById('projectsSection').scrollIntoView({behavior: 'smooth'})
});

document.getElementById('contactFooterButton').addEventListener("click", function (){
  document.getElementById('contactSection').scrollIntoView({behavior: "smooth"})
})


document.getElementById('hamburgerMenu500px').addEventListener("click", function () {
  var hiddenLeftPanels = document.getElementsByClassName('hiddenLeftPanel500px');
  Array.from(hiddenLeftPanels).forEach(function(panel) {
    // Toggle the 'visible' class
    if (panel.classList.contains('visible')) {
      panel.classList.remove('visible');
    } else {
      panel.classList.add('visible');
    }
  });
});


document.getElementById('aboutButtonLeftPanelHidden').addEventListener("click", function(){
  document.getElementById('aboutSection').scrollIntoView({behavior: "smooth"})
})
document.getElementById('projectsButtonLeftPanelHidden').addEventListener("click", function(){
  document.getElementById('projectsSection').scrollIntoView({behavior: "smooth"})
})
document.getElementById('contactButtonLeftPanelHidden').addEventListener("click", function(){
  document.getElementById('contactSection').scrollIntoView({behavior: "smooth"})
})
