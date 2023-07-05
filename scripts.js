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
  let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distanciaSkills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("html");
    habilidades[1].classList.add("css");
    habilidades[2].classList.add("javascript");
    habilidades[3].classList.add("MySQL");
    habilidades[4].classList.add("cc");
    habilidades[5].classList.add("csharp");
    habilidades[6].classList.add("java");
    habilidades[7].classList.add("ingles");
  }
}
window.onscroll = function () {
  efectoSkills();
};
