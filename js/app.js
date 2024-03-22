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


document.getElementById('loadMoreButton').addEventListener('click', function() {
  var cardsContainer = document.getElementById('projectsSection'); // Get the cards container

  // Get the viewport dimensions
  var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  // Convert the current height from vh to pixels for accurate calculations
  var currentHeightInVh = 120; // This is the height you've set in CSS using vh
  var currentHeightInPx = (currentHeightInVh / 100) * viewportHeight; // Convert vh to px

  // Define the multiplier based on viewport width (like CSS media queries)
  var multiplier;
  if (viewportWidth < 600) { // For small screens
    multiplier = 1.2;
  } else if (viewportWidth >= 600 && viewportWidth < 1024) { // For medium screens
    multiplier = 1;
  } else { // For large screens
    multiplier = 1.5;
  }

  // Calculate new height based on the dynamic multiplier
  var newHeightInPx = currentHeightInPx * multiplier;

  // Apply the new height in pixels
  cardsContainer.style.height = newHeightInPx + 'px';

  // Show projectBoxFive and hide the loadMoreButton as before
  var cardFive = document.getElementById('projectBoxFive');
  cardFive.style.display = 'block';

  var loadMoreButton = document.getElementById('loadMoreButton');
  loadMoreButton.style.display = 'none';
});



