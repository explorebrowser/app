var tabs = 1;
var openTab = 1;
function newtab() {

  const allTabs = document.querySelectorAll('.tab');

  allTabs.forEach(tab => {
    tab.style.backgroundColor = 'grey';
  });
  
  const newButton = document.getElementById('new-tab');
  newButton.remove();
  
  const tab = document.createElement("div");
  tab.innerHTML = "<p id='tab-name'>New Tab</p><button class='close-tab' id='close-tab' onclick='this.parentElement.remove();'><center>x</center></button>";
  tab.setAttribute('class', 'tab');
  tab.setAttribute('id', 'tab');
  document.getElementById("tabs").appendChild(tab);
  
  const newTab = document.createElement("button");
  newTab.setAttribute('id', 'new-tab');
  newTab.setAttribute('class', 'new-tab');
  newTab.setAttribute('onclick', 'newtab()');
  document.getElementById("tabs").appendChild(newTab);
  
  tabs++;
  var openTab = tabs;
}

function closeTab() {
  this.parentElement.remove();
  tabs--;
  
  if (tabs === 0) {
    window.close();
  }
}