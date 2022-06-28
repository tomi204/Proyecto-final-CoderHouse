// VARIABLES
const getIcon = document.querySelector(".iconPlay");
const getSong = document.querySelector(".song");

//  FUNCTION MUSIC PROJECTS
getIcon.addEventListener("click", () => {
  if (getSong.paused) {
    getIcon.src = "../img/pauseb.png";
    getSong.play();
  } else {
    getIcon.src = "../img/playicon.jpg";
    getSong.pause();
  }
});
