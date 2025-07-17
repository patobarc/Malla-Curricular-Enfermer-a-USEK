function aprobarRamo(elemento) {
  if (elemento.classList.contains("bloqueado")) return;

  elemento.classList.toggle("aprobado");

  // Liberar prerrequisitos si está aprobado
  const nombreRamo = elemento.textContent.trim();
  const todos = document.querySelectorAll(".ramo.bloqueado");
  todos.forEach((bloqueado) => {
    if (bloqueado.dataset.prerrequisito === nombreRamo) {
      bloqueado.classList.remove("bloqueado");
      bloqueado.setAttribute("onclick", "aprobarRamo(this)");
    }
  });
}
