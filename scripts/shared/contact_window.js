const socialWindow = document.getElementById('iconwindow');
const contactIcon = document.getElementById('contacticon');

window.addEventListener('click', function(e){   
  if ((contactIcon.contains(e.target) && socialWindow.style.visibility != "visible") || socialWindow.contains(e.target)) { 
    socialWindow.style.visibility = "visible";
  } else {
    socialWindow.style.visibility = "hidden";
  }
});