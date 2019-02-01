const hello = "Hello! My name is Sharon Gao.";
const job = "I am a recent University of Pittsburgh graduate in Computer Science.";
const search = "Type here to search more about me!";
const searchLinks = ["Education", "Work Experience", "Skills", "Projects", "Awards", "Resume", "About Me"];

function checkFocus() {
  if (!document.hasFocus()) {
    replayMessages();
  }
}

function replayMessages() {
  clearTimeouts();
  if (searchBar.value.length > 0) {
    deleteString();
    timeouts.push(setTimeout(showWelcomeMessage, 2000));
  } else {
    showWelcomeMessage();
  }  
}

function showWelcomeMessage() {
  searchBar.setAttribute("readonly", "readonly");
  timeouts.push(setTimeout(typeString, 1000, hello));
  timeouts.push(setTimeout(deleteString, 5500));
  timeouts.push(setTimeout(typeString, 8500, job));
  timeouts.push(setTimeout(deleteString, 16500));
  timeouts.push(setTimeout(typeString, 20500, search));
  timeouts.push(setTimeout(deleteString, 26000));
  timeouts.push(setTimeout(enableTextInput, 26500));
}

showWelcomeMessage();
setInterval(checkFocus, 200);