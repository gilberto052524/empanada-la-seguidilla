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

const usuariosAutorizados = {
  "Wilkin2000": "wilkin#2000",
  // Aquí puedes agregar los otros 19 clientes cuando quieras
};

function togglePassword() {
  const passInput = document.getElementById("loginPassword");
  passInput.type = passInput.type === "password" ? "text" : "password";
}

function mostrarFormulario() {
  document.getElementById("formularioCliente").style.display = "block";
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("bienvenida").style.display = "none";
}

function mostrarLogin() {
  document.getElementById("formularioCliente").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
  document.getElementById("bienvenida").style.display = "none";
}

function iniciarSesion() {
  const user = document.getElementById("loginUser").value;
  const pass = document.getElementById("loginPassword").value;

  if (usuariosAutorizados[user] === pass) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("formularioCliente").style.display = "none";
    document.getElementById("bienvenida").style.display = "block";
    window.scrollTo(0, 0);
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}
