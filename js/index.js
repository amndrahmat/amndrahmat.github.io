//---------------------------------------------------- navbar ------------------------------------------------
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 2px";
  } else {
    document.getElementById("navbar").style.padding = "20px 2px";
  }
}
//----------------------------------------------------my work ------------------------------------------------
function openwork(evt, workName) {
  var i, tabcontentwork;
  tabcontentwork = document.getElementsByClassName("tabcontentwork");
  for (i = 0; i < tabcontentwork.length; i++) {
    tabcontentwork[i].style.display = "none";
  }

  document.getElementById(workName).style.display = "block";
  evt.currentTarget.className += " active";
}
//---------------------------------------------------- project ------------------------------------------------
function openproject(evt2, projectName) {
  var i, tabcontentproject;
  tabcontentproject = document.getElementsByClassName("tabcontentproject");
  for (i = 0; i < tabcontentproject.length; i++) {
    tabcontentproject[i].style.display = "none";
  }

  document.getElementById(projectName).style.display = "block";
  evt2.currentTarget.className += " active";
}
