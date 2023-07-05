let menuVisible = false;

function OcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function efectoSkills() {
  let skills = document.getElementById("skills");
  let skillsTop = skills.offsetTop;
  let skillsHeight = skills.offsetHeight;
  let windowHeight = window.innerHeight;
  let windowScrollTop = window.pageYOffset;

  if (windowScrollTop > skillsTop + skillsHeight - windowHeight) {
    skills.classList.add("skills-efecto");
  }
}
