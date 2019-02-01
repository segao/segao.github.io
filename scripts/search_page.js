const linkDict = {'about' : 'About Me',
                  'education' : 'Education',
                  'workexp' : 'Work Experience',
                  'projects' : 'Projects',
                  'skills' : 'Skills',
                  'awards' : 'Awards',
                  'contact' : 'Contact'};
const linkContainer = document.getElementsByClassName('link-container')[0];
var active_id = window.location.hash.substring(1);
var old_id = null;
var str = linkDict[id];

function deselectLink() {
  if (old_id !== null) {
    document.getElementById(old_id+"-link").setAttribute("class", "link");
  }
}

function selectLink() {
  var link = document.getElementById(active_id+"-link");
  link.setAttribute("class", "link link-active");
  str = linkDict[active_id];
  showContent();
  old_id = active_id;
}

function navigateToLink() {
  clearTimeouts();
  deleteString();
  active_id = window.location.hash.substring(1);
  deselectLink();
  selectLink();
  typeSearchText(str);
  
}

function navigateToAnotherLink(id) {
  clearTimeouts();
  deleteString();
  active_id = id;
  deselectLink();
  selectLink();
  typeSearchText(str);
  showContent();
}

function showContent() {
  if (old_id !== null) {
    var oldContentId = old_id + '-content';
    document.getElementById(oldContentId).style.display = "none";
  }
  var contentId = active_id + '-content';
  document.getElementById(contentId).style.display = "block";
}