function aboutTabs(evt, tabShow){
  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("aboutInfo");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("about1Butt");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active","");
  }

  document.getElementById(tabShow).style.display = "block";
  evt.currentTarget.className += " active";
}
