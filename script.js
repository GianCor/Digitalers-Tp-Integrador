
const mensajesResultado = document.querySelector("#mensajesResultado");

const botonUsuario = document.querySelector("#validar-usuario");
botonUsuario.addEventListener("click", function(e) {
	const comprobar_usuario = document.getElementById("usuario-login").value;
	let mensajesErrores = document.getElementById("errores");
	if (validar(comprobar_usuario)) {
		nombreUsuario = comprobar_usuario;
		location.href = "index.html"
		mensajesResultado.textContent = "¡Bienvenido " + nombreUsuario + "!";
		e.preventDefault();
		e.stopPropagation();
	} else {
		let errores = "";
		let errorEncontrado = false;
		mensajesErrores.innerHTML = "";

		if (!validar(comprobar_usuario)) {
			errores += "* Los datos ingresados son incorrectos, por favor, intente nuevamente. <br> <br>";
			errorEncontrado = true;
		}
		if (errorEncontrado) {
			mensajesErrores.innerHTML = errores;
		}
		/*mensajesResultado.textContent = "El nombre solo debe tener letras y números, y una longitud 4 a 30 caracteres.";*/
		e.preventDefault();
		e.stopPropagation();
	};
});

function validar(usuario) {
	const regEx = /^[A-Za-z]\w{3,29}$/.exec(usuario);
	const valido = !!regEx;
	return valido;
}