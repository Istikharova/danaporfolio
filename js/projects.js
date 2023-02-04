document.querySelector('.two').addEventListener("click", openProjectWd); 
document.querySelector('.erste').addEventListener("click", openProjectWe);
document.querySelector('.thre').addEventListener("click", openProjectGd); 

function openProjectWd() {
    document.querySelector('.Webdesign').style.display = "block";
    document.querySelector('.webentwicklung').style.display = "none";
    document.querySelector('.graphicdesign').style.display = "none";
    console.log("webdesign");
    
  }


function openProjectGd() {
    document.querySelector('.graphicdesign').style.display = "block";
    document.querySelector('.Webdesign').style.display = "none";
    document.querySelector('.webentwicklung').style.display = "none";
    console.log("graphicdesign");

  }

function openProjectWe() {
  document.querySelector('.webentwicklung').style.display = "block";
  document.querySelector('.graphicdesign').style.display = "none";
  document.querySelector('.Webdesign').style.display = "none"; 
  console.log("entwicklung");

}
 
