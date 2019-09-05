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

function openNav(){
  var y;
  y = document.getElementById("burger");

  if (y.classList.contains("active")) {
    document.getElementById("mobNav").style.width = "0%";
    y.classList.remove("active");
  } else {
    document.getElementById("mobNav").style.width = "100%";
    y.classList.add("active");
  }
}
