document.querySelector('.first').addEventListener("click", openProjectWe);

function openProjectWe() {
    document.querySelector('.webentwicklung').style.display = "block";
    document.querySelector('.Webdesign').style.display = "none";
    document.querySelector('.graphicdesign').style.display = "none";
  }

document.querySelector('.two').addEventListener("click", openProjectWd);

function openProjectWd() {
    document.querySelector('.Webdesign').style.display = "block";
    document.querySelector('.webentwicklung').style.display = "none";
    document.querySelector('.graphicdesign').style.display = "none";
    
  }

document.querySelector('.tree').addEventListener("click", openProjectGd);

function openProjectGd() {
    document.querySelector('.graphicdesign').style.display = "block";
    document.querySelector('.Webdesign').style.display = "none";
    document.querySelector('.webentwicklung').style.display = "none";
  }
