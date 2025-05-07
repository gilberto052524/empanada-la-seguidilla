document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("userId").value;
  const password = document.getElementById("password").value;

  if (id === "40215118684" && password === "empanadalaseguidilla") {
    alert("Inicio de sesión exitoso");
    // Aquí puedes redirigir o mostrar el sistema de inventario
  } else {
    alert("ID o contraseña incorrectos");
  }
});
