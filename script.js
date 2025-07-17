document.addEventListener("DOMContentLoaded", function () {
  const ramos = document.querySelectorAll(".semestre li");

  ramos.forEach((ramo) => {
    ramo.addEventListener("click", function () {
      if (ramo.classList.contains("bloqueado")) return;

      // Cicla entre las clases: nada → aprobado → no-aprobado → nada
      if (ramo.classList.contains("aprobado")) {
        ramo.classList.remove("aprobado");
        ramo.classList.add("no-aprobado");
      } else if (ramo.classList.contains("no-aprobado")) {
        ramo.classList.remove("no-aprobado");
      } else {
        ramo.classList.add("aprobado");
      }
    });
  });
});
