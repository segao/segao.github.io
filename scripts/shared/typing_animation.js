const searchBar = document.getElementById('searchbar');
var timeouts = [];
var deleteText = true;

function clearTimeouts() {
  for (var j = 0; j < timeouts.length; j++) {
    clearTimeout(timeouts[j]);
  }
}

function typeSearchText(str) {
  searchBar.setAttribute("readonly", "readonly");
  deleteText = false;
  timeouts.push(setTimeout(typeString, 700, str, false));
}

function typeString(str) {
  if (searchBar.value.length < str.length) {
    searchBar.value += str.charAt(searchBar.value.length);
    timeouts.push(setTimeout(typeString, 80, str));
  }
}

function deleteString() {
  if (searchBar.value.length > 0) {
    searchBar.value = searchBar.value.substr(0, searchBar.value.length-1);
    timeouts.push(setTimeout(deleteString, 40));
  }  
}

function enableTextInput() {
  searchBar.removeAttribute("readonly");
}

function stopMessages() {
  clearTimeouts();
  deleteString();
  enableTextInput();
}