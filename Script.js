document.querySelectorAll(".ramo").forEach(ramo => {
  const id = ramo.dataset.id;
  const prereq = ramo.dataset.prereq;

  // Estado guardado
  if (localStorage.getItem(id) === "true") {
    ramo.classList.add("approved");
  }

  if (prereq && localStorage.getItem(prereq) !== "true") {
    ramo.classList.add("locked");
  }

  ramo.addEventListener("click", () => {
    if (ramo.classList.contains("locked")) return;

    ramo.classList.toggle("approved");
    const isApproved = ramo.classList.contains("approved");
    localStorage.setItem(id, isApproved);

    // Desbloquear los que dependían de este
    document.querySelectorAll(`[data-prereq='${id}']`).forEach(dep => {
      if (isApproved) {
        dep.classList.remove("locked");
      } else {
        dep.classList.add("locked");
        dep.classList.remove("approved");
        localStorage.setItem(dep.dataset.id, false);
      }
    });
  });
});

