<script>
  // Lista de prerrequisitos en formato: "id del ramo bloqueado": ["id del prerrequisito"]
  const prerrequisitos = {
    "bioquimica": ["quimica"],
    "fisiologia": ["anatomia"],
    "enfermeriaMedicaII": ["enfermeriaMedicaI"],
    // agrega más aquí según tu malla
  };

  // Cargar estado guardado
  window.addEventListener("DOMContentLoaded", () => {
    const ramos = document.querySelectorAll(".ramo");

    ramos.forEach(ramo => {
      const id = ramo.id;
      if (localStorage.getItem(id) === "aprobado") {
        ramo.classList.add("aprobado");
      }

      // Verificar bloqueo por prerrequisito
      if (prerrequisitos[id]) {
        const bloqueado = prerrequisitos[id].some(prereq => {
          return localStorage.getItem(prereq) !== "aprobado";
        });
        if (bloqueado) {
          ramo.classList.add("bloqueado");
        }
      }

      // Click para aprobar (solo si no está bloqueado)
      ramo.addEventListener("click", () => {
        if (ramo.classList.contains("bloqueado")) return;

        ramo.classList.toggle("aprobado");

        if (ramo.classList.contains("aprobado")) {
          localStorage.setItem(id, "aprobado");
        } else {
          localStorage.removeItem(id);
        }

        // Revalidar todos los ramos que dependan de este
        window.location.reload(); // opción simple por ahora
      });
    });
  });
</script>
