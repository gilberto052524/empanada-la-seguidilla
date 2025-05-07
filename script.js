function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("clientForm").classList.add("hidden");
  document.getElementById("mensajeBienvenida").classList.add("hidden");
}

function showClientForm() {
  document.getElementById("clientForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.getElementById("mensajeBienvenida").classList.add("hidden");
}

function sendClientForm(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const direccion = document.getElementById("direccion").value;
  const telefono = document.getElementById("telefono").value;
  const genero = document.getElementById("genero").value;
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const confirmar = document.getElementById("confirmar").value;

  if (clave !== confirmar) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  const mensaje = `
    NUEVO CLIENTE:
    Nombre: ${nombre}
    Apellido: ${apellido}
    Dirección: ${direccion}
    Teléfono: ${telefono}
    Género: ${genero}
    Usuario: ${usuario}
    Contraseña: ${clave}
  `;

  window.location.href = `mailto:empanadalaseguidilla@gmail.com?subject=Nuevo Registro de Cliente&body=${encodeURIComponent(mensaje)}`;

  document.getElementById("clientForm").reset();
  document.getElementById("clientForm").classList.add("hidden");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function verificarCliente(event) {
  event.preventDefault();

  const usuario = document.getElementById("loginUsuario").value;
  const clave = document.getElementById("loginClave").value;

  const clienteValido = clientesAutorizados.find(
    (c) => c.usuario === usuario && c.contrasena === clave
  );

  if (clienteValido) {
    document.getElementById("mensajeBienvenida").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

const clientesAutorizados = [
  {
    usuario: "Wilkin2000",
    contrasena: "wilkin#2000"
  },
  // Espacio para 19 clientes más
  // { usuario: "cliente2", contrasena: "clave2" },
  // { usuario: "cliente3", contrasena: "clave3" },
];
